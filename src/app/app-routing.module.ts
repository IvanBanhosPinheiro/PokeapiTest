import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './component/inicio/inicio.component';
import { NotFoundComponent } from './componente/not-found/not-found.component';
import { PokemonesComponent } from './component/pokemones/pokemones.component';
import { PokemonComponent } from './component/pokemon/pokemon.component';

const routes: Routes = [
  {
    path:"pokemon/:nameOrId",
    component: PokemonComponent
  },
  {
    path:"pokemones",
    component: PokemonesComponent
  },
  {
    path:"notFound",
    component: NotFoundComponent
  },
  {
    path:"",
    component: InicioComponent
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "notFound"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
