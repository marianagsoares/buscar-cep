import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buscar-cep';

  // class ForBiulder
    //metodo array
    //metodo control
    //metodo group
    //metodo record

  
  constructor(private formBuilder: FormBuilder) {}

  formulario: FormGroup = this.formBuilder.group({
    inputCep: ["", [Validators.required]]
  })

  
  procurar() {
  
    const valorInputCep = this.formulario.get('inputCep')?.value
    console.log(valorInputCep)
  }
}
