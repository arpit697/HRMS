import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { FormService } from "src/app/services/form.service";
import {
  DESCRIBES_ROLE,
  DESCRIBE_WORKPLACE,
} from "src/app/constant/app-constant";
import { HttpService } from "src/app/services/http.service";
import { USER_QUERIES } from "src/app/constant/urls";
import { UtilityService } from "src/app/services/utility.service";
import { ThankYouComponent } from "../thank-you/thank-you.component";

@Component({
  selector: "app-training-popup",
  templateUrl: "./training-popup.component.html",
  styleUrls: ["./training-popup.component.scss"],
})
export class TrainingPopupComponent implements OnInit {
  trainingForm: FormGroup;

  describesWorkplace = DESCRIBE_WORKPLACE;
  describeRoles = DESCRIBES_ROLE;

  constructor(
    public dialogRef: MatDialogRef<TrainingPopupComponent>,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private httpService: HttpService,
    private utilityService: UtilityService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {
    this.createTrainingForm();
    this.getFeedbackQuestions();
  }

  ngOnInit(): void {}

  get feedbackQuestionsFormArray() {
    return this.trainingForm.get("questionanswerobj") as FormArray;
  }

  close() {
    this.dialogRef.close();
  }

  createTrainingForm() {
    this.trainingForm = this.formBuilder.group({
      firstName: this.formService.getControl("name"),
      lastName: this.formService.getControl("name"),
      email: this.formService.getControl("email"),
      questionanswerobj: this.formBuilder.array([], [Validators.required]),
      // best:this.formService.getControl('dropdown'),
      // role:this.formService.getControl('dropdown'),
      // comments:this.formService.getControl('dropdown'),
      // otherBest:this.formService.getControl('dropdown'),
      // otherRole:this.formService.getControl('dropdown')
    });
  }

  async getFeedbackQuestions() {
    const questions = await this.httpService.get(USER_QUERIES).toPromise();
    if (questions.data) {
      this.createFeedbackFormArray(questions.data);
    }
  }

  createFeedbackFormArray(list) {
    for (let i = 0; i < list.length; i++) {
      const singleFormGroup: FormGroup = this.createSingleFeedbackGroup(
        list[i]
      );
      console.log("***", singleFormGroup);
      this.feedbackQuestionsFormArray.push(singleFormGroup);
    }
    if (this.data) {
      this.trainingForm.patchValue({ ...this.data });
    }
  }

  createSingleOptionGroup(option) {
    return this.formBuilder.group({
      value: [option],
      viewValue: [option],
    });
  }

  createSingleFeedbackGroup(question) {
    const formGroup = this.formBuilder.group({
      question: [question.question],
      questiontype: [question.questiontype],
      answer: this.formService.getControl(
        "dropdown",
        question.questiontype === "radio"
      ),
      option: this.formBuilder.array([]),
      otherAnswer: this.formService.getControl("dropdown", false),
      placeholdertext: [question.placeholdertext],
    });
    if (question.option && question.option.length) {
      for (let i = 0; i < question.option.length; i++) {
        const optionGroup: FormGroup = this.createSingleOptionGroup(
          question.option[i]
        );
        (<FormArray>formGroup.get("option")).push(optionGroup);
      }
    }
    return formGroup;
  }

  selectionChange(item: FormGroup, i: number) {
    if (item.get("answer").value === "Other") {
      item.get("otherAnswer").setValidators([Validators.required]);
      item.get("answer").clearValidators();
    } else {
      item.get("answer").setValidators([Validators.required]);
      item.get("otherAnswer").clearValidators();
    }
    item.get("answer").updateValueAndValidity();
    item.get("otherAnswer").updateValueAndValidity();
  }

  async submitTraining() {
    console.log("***", this.trainingForm);

    try {
      if (this.trainingForm.invalid) {
        this.trainingForm.markAllAsTouched();
        throw { type: 1 };
      }

      let formData = {
        ...this.trainingForm.value,
        pageurl: location.href,
        userbrowser: this.utilityService.getUserAgentBrowser(),
        requestfrom: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
          ? "Mobile"
          : "Web",
        userType:
          this.utilityService.getAuthToken() &&
          this.utilityService.getAuthToken().length
            ? this.utilityService.profileData._id
            : "Guest User",
      };

      formData.questionanswerobj = this.feedbackQuestionsFormArray.value.map(
        (list) => {
          if (list.answer === "Other") {
            return {
              // questiontype:list.questiontype,
              answer: list.otherAnswer,
              question: list.question,
              // "answerDescription": "test"
            };
          } else {
            return {
              // questiontype:list.questiontype,
              answer: list.answer,
              question: list.question,
              // "answerDescription": "test"
            };
          }
        }
      );
      const res = await this.httpService
        .post(USER_QUERIES, { ...formData })
        .toPromise();
      if (res.data) {
        const thankYouDialog = this.dialog.open(ThankYouComponent, {
          width: "720px",
          disableClose: true,
          autoFocus: false,
          data: { ...this.trainingForm.value },
        });
        thankYouDialog.afterClosed().subscribe((data) => {
          if (data) {
            this.dialog.open(TrainingPopupComponent, {
              width: "820px",
              disableClose: true,
              autoFocus: false,
              data: data,
            });
          }
        });
        this.dialogRef.close();
        // this.utilityService.showAlert('Your feedback is submitted successfully !')
      }
    } catch (error) {
      console.log(error);
      if (error && error.type === 1) {
        this.utilityService.showAlert("Please fill all the required fields !");
      }
    }
  }
}
