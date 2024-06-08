import { Component } from '@angular/core';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { FormControl,Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, NgIf],
})
export class ContatoComponent {
  nome = new FormControl('', Validators.required);
  email = new FormControl('', Validators.email);
  assunto = new FormControl('');
  mensagem = new FormControl('', [Validators.required, Validators.minLength(3)]);

  getErrorMessage() {
    if (this.nome.hasError('required')){
      return 'obrigatorio';
    }

    return '';
  }

  submitForm(){
    const FormData = {
    nome: this.nome.value,
    email: this.email.value,
    assunto: this.assunto.value,
    mensagem: this.mensagem.value
    }  
    console.log(FormData);
  
  }
}
