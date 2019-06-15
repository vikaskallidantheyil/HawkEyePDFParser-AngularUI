import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PersonalDetailsService {
  baseURL = "https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/";
  apiKey = "a546d83344cb4ada987e7d43b2bb8a46";
  textRecognitionUrl = this.baseURL + "read/core/asyncBatchAnalyze";
  headers = new HttpHeaders({
    "Ocp-Apim-Subscription-Key": this.apiKey,
    "Content-Type": "application/octet-stream"
  });
  params = new HttpParams().set("mode", "Handwritten");

  options = {
    headers: this.headers,
    params: this.params
  };

  constructor(private http: HttpClient) {}

  getImageData(imageData): Observable<any> {
    return this.http.post(this.textRecognitionUrl, imageData, this.options);
  }
}
