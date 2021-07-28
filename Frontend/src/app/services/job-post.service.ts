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
 applyjobdetails = {
  fullname: "",
  email: "",
  phoneno: "",
  hq: "",
  skill: "",
  experience: "",
  college: ""};


  constructor( private http:HttpClient) { }

  newJobPost(item:any){
    return this.http.post<any>('http://localhost:3000/postJob',item)
    .subscribe(data=>{console.log(data)})
  }

  getJobs(){
    return this.http.get("http://localhost:3000/jobs");
  }

  applyJobget(applyjobdetails:any){
    return this.http.post<any>("http://localhost:3000/applyjob",applyjobdetails)
    .subscribe(data=>{console.log(data)})
  }
}
