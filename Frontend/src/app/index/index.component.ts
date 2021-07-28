import { Component, OnInit } from '@angular/core';
import { JobPostService } from '../services/job-post.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  jobs=[
    {
    jobrole: '',
    experiance: '',
    skills: '',
    education: '',
    jobdesc: '',
    lastdate: '',
    jobtype: ''
  }
]
  constructor(private jobpostservice:JobPostService) { }

  ngOnInit(): void {
    this.jobpostservice.getJobs().subscribe((data)=>{
      this.jobs=JSON.parse(JSON.stringify(data));
      ;
      
    })
  }

}
