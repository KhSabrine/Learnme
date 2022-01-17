import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ok:boolean=false
  okUser:boolean=false
  constructor(private serv:ApiService) { }

  ngOnInit(): void {
    this.serv.ok$.subscribe(data=>{
      this.ok=data
    })
    this.serv.okUser$.subscribe(data=>{
      this.okUser=data
    })
  }

  onLogOut(){
    localStorage.removeItem("role")
    this.serv._verifier.next(false)
    this.serv._verifier.complete()
    this.ok=false
    this.serv._user.next(false)
    this.okUser=false
  }







}
