import { Component, OnInit } from '@angular/core';
import { ApokeapiService } from '../../services/apokeapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: false,
  
  templateUrl: './pokemon.component.html',
  styles: ``
})
export class PokemonComponent implements OnInit {
  pokemon: any;
  images: any[] = []; 
  habilidades: any[] = [];
  nombre: any[] = [];
  descripcion: any[] = [];

  constructor(private pokeapiService: ApokeapiService, private activateRoute: ActivatedRoute, private route: Router){}
  
  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => this.pokeapiService.getPokemonDetails(params['nameOrId']).subscribe(po =>{
      this.pokemon = po;
      this.images = Object.values(this.pokemon.sprites)
          .filter(url => typeof url === 'string' && url);
          for (let h of po.abilities){
            this.pokeapiService.getHabilitiesDetails(h.ability.url).subscribe(habilidad => {
              this.habilidades.push(habilidad)
              this.habilidades.forEach(h =>{
                this.nombre.push(h.name);
                let entry: any[] = h.flavor_text_entries;
                let cogido = false;
                entry.forEach(en =>{
                  if(en.language.name==="en" && !cogido){
                    if (!this.descripcion.includes(en.flavor_text)) {
                      this.descripcion.push(en.flavor_text);
                    }
                    cogido = true;
                    
                  }
                })
                console.log(this.pokemon);
                
              })
          })
          }
    }))

    
  }

  regresar(){
    this.route.navigate(["pokemones"]);
  }

}
