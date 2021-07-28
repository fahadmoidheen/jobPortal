import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jobpostModel } from './jobpost.model';
import { JobPostService } from '../services/job-post.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css']
})
export class JobpostComponent implements OnInit {

  form: FormGroup;
  jobpost = {
     jobrole: "",
     experiance: "",
    skills: "",
    education: "",
    jobdesc: "",
    lastdate: "",
    jobtype: ""};
 
  constructor(private router: Router, private fb: FormBuilder,private jobpostservice:JobPostService, private builder: FormBuilder) {
    this.form = builder.group({
      jobrole: "",
  experiance: "",
  skills: "",
  education: "",
  jobdesc: "",
  lastdate: "",
  jobtype: ""
    });
   }

 
  ngOnInit(): void {
  }
  jobPostForm(){
    this.jobpostservice.newJobPost(this.jobpost)
    Swal.fire("Succesfully posted")
    .then(()=>{
      this.router.navigate([""])
  })
  }
}
