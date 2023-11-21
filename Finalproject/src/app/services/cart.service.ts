import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getItemById(itemId: string): Observable<any> {
    const url = `${this.API_URL}/${itemId}`;
    return this.http.get<any>(url);
  }

  private readonly API_URL="http://localhost:8080/api/item"

  constructor(private http: HttpClient) { }
    
  getItem(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
  postItem(body: any): Observable<any> {
    return this.http.post<any>(this.API_URL, body);
  }
  putItem(id: string, body: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${id}`, body);
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
  
}

