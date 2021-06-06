import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  //template:"<p>Aqui va uno de los empleados</p>",
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //podemos llamar a la clase de estilos externa, o podemos montar el estilo directamente en el archivo ts
  //styles:["p{background-color:red;}"] //a esto se llama colocar componentes inline
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
