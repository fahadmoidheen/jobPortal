import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobPostService {
 item={
  jobrole:'',
  experiance:'',
  skills:'',
  education:'',
  jobdesc:'',
  lastdate:'',
  jobtype:''
 }
  constructor( private http:HttpClient) { }

  jobPost(item:any){
    return this.http.post('http://localhost:3000/postJob',{"jobpost":item})
    .subscribe(data=>{console.log(data)})
  }
}
