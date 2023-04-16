import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class DataService {
  constructor() {}
  referredCandidate = <any>[];
  leaveDetail = <any>{};
  dsrDetail = {};
  trainingRequest = <any>[];
}
