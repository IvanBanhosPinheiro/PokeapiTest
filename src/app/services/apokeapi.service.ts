import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApokeapiService {

  private apiUrl = 'https://pokeapi.co/api/v2/';
  private lista: any[] = []

  constructor(private http: HttpClient) { }

  // Método para obtener una lista de pokémon
  getPokemonList(limit: number = 25, offset: number = 0): Observable<any> {
    return this.http.get(`${this.apiUrl}pokemon?limit=${limit}&offset=${offset}`);
  }


  // Método para obtener detalles de un pokémon por su nombre o ID
  getPokemonDetails(nameOrId: string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}pokemon/${nameOrId}`);
  }

  //Metodo para obtener detalles de las habilidades
  getHabilitiesDetails(url:string): Observable<any>{
    return this.http.get(url);
  }
}
