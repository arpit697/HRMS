import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ContentTypeService } from "../content-type.service";
import { FormArray, FormGroup, FormBuilder } from "@angular/forms";
import { trigger, transition, style, animate } from "@angular/animations";
import { UtilityService } from "src/app/services/utility.service";
import { RELATED_ARTICLES } from "src/app/constant/enums";
import {
  ACTIVITYACTION,
  MODULENAMES,
  PAGE_LIMIT_3,
} from "src/app/constant/app-constant";
import { HttpService } from "src/app/services/http.service";
import { MatDialog } from "@angular/material/dialog";
import { RegisterPopupComponent } from "src/app/modules/account/register-popup/register-popup.component";
import { CongratulationsPopupComponent } from "src/app/modules/common/components/congratulations-popup/congratulations-popup.component";
import { DASHBOARD, DISCOVER } from "src/app/constant/routes";

@Component({
  selector: "app-content-quiz",
  templateUrl: "./content-quiz.component.html",
  styleUrls: ["./content-quiz.component.scss"],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: "0" }),
        animate(".5s ease-out", style({ opacity: "1" })),
      ]),
    ]),
  ],
})
export class ContentQuizComponent implements OnInit {
  quizDetails;
  contentDetails;
  relatedArticles;
  quizId;
  quizSubmitted: boolean = false;
  reviewAnswers: boolean = false;
  showResult: boolean = false;
  isCompleted: boolean = false;
  quizForm: FormGroup;
  canRetakeQuiz: boolean = true;
  correctAnswers: number = 0;
  totalAnswers: number = 0;
  showQuiz: boolean = false;
  oldAnswers: Array<any> = [];
  correctAnswersArray = [];
  showHint: Array<any> = [];
  showEdited: Array<any> = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentTypeService: ContentTypeService,
    private fb: FormBuilder,
    private utility: UtilityService,
    private http: HttpService,
    private dialog: MatDialog
  ) {
    this.createQuizform();
    this.quizId = this.route.snapshot.paramMap.get("id");
    if (this.quizId) {
      this.getContentDetails(this.quizId);
      this.getQuizDetails();
    }
  }

  ngOnInit(): void {}

  get quizFormArray() {
    return this.quizForm.get("questionData") as FormArray;
  }

  getOptionsFormArray(index) {
    return this.quizFormArray.at(index).get("optionsData") as FormArray;
  }

  createQuizform() {
    this.quizForm = this.contentTypeService.createQuizArray();
  }

  createQuizformArray(questionsArray, showAll = false) {
    for (let i = 0; i < questionsArray.length; i++) {
      const singleQuestionGroup: FormGroup =
        this.contentTypeService.createSingleQuestionGroup();
      if (showAll) {
        singleQuestionGroup.patchValue({
          ...questionsArray[i],
          isVisible: true,
        });
      } else {
        singleQuestionGroup.patchValue({
          ...questionsArray[i],
          isVisible: i === 0 ? true : false,
        });
      }

      if (
        questionsArray[i].optionsData &&
        questionsArray[i].optionsData.length
      ) {
        let optionFormArray: FormArray = singleQuestionGroup.get(
          "optionsData"
        ) as FormArray;
        const optionsArray = questionsArray[i].optionsData;

        for (let j = 0; j < optionsArray.length; j++) {
          const singleOptionGroup: FormGroup =
            this.contentTypeService.createSingleOptionGroup();
          singleOptionGroup.patchValue({ ...optionsArray[j] });
          optionFormArray.push(singleOptionGroup);
        }
      }

      this.quizFormArray.push(singleQuestionGroup);
      // console.log(this.quizFormArray);
    }
  }

  async getContentDetails(id: string) {
    try {
      let { data } = await this.contentTypeService.getContentDetails(id);
      if (this.utility.getAuthToken()) {
        this.contentDetails = { ...data };
      } else {
        this.contentDetails = { ...this.utility.checkLikedContent(data) };
      }
      console.log(this.contentDetails);

      if (
        this.contentDetails.metaTitle &&
        this.contentDetails.metaTitle.length
      ) {
        this.utility.$title.next(this.contentDetails.metaTitle);
      } else {
        console.log("came");

        this.utility.$title.next(null);
      }
      // console.log(this.contentDetails);

      this.contentDetails.postcontent =
        await this.utility.replaceEmbedWithIframe(
          this.contentDetails.postcontent
        );

      // if(this.contentDetails.isAvailabelForQuickActivities){
      //   this.getSimilarQuickActivities()
      // }else{
      //   this.getRelatedSeriesContent();
      // }

      // this.getRelatedArticles();
      // if (
      //   !this.contentDetails.isInProgress &&
      //   !this.contentDetails.isCompleted &&
      //   this.utility.getAuthToken()
      // ) {
      //   this.markContentInProgress();
      // }
    } catch (error) {
      console.log(error);
    }
  }

  async getRelatedArticles() {
    const reqQuery = {
      _id: this.contentDetails._id,
      resfor: RELATED_ARTICLES.CHILDCONTENT,
      ...PAGE_LIMIT_3,
    };
    const respo = await this.contentTypeService.getChildRelatedArticles(
      reqQuery
    );
    if (respo.data) {
      // console.log(respo);
      this.relatedArticles = [
        ...this.utility.checkLikedListContent(respo.data.data),
      ];
    }
  }

  async getQuizDetails() {
    const respo = await this.contentTypeService.getQuizDetail(this.quizId);

    if (respo.data) {
      if (respo.data.oldQuizData && respo.data.oldQuizData.length) {
        this.createQuizformArray(
          JSON.parse(respo.data.oldQuizData[0].questionAnswerObject),
          true
        );
        if (respo.data.isquizcompleted) {
          this.isCompleted = true;
        }
        this.oldAnswers = JSON.parse(
          respo.data.oldQuizData[0].questionAnswerObject
        ).map((item) => item.selectedOption);
        this.correctAnswers = respo.data?.correctanswercount;
        this.totalAnswers = respo.data?.totalquestioncount;
        this.reviewAnswers = false;
        this.showResult = true;
        // this.quizFormArray.controls.forEach((item, idx) => {
        //   // .at(index + 1)
        //   // .get("isVisible")
        //   // .setValue(true);
        //   // if (idx == 0) {
        //   item.get("isVisible").setValue(true);
        //   // } else {
        //   // item.get("isVisible").setValue(false);
        //   // }
        //   // item.get("selectedOption").setValue(null);
        // });
        console.log(this.quizForm);
      } else {
        this.createQuizformArray(respo.data.questionData);
        console.log(this.quizForm);
      }
      this.showQuiz = true;
      this.correctAnswersArray = respo.data.questionData.map(
        (item) => item.correctAnswer
      );
      console.log(this.correctAnswers);
      for (let index = 0; index < this.totalAnswers; index++) {
        this.showHint.push(false);
        this.showEdited.push(false);
      }
    }
  }

  selectionChanged(event, index) {
    this.showHint[index] = false;
    this.showEdited[index] = true;

    if (index != this.quizFormArray.length - 1) {
      // this.quizFormArray.at(index).get("isVisible").setValue(false);
      this.quizFormArray
        .at(index + 1)
        .get("isVisible")
        .setValue(true);
    }
  }

  retakeQuiz() {
    this.reviewAnswers = false;
    this.quizForm.enable();
    this.quizFormArray.controls.forEach((item, idx) => {
      // .at(index + 1)
      // .get("isVisible")
      // .setValue(true);
      if (idx == 0) {
        item.get("isVisible").setValue(true);
      } else {
        item.get("isVisible").setValue(false);
      }
      item.get("selectedOption").setValue(null);
    });
  }
  backToDashboard() {
    this.router.navigate([DASHBOARD.fullUrl]);
  }

  async submitQuiz() {
    if (this.quizForm.valid) {
      if (this.utility.getAuthToken()) {
        // console.log(this.quizForm.value);
        this.quizSubmitted = true;
        this.quizForm.disable();

        localStorage.setItem("ans", JSON.stringify(this.quizForm.value));

        const payload = {
          questionAnswerObject: this.quizForm.value.questionData,
          moduleId: this.contentDetails.moduleId,
          moduleName: this.contentDetails.moduleName,
          action: ACTIVITYACTION.QUIZ,
        };
        // console.log(payload);
        try {
          this.quizForm.disable();
          const { data } = await this.contentTypeService.submitQuiz(payload);
          // console.log(res);
          this.correctAnswers = data?.correctanswercount;
          this.totalAnswers = data?.totalquestioncount;
          if (data?.isquizcompleted) {
            //hit completion api
            const payload = {
              moduleId: this.contentDetails._id,
              moduleName: MODULENAMES.SERIESCONTENT,
              action: ACTIVITYACTION.COMPLETED,
            };
            try {
              let res = await this.contentTypeService.toogleContentCompletion(
                payload
              );
              this.openCongratulations();
              this.isCompleted = true;
            } catch (error) {
              console.log(error);
            }
          }
          this.showResult = true;
          this.oldAnswers = payload.questionAnswerObject.map(
            (item) => item.selectedOption
          );
          console.log(this.correctAnswers);
          console.log(this.oldAnswers);
        } catch (error) {
          console.log(error);
        }
      } else {
        this.quizSubmitted = true;
        this.quizForm.disable();

        this.openRegister();
      }
    } else {
      // console.log(this.quizForm);
      this.utility.showAlert(
        "Please select answer to each question in the quiz to continue"
      );
    }
  }

  openCongratulations(): void {
    const dialogRef = this.dialog.open(CongratulationsPopupComponent, {
      width: "480px",
      data: this.contentDetails.title,
    });
  }
  openRegister() {
    const dialogRef = this.dialog.open(RegisterPopupComponent, {
      width: "668px",
      disableClose: false,
      autoFocus: false,
      data: {
        heading: "complete the quiz",
        description: "",
      },
    });
    dialogRef.afterClosed().subscribe((data) => this.quizForm.enable());
  }

  handleReviewAnswers(completed?) {
    if (completed) {
      this.reviewAnswers = true;
      this.showResult = false;
      this.isCompleted = false;
      this.canRetakeQuiz = false;
      this.quizForm.disable();
    } else {
      this.quizForm.enable();
      this.reviewAnswers = true;
      this.showResult = false;

      console.log(this.quizFormArray);
    }

    this.showHint = [...this.showHint.map((item) => true)];
    this.showEdited = [...this.showEdited.map((item) => false)];
  }

  compareFn(a, b) {
    if (a && a._id && b && b._id) {
      return a._id == b._id;
    } else {
      return false;
    }
    // return true;
  }

  backToCourse() {
    console.log(this.contentDetails);
    if (
      this.contentDetails &&
      this.contentDetails.parentData &&
      this.contentDetails.parentData.length
    ) {
      this.router.navigate([
        "/resources",
        this.contentDetails.parentData[0].slug,
      ]);
    } else {
      this.router.navigate([DISCOVER.fullUrl]);
    }
  }

  routeToDiscover() {
    this.router.navigate([DISCOVER.fullUrl]);
  }
}
