import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produits } from 'src/app/interfaces/produits';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  userRole:any
  test:boolean[]=[]
  produitData:Produits[]=[]
  constructor(private service : ApiService , private http:HttpClient) {
    this.userRole=localStorage.getItem("role")
   }
  
  ngOnInit(){
    this.service.onGetAllProducts().then(data=>{
      this.produitData=data
      for(let i=0;i<this.produitData.length;i++){
        this.test[i]=false
      }
     })  
   
  }
  // GetAllPc()
  // {
  //   this.service.onGetAllProducts().then(res=>{
  //     this.produitData=res
  //     for(let i=0;i<this.produitData.length;i++){
  //       this.test[i]=false
  //     }
  //   })
  // }

 deleteProduit(id:number){
  this.service.onDeleteProduct(id).then(res=>{
    alert("Deleted !!"+JSON.stringify(res))
  })
 }



 onShowDetails(i:number){
  this.test[i]=!this.test[i]
}
 
}
