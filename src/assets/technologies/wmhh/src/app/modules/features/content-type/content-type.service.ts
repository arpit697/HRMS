import { Injectable } from "@angular/core";
import {
  CONTENT_ACTIVITY_POST,
  CONTENT_DETAIL,
  GET_ARTICLE_BY_TAGS,
  SERIES_CONTENT,
  GET_FEATURED_BY_SECTOR,
  GET_QUIZ_DETAILS,
} from "src/app/constant/urls";
import { HttpService } from "src/app/services/http.service";
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import { FormService } from "src/app/services/form.service";

@Injectable()
export class ContentTypeService {
  constructor(
    private http: HttpService,
    private fb: FormBuilder,
    private formService: FormService
  ) {}

  createQuizArray() {
    return this.fb.group({
      questionData: this.fb.array([]),
    });
  }

  createSingleQuestionGroup() {
    return this.fb.group({
      answerType: this.formService.getControl("dropdown", false),
      _id: this.formService.getControl("dropdown"),
      optionsData: this.fb.array([]),
      questioTitle: this.formService.getControl("dropdown", false),
      selectedOption: this.formService.getControl("dropdown"),
      isVisible: this.formService.getControl("dropdown", false, false),
    });
  }

  createSingleOptionGroup() {
    return this.fb.group({
      // _v: this.formService.getControl("dropdown", false),
      option: this.formService.getControl("dropdown", false),
      _id: this.formService.getControl("dropdown", false),
      responseDescription: this.formService.getControl("dropdown", false),
      responseTitle: this.formService.getControl("dropdown", false),
    });
  }

  /**
   * Will do api hit for fetching children contentdetails
   * @param id Mongo id for the content
   */
  getContentDetails(id: string): Promise<any> {
    return this.http
      .get(CONTENT_DETAIL(id), {}, { showLoader: true })
      .toPromise();
  }

  /**
   * Will do api hit for marking a content as in progress
   * @param payload
   */
  markContentInProgress(payload: any): Promise<any> {
    return this.http.post(CONTENT_ACTIVITY_POST, payload).toPromise();
  }

  /**
   * Will do api hit for marking a content as in completed or in-completed
   * @param payload
   */
  toogleContentCompletion(payload: any): Promise<any> {
    return this.http.post(CONTENT_ACTIVITY_POST, payload).toPromise();
  }

  /**
   * Gets child related articles
   * @param payload
   * @returns  promise
   */
  getChildRelatedArticles(payload) {
    return this.http
      .get(GET_ARTICLE_BY_TAGS, { ...payload }, { showLoader: false })
      .toPromise();
  }

  /**
   * Will do api hit for fetching series content
   * @returns promise as result
   */
  getSeriesContent(id: string, pageOptions: any): Promise<any> {
    return this.http
      .get(
        SERIES_CONTENT(id),
        { ...pageOptions, sortType: "asc" },
        { showLoader: false }
      )
      .toPromise();
  }

  getSimilarQuick(reqquery) {
    return this.http
      .get(GET_FEATURED_BY_SECTOR, { ...reqquery }, { showLoader: false })
      .toPromise();
  }

  getQuizDetail(quizId) {
    return this.http.get(GET_QUIZ_DETAILS, { slug: quizId }).toPromise();
  }

  submitQuiz(payload) {
    return this.http
      .post(CONTENT_ACTIVITY_POST, payload, { showLoader: true })
      .toPromise();
  }
}
