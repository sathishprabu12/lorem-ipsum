import { NgModule } from "@angular/core";
import { FormsModule as FormModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTabsModule } from "@angular/material/tabs";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FormsRoutingModule } from "./forms-routing.module";
import { BlogsComponent } from "./blogs.component";
import { MatGridList, MatGridListModule } from "@angular/material/grid-list";
 
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    FormsRoutingModule,
    FormModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,CommonModule
  ],
  declarations: [BlogsComponent]
})
export class FormsModule {}
