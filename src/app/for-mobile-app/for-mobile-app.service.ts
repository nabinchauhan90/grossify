import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ForMobileAppService {
  constructor(private http: HttpClient) {}
  getFaq() {
    const key = 'bf4335bac47567d5167cf53678d1f7aafad30d31';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Client-Service': 'frontend-client',
      'Auth-Key': key,
    });
    return this.http
      .get('https://seller.grossify.in/webapi/FaqApi/getfaqUserData/97/User', {
        headers: headers,
      })
      .pipe(
        map((recived) => {
          // console.log(recived);
          return recived;
        })
      );
  }
}
