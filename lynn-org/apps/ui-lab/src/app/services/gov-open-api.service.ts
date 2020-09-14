import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GovOpenApiService {
  private PATH = 'https://tcgbusfs.blob.core.windows.net/dotapp/news.json';

  constructor(private http: HttpClient) {}

  trafficNews$ = this.http.get(this.PATH);
}
