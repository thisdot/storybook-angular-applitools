import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContentEditableComponent } from "./components/contenteditable.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ContentEditableComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
