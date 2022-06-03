import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { PageAuthComponent } from './page-auth/page-auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {PageHomeComponent} from "./page-home/page-home.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import { PageRabMestComponent } from './page-rab-mest/page-rab-mest.component';
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import { UserTableComponent } from './user-table/user-table.component';
import {MatTableModule} from "@angular/material/table";
import { EquipmentTableComponent } from './equipment-table/equipment-table.component';
import { PopupEditEquipmentComponent } from './equipment-table/popup-edit-equipment/popup-edit-equipment.component';
import { PopupEditUserComponent } from './user-table/popup-edit-user/popup-edit-user.component';
import {MatDialogModule} from "@angular/material/dialog";
import { SelectUserComponent } from './select-user/select-user.component';
import { SelectCategoryEquipmentComponent } from './select-category-equipment/select-category-equipment.component';
import { SelectOtdelComponent } from './select-otdel/select-otdel.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { ComponentTableComponent } from './component-table/component-table.component';
import { SelectComponentComponent } from './select-component/select-component.component';
import { TableComponentEquipmentComponent } from './table-component-equipment/table-component-equipment.component';
import { DialogSelectComponent } from './dialog-select/dialog-select.component';


const routes = [
  {path:'auth', component: PageAuthComponent},
  {path:'rab-mest', component: PageRabMestComponent},
  {path:'home', component: PageHomeComponent},
  {path: '**', redirectTo:'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    PageAuthComponent,
    PageHomeComponent,
    PageRabMestComponent,
    UserTableComponent,
    EquipmentTableComponent,
    PopupEditEquipmentComponent,
    PopupEditUserComponent,
    SelectUserComponent,
    SelectCategoryEquipmentComponent,
    SelectOtdelComponent,
    ComponentTableComponent,
    SelectComponentComponent,
    TableComponentEquipmentComponent,
    DialogSelectComponent
  ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        ReactiveFormsModule,
        MatIconModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        HttpClientModule,
        MatButtonModule,
        MatInputModule,
        MatExpansionModule,
        MatTableModule,
        MatDialogModule,
        MatAutocompleteModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
