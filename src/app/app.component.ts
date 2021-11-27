import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Puntajes } from './interfaces/puntajes';
import { PuntajesService } from './services/puntajes.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  title = 'sistemasInteligentes';
  formulario: FormGroup;
  response = {};
  constructor(private Puntaje: PuntajesService, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      puntajeMatematicas: '',
      puntajeExpresionEscrita: '',
      puntajeCienciasNaturales: '',
      puntajeLenguajeExtranjero: '',
      puntajeCienciasSociales: '',
      gustoHumanidades: '',
      gustoIngenieria: '',
      gustoCiencias: '',
      gustoSalud: ''
    })
  }
  conectarRespuesta() {
    const puntaje = this.formulario.value;
    console.log(puntaje);
    this.Puntaje.getRta(puntaje).subscribe((resultado) => { 
      this.response = resultado;
    }, (error)=>{
      console.log(error);
      this.response = error.message;
    }
    );
  }
}
