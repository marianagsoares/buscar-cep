import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEndereco } from './interfaces';
import { ViaCepService } from './services/via-cep.service';

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

  
  constructor(
    private formBuilder: FormBuilder,
    private viaCepService: ViaCepService,
    private snackBar: MatSnackBar
  ) {}

  formulario: FormGroup = this.formBuilder.group({
    inputCep: ["", [Validators.required]]
  })

  endereco!: IEndereco;
  
  procurar() {
    const valorInputCep = this.formulario.get('inputCep')?.value

    this.viaCepService.buscarCep(valorInputCep).subscribe((enderecoRetornado) => {
      if(enderecoRetornado.erro){
        this.snackBar.open(`CEP ${valorInputCep} não encontrado`, "fechar")
      }else {
        this.endereco = enderecoRetornado;
      }      
    })
  }
}
