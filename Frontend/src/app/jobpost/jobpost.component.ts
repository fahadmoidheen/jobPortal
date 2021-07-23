import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jobpostModel } from './jobpost.model';
import { JobPostService } from '../services/job-post.service';

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css']
})
export class JobpostComponent implements OnInit {
  
 
  constructor(private router: Router, private fb: FormBuilder,private jobpostservice:JobPostService) { }

  jobpost=new jobpostModel('','','','','','','')
  ngOnInit(): void {
  }
  jobPostForm(){
    this.jobpostservice.jobPost(this.jobpost)
    alert ('job posted')
    this.router.navigate([""])
  }

}
