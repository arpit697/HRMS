import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {
  constructor() {}

  static log(message?: any, ...optionalParams: any[]) {
    console.log(message, ...optionalParams);
  }

  static error(message?: any, ...optionalParams: any[]) {
    console.error(message, ...optionalParams);
  }

  static warn(message?: any, ...optionalParams: any[]) {
    console.error(message, ...optionalParams);
  }
}
