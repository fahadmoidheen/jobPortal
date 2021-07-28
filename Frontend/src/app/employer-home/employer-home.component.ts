import { Component, OnInit } from '@angular/core';
import { JobPostService } from '../services/job-post.service';

@Component({
  selector: 'app-employer-home',
  templateUrl: './employer-home.component.html',
  styleUrls: ['./employer-home.component.css']
})
export class EmployerHomeComponent implements OnInit {
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
  constructor(private jobpostservice:JobPostService ) { }

  ngOnInit(): void {
    this.jobpostservice.getJobs().subscribe((data)=>{
      this.jobs=JSON.parse(JSON.stringify(data));
      
      
    })
  }

}
