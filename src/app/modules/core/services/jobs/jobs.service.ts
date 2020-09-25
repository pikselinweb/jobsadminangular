import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JOB } from 'src/app/models/global';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class JobsService {
  readonly baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getjobs(pageNumber?: number): Observable<JOB[]> {
    return this.http.get<JOB[]>(`${this.baseUrl}/jobs/${pageNumber || 1}`);
  }
}
