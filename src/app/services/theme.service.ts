import { Injectable } from '@angular/core';
import { Navigation } from '@angular/router';
import { ThemeNavigation } from '../model/navigation.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(private http: HttpClient) { }

  public getMenuLink(): Observable<ThemeNavigation[]> {
    return this.http.get<ThemeNavigation[]>('/assets/api/navigation.json').pipe(
      map((response: any) => {
        return response as Array<ThemeNavigation>;
      }),

    );
  }

}
