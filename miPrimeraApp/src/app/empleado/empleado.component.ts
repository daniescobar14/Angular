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

  nombre="Juan";
  apellido="Escobar";
  //private edad=18;
  edad=18;
  //empresa="Js SA";
  ciudad="Madrid";


  //si modificamos el acceso a la propiedad podems hacer metodos getters

  getEdad(){
    return this.edad;
  }

 llamaEmpresa(value:String){

 }

 habilitacionCuadro=false; //con esto creamos el binding

 usuarioRegistrado=false; //checkbox activado o desactivado

 getRegistroUsuario(){

  this.usuarioRegistrado=true;
 }

  constructor() { }

  ngOnInit(): void {
  }

}
