import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { utilisateur } from 'src/app/interfaces/utilisateur';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-identifier',
  templateUrl: './identifier.component.html',
  styleUrls: ['./identifier.component.css']
})
export class IdentifierComponent implements OnInit {
  success:any
  wrong:any
  newUser:utilisateur
  
  constructor(private serv:ApiService,private rout:Router) { }

  ngOnInit(): void {
  }

  LogIN(f:any){
    this.serv.onLogIN(f).then(data =>{
      console.log(data)
      if(data){
        this.success="mail trouvé"
      }
      return data
    }).then(b=>{
      if(b.password==f.pass)
      {
        this.success="pass and mail correcte"
        this.serv.newUser=b
        if(b.role=="Admin")
        {
          this.serv._verifier.next(true)
         // localStorage.setItem("role",`${b.role}`)
          this.rout.navigate(["/produit"])
        }
        else if(b.role=="user")
        {
          this.serv._user.next(true)
          this.rout.navigate(["/produit"])
        }
        
      }
      else
      {
        this.wrong="pass non correcte"
      }

    }).catch(err=>{
      this.wrong=err
    })
    
  }

}
