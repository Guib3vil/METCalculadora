import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(private alertController: AlertController) {}
P=''; // Peso da pessoa em Kg
T=''; // Tempo da atividade em horas
exercicio=''; // Qual exercício a pessoa realizou
VF=0 // Valor final de calorias gastas

Calorias() { // Função que calcula as calorias gastas
  if (this.exercicio === 'B') { // Verifica se o exercício realizado é Basquete
this.VF= parseFloat(this.P)*8*parseFloat(this.T) // Calcula as calorias gastas
  } else {
    if (this.exercicio === 'Ci') { // Verifica se o exercício realizado é Ciclismo
      this.VF= parseFloat(this.P)*6*parseFloat(this.T) // Calcula as calorias gastas
    } else{
      if (this.exercicio === 'Co') { // Verifica se o exercício realizado é Corrida
        this.VF= parseFloat(this.P)*7*parseFloat(this.T) // Calcula as calorias gastas
      }
    }
  }
  this.exibiralerta(); //aciona a função que ativa o alert
}

async exibiralerta() {
  const alert = await this.alertController.create({ //cria o alert
    header: 'App Calorias', //cabeçalho do alert
    message: `Você gastou
    ${this.VF.toFixed(2)} calorias`, // mensagem exibida no alert
    buttons: ['OK'], // botão do alert
    });
    await alert.present();
    }
}
