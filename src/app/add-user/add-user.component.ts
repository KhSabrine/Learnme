import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private serv:ApiService,private router:Router) { }

  ngOnInit(): void {
  }

  postNewUser(f:any){
    this.serv.onPostNewUser(f).then(res=>{
      if(res)
      {
        this.serv._verifier.next(true)
       setTimeout(() => {
        this.router.navigate(["/produit"])
       }, 500);
      }
    })
    
    
  }







}
