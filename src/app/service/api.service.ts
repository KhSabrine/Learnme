import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Produits } from '../interfaces/produits';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  toutProd:Produits[]=[]
  pcc:any
  constructor(private http:HttpClient,private router:Router) { 

  }

  onPostNewPc(f:any)
  {

     let newPcc={
      poduitName:f.poduitName,
      poduitDescription:f.poduitDescription,
      poduitPrice:f.poduitPrice,
      poduitImage : f.poduitImage
    }
    this.http.post("http://localhost:3000/PCs",f).subscribe(res=>{
      console.log("voila !! "+res)
      setTimeout(() => {
        this.router.navigate(["/home"])
      }, 500);
      
    })

  }
  onGetAllProducts():Promise<Produits[]>{
    return new Promise((resolve,reject)=>{
      this.http.get<Produits[]>("http://localhost:3000/PCs").subscribe(res =>{
    this.toutProd=res
    resolve(res)
    })
    })
  }

  onDeleteProduct(id:number){
   return new Promise((resolve,reject)=>{
    this.http.delete("http://localhost:3000/PCs/"+id).subscribe(res=>{
      resolve(res)
    })
   })
  }

  onGetAllPc()
 {
  return new Promise((resolve,reject)=>{
    this.http.get("http://localhost:3000/PCs").subscribe(res=>{

      this.pcc=res
      console.log("resultat : "+this.pcc)
      resolve(res)
      })
  })
 }

}
