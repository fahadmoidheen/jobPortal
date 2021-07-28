import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JobPostService } from '../services/job-post.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})
export class ApplyFormComponent implements OnInit {
  form: FormGroup;
  applyjobdetails = {
    fullname: "",
    email: "",
    phoneno: "",
    hq: "",
    skill: "",
    experience: "",
    college: ""};

  constructor(private jobpostservice:JobPostService,private fb: FormBuilder, private builder: FormBuilder,private router:Router) {
    this.form = builder.group({
      fullname: "",
      email: "",
      phoneno: "",
      hq: "",
      skill: "",
      experience: "",
      college: ""
    });
   }

  applyform = this.fb.group({
    fullname:['',[Validators.required,,Validators.pattern(/^([a-z0-9]|[-._](?![-._])){5,20}$/)]],
    email:['',[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    experience:['',Validators.required],
    skill:['',Validators.required],
    hq:['',Validators.required],
    phoneno:['',Validators.required],
    college:['',Validators.required]
  }) 

  get applyformControl() {
    return this.applyform.controls;
  }
  ngOnInit(): void {
  }
  applyJob(){
    this.jobpostservice.applyJobget(this.applyjobdetails)
    Swal.fire("applied.. Best of Luck")
    .then(()=>{
      this.router.navigate([""])
    })
    
  }
}
