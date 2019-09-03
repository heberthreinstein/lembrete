import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
})
export class CepPage implements OnInit {

  cep: string;
  result: any;

  constructor(private cepService: CepService, private t: ToastController) { }

  buscaCep(cep){
    this.cepService.buscaCep(this.cep)
    .subscribe(result => (this.result = result),
    error => this.showError(error.message));
  }

  
    public async showError(msg: any){
      const t = this.t.create({
      message: msg,
      duration: 3000,
      closeButtonText: 'Ok',
      showCloseButton: true
      });
  }

  ngOnInit() {
  }

}
