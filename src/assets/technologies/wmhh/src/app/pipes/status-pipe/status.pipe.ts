import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "resourceStatus",
})
export class StatusPipe implements PipeTransform {
  transform(part: any, isParent: boolean = false): unknown {
    console.log(isParent);

    if (part.isCompleted) {
      return "Completed";
    }
    if (part.isInProgress) {
      return "In Progress";
    }

    if (part.isReadable != 1 && isParent) {
      return "Locked";
    }

    return "";
  }
}
