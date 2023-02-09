import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { FormService } from "src/app/services/form.service";
import { HttpService } from "src/app/services/http.service";
import { GET_HELP_IMPROVE, POST_HELP_IMPROVE } from "src/app/constant/urls";
import { UtilityService } from "src/app/services/utility.service";

@Component({
  selector: "app-help-us",
  templateUrl: "./help-us.component.html",
  styleUrls: ["./help-us.component.scss"],
})
export class HelpUsComponent implements OnInit {
  helpForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<HelpUsComponent>,
    private formBuilder: FormBuilder,
    private formService: FormService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpService: HttpService,
    private utilityService: UtilityService
  ) {
    // this.getHelpQuestions()
    this.createHelpUsForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get feedbackQuestionsFormArray() {
    return this.helpForm.get("questionanswerobj") as FormArray;
  }

  async getHelpQuestions() {
    const questions = await this.httpService.get(GET_HELP_IMPROVE).toPromise();
    if (questions.data) {
      this.createHelpFormArray(questions.data);
    }
  }

  createHelpFormArray(list) {
    for (let i = 0; i < list.length; i++) {
      const singleFormGroup: FormGroup = this.createSingleFeedbackGroup(
        list[i]
      );
      console.log("***", singleFormGroup);
      this.feedbackQuestionsFormArray.push(singleFormGroup);
    }
  }

  createHelpUsForm() {
    this.helpForm = this.formBuilder.group({
      // questionanswerobj: this.formBuilder.array([])
      fullName: this.formService.getControl("name"),
      userEmail: this.formService.getControl("email"),
      userFeedback: this.formService.getControl("feedback"),
    });
  }

  createSingleFeedbackGroup(question) {
    const formGroup = this.formBuilder.group({
      question: [question.question],
      questiontype: [question.questiontype],
      answer: this.formService.getControl(
        "description",
        question.questiontype === "rating"
      ),
    });
    return formGroup;
  }

  ngOnInit(): void {}

  async helpSubmit() {
    // console.log("****", this.helpForm);

    try {
      if (this.helpForm.invalid) {
        return;
      }

      // const feedbackdata = [
      //   ...this.feedbackQuestionsFormArray.value.filter(
      //     (item) => item.answer != ""
      //   ),
      // ];
      const postdata = {
        // questionanswerobj: feedbackdata,
        ...this.helpForm.value,
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

      const res = await this.httpService
        .post(POST_HELP_IMPROVE, postdata)
        .toPromise();
      if (res.data) {
        this.dialogRef.close();
        this.utilityService.showAlert("Thanks for your valuable feedback !");
      }
    } catch (error) {
      console.log("errrr", error);
      if (error && error.type === 1) {
        this.utilityService.showAlert("Please provide ratings as feedback !");
      }
    }
  }
}
