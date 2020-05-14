import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpHelperService {
  constructor() {}

  getApiUrl() {
    return environment.SERVER_API_URL;
  }

  getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return httpOptions;
  }

  getTenantHttpOptions(businessId: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "X-TenantID": businessId,
      }),
    };
    return httpOptions;
  }

  getHttpOptionsForUpload() {
    const httpOptions = {
      headers: new HttpHeaders({
        //            'Content-Type':  'multipart/form-data',
        Accept: "application/json",
      }),
    };
    return httpOptions;
  }
}
