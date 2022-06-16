import { CartComponent } from './views/cart/cart.component';
import { ContactComponent } from './views/contact/contact.component';
import { SearchComponent } from './views/search/search.component';
import { AccountComponent } from './views/account/account.component';
import { HomeComponent } from './views/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './views/console/console.component';
import { JogoComponent } from './views/jogo/jogo.component';
import { PcComponent } from './views/pc/pc.component';
import { TelefoneComponent } from './views/telefone/telefone.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "pesquisa", component: SearchComponent},
  { path: "conta", component: AccountComponent },
  { path: "carrinho", component: CartComponent},
  { path: "contato", component: ContactComponent},
  { path: "console", component: ConsoleComponent},
  { path: "jogo", component: JogoComponent},
  { path: "pc", component: PcComponent},
  { path: "telefone", component: TelefoneComponent},
  { path: "login", component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
