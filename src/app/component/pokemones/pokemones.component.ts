import { Component, HostListener, OnInit } from '@angular/core';
import { ApokeapiService } from '../../services/apokeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemones',
  standalone: false,
  
  templateUrl: './pokemones.component.html',
  styles: ``
})
export class PokemonesComponent implements OnInit {
  pokemonList: any[] = [];
  listaTemporal: string[] = [];
  mostrados: number = 1;
  loading: boolean = false;

  constructor(private pokeapiService: ApokeapiService, private route: Router) { }

  ngOnInit(): void {
    this.cargarMasPokemon();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const threshold = 100; // Distancia en píxeles antes de llegar al final
    const position = window.innerHeight + window.scrollY;
    const max = document.documentElement.offsetHeight;

    if (position >= max - threshold && !this.loading) {
      this.cargarMasPokemon();
    }
  }


  cargarMasPokemon(): void{
    this.loading = true;
    
    let data =[]
    for(let i = this.mostrados; i< this.mostrados+25; i++){
      data.push(this.pokeapiService.getPokemonDetails(String(i)).toPromise())
    }
    
    Promise.all(data).then(pokemons=>{
      this.pokemonList.push(...pokemons);
      this.mostrados += 25;
    }) 
    .catch(error => {
      console.error('Error al cargar Pokémon:', error);
    })
    .finally(() => {
      this.loading = false;
    });
  }


  verPokemon(nameOrId: string):void{
    this.route.navigate(["/pokemon", nameOrId])
  }
}
