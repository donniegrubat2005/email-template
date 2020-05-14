import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EventService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = "http://localhost:8082/api";
  }

  public getEvents(): Observable<any[]> {
    let url = this.apiUrl + "/emailevents";
    return this.http.get<any[]>(url);
  }

  public getVariables(): Observable<any[]> {
    let url = this.apiUrl + "/emailvariables";
    return this.http.get<any[]>(url);
  }
}
