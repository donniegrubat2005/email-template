import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IEmailTemplate } from "../models/emailTemplate.model";
import { Observable } from "rxjs";
import { HttpHelperService } from "../core/services/http-helper.service";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  private apiUrl: string;
  constructor(
    private httpHelperService: HttpHelperService,
    private http: HttpClient
  ) {
    this.apiUrl = "http://localhost:8082/api/emails";
  }

  public findAll(): Observable<IEmailTemplate[]> {
    //let url = this.httpHelperService.getApiUrl() + "/api/emails";
    return this.http.get<IEmailTemplate[]>(this.apiUrl);
  }

  getEmailId(id: number): Observable<IEmailTemplate[]> {
    return this.http.get<IEmailTemplate[]>(this.apiUrl + "/" + id);
  }

  public save(email: IEmailTemplate) {
    return this.http.post<IEmailTemplate>(this.apiUrl, email);
  }

  update(email: IEmailTemplate): Observable<IEmailTemplate> {
    return this.http.put<IEmailTemplate>(this.apiUrl + "/" + email.id, email);
  }

  delete(id: number): Observable<IEmailTemplate> {
    return this.http.delete<IEmailTemplate>(this.apiUrl + "/" + id);
  }
}
