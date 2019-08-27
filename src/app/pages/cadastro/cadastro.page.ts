import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  lembrete: {
    titulo: string,
    descricao: string,
    data
  };

  constructor(private alertCtrl: AlertController,
              private route: Router) { }

  ngOnInit() {
  }

  public async cadastrar() {
    let alert = await this.alertCtrl.create({
      header: 'Não se preocupe',
      message: 'Não deixaremos você esquecer',
      buttons : [{
        text: 'Obrigado!',
        handler: () => {
          this.route.navigate(['inicio'], {
            queryParams: this.lembrete
          });
        }
      }]
    });

    await alert.present();

  }

}
