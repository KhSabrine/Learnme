import { Component, OnInit } from '@angular/core';
import { Produits } from 'src/app/interfaces/produits';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prod:Produits[]=[]
  test:boolean[]=[]
  constructor(private serv:ApiService) { }
  
  ngOnInit() {
   this.serv.onGetAllProducts().then(data=>{
    this.prod=data
    for(let i=0;i<this.prod.length;i++){
      this.test[i]=false
    }
   })  
  }

  ngShowDetails(i:number){
    this.test[i]=!this.test[i]
  }

  

}
