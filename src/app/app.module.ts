import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './All/header/header.component';
import { FooterComponent } from './All/footer/footer.component';
import { HomeComponent } from './contenue/home/home.component';
import { IdentifierComponent } from './contenue/identifier/identifier.component';
import { InscritComponent } from './contenue/inscrit/inscrit.component';
import { ProduitComponent } from './contenue/produit/produit.component';
import { ContactComponent } from './contenue/contact/contact.component';
import { AddNewPcComponent } from './add-new-pc/add-new-pc.component';
import { AddUserComponent } from './add-user/add-user.component';
import { PrixPipe } from './pipes/prix.pipe';




@NgModule({
  declarations: [
    
    AppComponent,
         HeaderComponent,
         FooterComponent,
         HomeComponent,
         IdentifierComponent,
         InscritComponent,
         ProduitComponent,
         ContactComponent,
         AddNewPcComponent,
         AddUserComponent,
         PrixPipe,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
