import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EmpleadoComponent } from "./empleado/empleado.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, EmpleadoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
