import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { TablesGridComponent } from './tables-grid/tables-grid.component';
import { TablesListComponent } from './tables-list/tables-list.component';
import {MatBadgeModule} from '@angular/material/badge';
@NgModule({
  imports: [
    CommonModule,
    TablesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,MatButtonToggleModule, MatTabsModule,
    MatBadgeModule
  ],
  declarations: [TablesComponent, TablesGridComponent, TablesListComponent],

})
export class TablesModule {}
