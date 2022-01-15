import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produits } from '../interfaces/produits';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-add-new-pc',
  templateUrl: './add-new-pc.component.html',
  styleUrls: ['./add-new-pc.component.css']
})
export class AddNewPcComponent implements OnInit {

  constructor(private http:HttpClient,private serv:ApiService) { }

  ngOnInit(): void {
  }

  postPc(f:any){
    this.serv.onPostNewPc(f)
  }

}
