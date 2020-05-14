import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateEmailComponent } from "./pages/create-email/create-email.component";
import { ListEmailComponent } from "./pages/list-email/list-email.component";
import { EditEmailComponent } from "./pages/edit-email/edit-email.component";

const routes: Routes = [
  { path: "", redirectTo: "/emaillist", pathMatch: "full" },
  { path: "emaillist", component: ListEmailComponent },
  { path: "create", component: CreateEmailComponent },
  { path: "edit/:id", component: EditEmailComponent },
  { path: "**", redirectTo: "emaillist", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const RoutingComponents = [
  ListEmailComponent,
  CreateEmailComponent,
  EditEmailComponent,
];
