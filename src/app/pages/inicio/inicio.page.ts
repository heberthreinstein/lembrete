import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  lembrete: any;

  constructor(private route: ActivatedRoute,private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.lembrete = params;
    });
  }

  goToCep(){
    this.router.navigate(['cep']);
  }

  ngOnInit() {
  }

}
