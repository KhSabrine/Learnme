import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  userRole:any
  constructor(private service : ApiService , private http:HttpClient) {
    this.userRole=localStorage.getItem("role")
   }
  produitData:any;
  ngOnInit(): void {
    this.GetAllPc()
  }
  GetAllPc()
  {
    this.service.onGetAllPc().then(res=>{
      this.produitData=res
    })
  }

 deleteProduit(id:number){
  this.service.onDeleteProduct(id).then(res=>{
    alert("Deleted !!"+JSON.stringify(res))
  })
 }
 
}
