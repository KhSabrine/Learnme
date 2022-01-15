import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewPcComponent } from './add-new-pc/add-new-pc.component';
import { ContactComponent } from './contenue/contact/contact.component';
import { HomeComponent } from './contenue/home/home.component';
import { IdentifierComponent } from './contenue/identifier/identifier.component';
import { InscritComponent } from './contenue/inscrit/inscrit.component';
import { ProduitComponent } from './contenue/produit/produit.component';


const routes: Routes = [

{path:' ',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'produit',component:ProduitComponent},
{path:'identifier',component:IdentifierComponent},
{path:'inscrit',component:InscritComponent},
{path:'addPc',component:AddNewPcComponent},
{path:'contact',component:ContactComponent},
{path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
