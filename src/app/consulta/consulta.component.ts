import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

Consultas = {
   "realizadas" : [
       { "especialidade" : "Cardiologia", "quantidade" : 20 },
       { "especialidade" : "Clínica Geral", "quantidade" : 30 },
       { "especialidade" : "Dermatologia", "quantidade" : 14 }, 
       { "especialidade" : "Gastroenterologia", "quantidade" : 10 },
       { "especialidade" : "Pediatria", "quantidade" : 13 }
   ],
   "marcadas" : [
       { "especialidade" : "Cardiologia", "quantidade" : 19 },
       { "especialidade" : "Clínica Geral", "quantidade" : 28 },
       { "especialidade" : "Dermatologia", "quantidade" : 13 },
       { "especialidade" : "Gastroenterologia", "quantidade" : 8 },
       { "especialidade" : "Pediatria", "quantidade" : 11 }
   ]
 }

  constructor() { }

  ngOnInit() {
  }

}
