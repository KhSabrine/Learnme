import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ok:boolean=false
  constructor(private serv:ApiService) { }

  ngOnInit(): void {
    this.serv.ok$.subscribe(data=>{
      this.ok=data
    })
  }

  onLogOut(){
    localStorage.removeItem("role")
    this.serv._verifier.next(false)
    this.ok=false
  }







}
