import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  private baseURL = `https://65253d6967cfb1e59ce6efa0.mockapi.io/note`

  constructor(private http: HttpClient) { 
    
  }

  getAllData(): Observable<any> {
    return this.http.get(`${this.baseURL}`)
  }

  // onSaveClick(postData: Object) :Observable<any>{
  //   let endPoints = "/note"
  //    this.http.post(this.baseURL + endPoints, postData).subscribe((data: any) => {
  //     console.log(data);
      
  //   });
  // }
  
}
