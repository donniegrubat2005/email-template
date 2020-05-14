import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PaginationFilterService {
  // Pagination parameters.
  p: any = 1;
  count: any = 10;

  //filter parameters
  search: string;

  // Sort parameters
  key: string = "id";
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor() {}
}
