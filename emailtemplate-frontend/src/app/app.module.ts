import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, RoutingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MasterpagesComponent } from "./shared/layout/masterpages/masterpages.component";
import { EmailService } from "./services/email.service";
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { OrderModule } from "ngx-order-pipe";
import { ListEmailComponent } from "./pages/list-email/list-email.component";
import { CreateEmailComponent } from "./pages/create-email/create-email.component";
import { EditEmailComponent } from "./pages/edit-email/edit-email.component";
import { QuillModule } from "ngx-quill";
import * as Quill from "quill";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    MasterpagesComponent,
    RoutingComponents,
    EditEmailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    QuillModule.forRoot(),
    CKEditorModule,
    ReactiveFormsModule,
    DataTablesModule,
    AppRoutingModule,
  ],
  providers: [EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
