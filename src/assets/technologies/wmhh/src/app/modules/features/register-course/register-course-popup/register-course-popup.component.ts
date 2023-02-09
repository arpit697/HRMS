import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import {
  DESCRIBE_WORKPLACE,
  DESCRIBES_ROLE,
} from "src/app/constant/app-constant";
import { USER_QUERIES } from "src/app/constant/urls";
import { ThankYouComponent } from "src/app/modules/common/components/thank-you/thank-you.component";
import { TrainingPopupComponent } from "src/app/modules/common/components/training-popup/training-popup.component";
import { FormService } from "src/app/services/form.service";
import { HttpService } from "src/app/services/http.service";
import { UtilityService } from "src/app/services/utility.service";
import { RegisterCourseSuccessPopupComponent } from "../register-course-success-popup/register-course-success-popup.component";
import { RegisterCourseService } from "../register-course.service";

@Component({
  selector: "app-register-course-popup",
  templateUrl: "./register-course-popup.component.html",
  styleUrls: ["./register-course-popup.component.scss"],
})
export class RegisterCoursePopupComponent implements OnInit {
  trainingForm: FormGroup;

  describesWorkplace = DESCRIBE_WORKPLACE;
  describeRoles = DESCRIBES_ROLE;

  constructor(
    public dialogRef: MatDialogRef<RegisterCoursePopupComponent>,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private registerService: RegisterCourseService,
    private utilityService: UtilityService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private router: Router
  ) {
    if (this.data && this.data.slug) {
      this.createTrainingForm();
      this.getFeedbackQuestions();
    } else {
      this.routeToHome();
    }
  }

  ngOnInit(): void {}

  routeToHome() {
    this.router.navigate(["/"]);
    this.dialogRef.close();
  }
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
      emailAddress: this.formService.getControl("email"),
      phoneNumber: this.formService.getControl("phone", false),
      questionanswerobj: this.formBuilder.array([], [Validators.required]),
      aptunit: this.formService.getControl("dropdown", false),
      street: this.formService.getControl("dropdown"),
      city: this.formService.getControl("dropdown"),
      province: this.formService.getControl("dropdown"),
      postalCode: this.formService.getControl("dropdown"),
      aptnumber: this.formService.getControl("dropdown"),
      // best:this.formService.getControl('dropdown'),
      // role:this.formService.getControl('dropdown'),
      // comments:this.formService.getControl('dropdown'),
      // otherBest:this.formService.getControl('dropdown'),
      // otherRole:this.formService.getControl('dropdown')
    });
  }

  async getFeedbackQuestions() {
    try {
      const questions = await this.registerService.getDynamicQuestions(
        this.data.slug
      );
      if (questions.data) {
        this.createFeedbackFormArray(questions.data);
      }
    } catch (error) {
      this.routeToHome();
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
      const formValue = { ...this.trainingForm.value };
      if (formValue.phoneNumber == "") {
        delete formValue.phoneNumber;
      }

      if (formValue.aptunit == "") {
        delete formValue.aptunit;
      }

      let formData = {
        ...formValue,
        pageurl: location.href,
        userbrowser: this.utilityService.getUserAgentBrowser(),
        requestfrom: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
          ? "Mobile"
          : "Web",
        // userType:
        //   this.utilityService.getAuthToken() &&
        //   this.utilityService.getAuthToken().length
        //     ? this.utilityService.profileData._id
        //     : "Guest User",
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

      const res = await this.registerService.register({
        ...formData,
        slug: this.data.slug,
      });

      if (res.data) {
        const thankYouDialog = this.dialog.open(
          RegisterCourseSuccessPopupComponent,
          {
            width: "720px",
            disableClose: true,
            autoFocus: false,
            // data: { ...this.trainingForm.value },
          }
        );
        thankYouDialog.afterClosed().subscribe((data) => {});
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
  /**
   * Will restrict the user from entering more than 10 digits as mobile number
   * @param event
   */
  handleKeyDown(event) {
    const inputValue: string = event.target.value;
    if (event.key == "Backspace") {
      return;
    }
    if (inputValue.length >= 10) {
      event.preventDefault();
      return;
    }
  }
}
