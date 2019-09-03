import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';
import { ToastController } from '@ionic/angular';
import { AlertaService } from 'src/app/services/alerta.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
})
export class CepPage implements OnInit {

  cep: string;
  result: any;

  constructor(private cepService: CepService, private alert: AlertaService) {

  }

  public async buscaCep(cep){
   const loader = await this.alert.loading();
   this.result = null;
   this.cepService.buscaCep(this.cep)
    .subscribe(result => {
      loader.dismiss();
      this.result = result;
    },
    error => {
      loader.dismiss();
      this.alert.toast({message: error.message});
  });
  }




  ngOnInit() {
  }

}
