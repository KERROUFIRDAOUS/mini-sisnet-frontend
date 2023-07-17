import { NgModule } from '@angular/core';
import { RouterModule , Routes} from "@angular/router";
import {ClientsComponent} from "./clients/clients.component";
import {NewClientComponent} from "./new-client/new-client.component";
import {UpdateClientComponent} from "./update-client/update-client.component";

const routes: Routes = [
  { path: "clients", component: ClientsComponent},
  { path: "new-client", component: NewClientComponent},
  { path: "update-client/:id", component: UpdateClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
