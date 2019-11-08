import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class RestApiService {
  // apiUrl = "http://127.0.0.1:5000/api/v1/movies/";
  apiUrl = "https://glacial-inlet-56148.herokuapp.com/api/v1/movies/"
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin':'*',
    })
  };
  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
