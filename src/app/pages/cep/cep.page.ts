import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
})
export class CepPage implements OnInit {

  cep: string;
  result: any;

  constructor(private cepService: CepService) { }

  buscaCep(cep){
    this.cepService.buscaCep(this.cep)
    .subscribe(result => (this.result = result));
  }

  ngOnInit() {
  }

}
