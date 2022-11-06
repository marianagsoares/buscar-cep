import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEndereco } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class ViaCepService {
  //6.3
  constructor(private http: HttpClient) { }

  //6.1
  private readonly baseUrl: string = "https://viacep.com.br/ws"

  //6.4
  buscarCep(cep: string) {
    return this.http.get<IEndereco>(`${this.baseUrl}/${cep}/json`)
  }
}
