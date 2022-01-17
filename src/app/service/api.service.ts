import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Produits } from '../interfaces/produits';
import { utilisateur } from '../interfaces/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  users:utilisateur[]=[]
  toutProd:Produits[]=[]
  pcc:any
  success:String=""
  wrong:String=""
  newUser:utilisateur
  _verifier=new Subject<boolean>()
  ok$=this._verifier.asObservable()

  _user=new Subject<boolean>()
  okUser$=this._user.asObservable()

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

 onGetAllProducts():Promise<Produits[]>{
  return new Promise((resolve,reject)=>{
    this.http.get<Produits[]>("http://localhost:3000/PCs").subscribe(res =>{
  this.toutProd=res
  resolve(res)
  })
  })
}

onGetAllUsesr():Promise<utilisateur[]>{
  return new Promise((resolve,reject)=>{
    this.http.get<utilisateur[]>("http://localhost:3000/users").subscribe(res=>{
    this.users=res
    resolve(res)
    })
  })
}

onLogIN(f:any):Promise<utilisateur>{
  return new Promise((resolve,reject)=>{
    
  let test:utilisateur={
    cin:1,
    email:"",
    fullNom:"",
    id:0,
    password:"",
    role:""
  }
this.onGetAllUsesr().then(data=>{
  for(let i=0;i<data.length;i++){
    if(f.email==data[i].email){
     this.success="mail trouvé"
     resolve(data[i])
     test=data[i]
     break 
    }
    else if(i==data.length-1 && f.email!=data[i].email)
    {
      this.wrong="wrong mail"
      reject("wrong mail")
    }
  }
  
})
  })
}

onPostNewUser(f:any):Promise<String>{
 return new Promise((resolve,reject)=>{
   this.http.post("http://localhost:3000/users",f).subscribe(res=>{
     resolve("ajouté avec succé")
   })
 })
}





}
