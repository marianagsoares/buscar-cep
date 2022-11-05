import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEndereco } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class ViaCepService {
  constructor(private http: HttpClient) { }

  private readonly baseUrl: string = "https://viacep.com.br/ws"

  buscarCep(cep: string) {
    return this.http.get<IEndereco>(`${this.baseUrl}/${cep}/json`)
  }
}
