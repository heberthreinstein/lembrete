import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PrevisaoService } from 'src/app/services/previsao.service';

@Component({
  selector: 'app-previsao',
  templateUrl: './previsao.page.html',
  styleUrls: ['./previsao.page.scss'],
})
export class PrevisaoPage implements OnInit {

  constructor(private rota: ActivatedRoute, private tempo: PrevisaoService) {

    const cidade = rota.snapshot.params.cidade;
    tempo.buscaPrevisao(cidade).subscribe(
      resp => console.log(resp)
    )

  }

  ngOnInit() {
  }





}
