import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Learnme';
  isAuth=false;
  PcName1="Samsung";
  PcName2="HP";
  PcName3="Mac";
  
  constructor()
  {
    setTimeout(
      () => {
      this.isAuth=true;
    }, 4000
              );

  }
   onAllumer()
   {
     console.log('tout est allumé');
   }
}
