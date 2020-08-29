import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
@Component({
  selector: "app-empleado",
  templateUrl: "./empleado.component.html",
  styleUrls: ["./empleado.component.css"]
})
export class EmpleadoComponent implements OnInit {
  registro = [];
  empleado: any;
  nombre: string;
  salario: number;
  descISSS: number;
  descRenta: number;
  descAFP: number;
  salarioFinal: number;
  contador: number;
  constructor() {}
  ngOnInit() {
    this.nombre = "";
    this.salario = 0;
    this.descISSS = 0;
    this.descRenta = 0;
    this.descAFP = 0;
    this.salarioFinal = 0;
    this.contador = 0;
  }
  ingresar() {
    this.descISSS = this.salario * 0.073;
    this.descRenta = this.salario * 0.11;
    this.descAFP = this.salario * 0.051;

    this.salarioFinal =
      this.salario - (this.descISSS + this.descRenta + this.descAFP);

    this.empleado = {
      nombre: this.nombre,
      salario: this.salario,
      descISSS: this.descISSS,
      descRenta: this.descRenta,
      descAFP: this.descAFP,
      salarioFinal: this.salarioFinal
    };
    this.registro.push(this.empleado);
    this.contador++;
  }
}
