import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http : HttpClient) { }

  postCollaborateur(data: any){
    return this.http.post<any>("http://localhost:3000/collaborateurs", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getCollaborateur(){
    return this.http.get<any>("http://localhost:3000/collaborateurs")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateCollaborateur(data: any, id: number){
    return this.http.put<any>("http://localhost:3000/collaborateurs/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteCollaborateur(id: number){
    return this.http.delete<any>("http://localhost:3000/collaborateurs/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getAllContrats(){
    return this.http.get<any>("http://localhost:3000/contrats")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
