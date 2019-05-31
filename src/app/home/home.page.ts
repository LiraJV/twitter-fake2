import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private alert:AlertController){}

  async exibirAlerta(){
    let temp =  await this.alert.create({
       header: 'Alerta para o 2°Ds',
       subHeader: '2° Ds merece MB?',
       buttons: [{
         text: 'Não', 
         handler: function(){
           console.log("Não merecem.")
         }
       }, {
         text: 'Sim',
         handler: function(){
           console.log("Merecem sim")
         }
       }]
    })

    await temp.present()
  }
}
