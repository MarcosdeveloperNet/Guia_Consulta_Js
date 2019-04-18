import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {

  resumo = {
    consultas : {
      consultas_30dias_anteriores : 89,
      consultas_30dias_posteriores : 79
    },
    
    faturamento : {
      anterior : {
        valor : '10.000',
        comparativo : 19
      },
      
    previsao : {
      valor : '7.000',
      comparativo : -3
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
