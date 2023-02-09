import { Pipe, PipeTransform } from "@angular/core";
import { CONTENT_TYPE, IconTypes, MODULE_TYPES } from "src/app/constant/enums";

@Pipe({
  name: "contentTypeIcon",
})
export class ContentTypeIconPipe implements PipeTransform {
  transform(value: unknown, moduleType = MODULE_TYPES.SERIESCONTENT): unknown {
    // return null;
    // console.log(value);

    // if (moduleType === MODULE_TYPES.SERIESCATEGORIES) {
    //   return "assets/images/Graduation_Cap.svg";
    // }

    switch (value) {
      case IconTypes.Article:
        return "assets/images/reading_resource_new.svg"; //book
        break;
      case IconTypes.Video:
        return "assets/images/Video.svg";
        break;
      case IconTypes.Activity:
        return "assets/images/Man_Walk.svg";
        break;
      case IconTypes.Quiz:
        return "assets/images/quiz.svg";
        break;

      case IconTypes.Audio:
        return "assets/images/audio.svg";
        break;
      case IconTypes.CourseProgram:
        return "assets/images/course.svg";
        break;
        
        case IconTypes.Course:
          return "assets/images/Graduation_Cap.svg";
          break;
      case IconTypes.ExternalLink:
        return "assets/images/article-icon_new.svg";
        break;
      default:
        
        return "assets/images/reading_resource_new.svg"; //book
    }
  }
}
