import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICep } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class ViaCepService {
  constructor(private http: HttpClient) { }

  private readonly baseUrl: string = "https://viacep.com.br/ws"

  buscarCep(cep: string) {
    return this.http.get<ICep>(`${this.baseUrl}/${cep}/json`)
  }
}
