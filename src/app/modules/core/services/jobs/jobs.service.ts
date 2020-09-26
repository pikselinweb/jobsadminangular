import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JOB } from 'src/app/models/global';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class JobsService {
  readonly baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getjobs(pageNumber?: number): Observable<JOB[]> {
    return this.http.get<JOB[]>(`${this.baseUrl}/jobs/${pageNumber || 1}`);
  }
  addJob(job: JOB): Observable<JOB> {
    // sunucudan sadece id alınacak ve job objesi ile birleştirilecek
    return this.http
      .post(`${this.baseUrl}/jobpost`, job)
      .pipe(map((result: any) => ({ ...job, id: result.id })));
  }
  updateJob(job: JOB): Observable<JOB> {
    // sadece post isteği yapıldı
    return this.http
      .post(`${this.baseUrl}/jobpost`, job)
      .pipe(map((result: any) => ({ ...job })));
  }
  deleteJob(job: JOB): Observable<JOB> {
    // sadece post isteği yapıldı
    return this.http
      .post(`${this.baseUrl}/jobpost`, job)
      .pipe(map((result: any) => ({ ...job })));
  }
}
