import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TestService {

    data: any;
    limitNum: number = 20;
  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }

    // Rest Items Service: Read all REST Items
    getAll() {//text, limitNum) {
        //console.log(limitNum)
        var url = 'https://api.punkapi.com/v2/beers?page=1&per_page=80';// + text + '&api_key=gO4ceCCsJqJpm4YGFu4YlXOLZyDacQYW&limit='+ limitNum;
      return this.http
        .get<any[]>(url)
        .pipe(map(data => data));
    }

}
