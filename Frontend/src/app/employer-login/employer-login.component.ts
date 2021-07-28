import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { EmployerdataService } from '../services/employerdata.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.css']
})
export class EmployerLoginComponent implements OnInit {
  emp={
    email:"",
    password:""
  }

  
  constructor(private router:Router,private employerservice:EmployerdataService) { }
    
  ngOnInit(): void { }


  loginEmp(){
    this.employerservice.loginEmployer(this.emp)
    .subscribe(
      res=>{
        console.log(res)
        Swal.fire("Succesfully logged in")
          .then(()=>{
      this.router.navigate(["employerHome"])})
      },
      err=>{
        console.log(err)
        if(err.status===409){
          alert ("Incorrect credentials")
        }else{
          alert ("something went wrong")
        }
      }
      )
  }
}    


