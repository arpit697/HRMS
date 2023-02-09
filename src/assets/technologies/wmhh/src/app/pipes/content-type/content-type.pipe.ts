import { Pipe, PipeTransform } from "@angular/core";
import { CONTENT_TYPE } from "src/app/constant/app-constant";
import { IconTypes } from "src/app/constant/enums";

@Pipe({
  name: "contentType",
})
export class ContentTypePipe implements PipeTransform {
  transform(value: string, type: string): unknown {
    switch (value) {
      case IconTypes.Article:
        return "Read"; //book
        break;
      case IconTypes.Video:
        return "Watch";
        break;
      case IconTypes.Activity:
        return "Activity";
        break;
      case IconTypes.Quiz:
        return "Quiz";
        break;

      case IconTypes.Audio:
        return "Listen";
        break;
      case IconTypes.CourseProgram:
        return "Lesson";
        break;

        case IconTypes.Course:
          return "Training";
          break;
      case IconTypes.ExternalLink:
        return "Activity";
        break;
      default:
        return "Read"; //book
    }
  }
}
