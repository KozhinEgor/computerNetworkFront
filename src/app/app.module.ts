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
import {MatDialogModule} from "@angular/material/dialog";
import { SelectUserComponent } from './select-user/select-user.component';
import { SelectCategoryEquipmentComponent } from './select-category-equipment/select-category-equipment.component';
import { SelectOtdelComponent } from './select-otdel/select-otdel.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { ComponentTableComponent } from './component-table/component-table.component';
import { SelectComponentComponent } from './select-component/select-component.component';
import { TableComponentEquipmentComponent } from './table-component-equipment/table-component-equipment.component';
import { DialogSelectComponent } from './dialog-select/dialog-select.component';
import {MatTabsModule} from "@angular/material/tabs";
import { SelectProgramKeyComponent } from './select-program-key/select-program-key.component';
import { ProgramEquipmentComponent } from './program-equipment/program-equipment.component';
import { ErrorComponent } from './error/error.component';
import { PopupEditSotrudnickComponent } from './user-table/popup-edit-sotrudnick/popup-edit-sotrudnick.component';
import { PageSkladComponent } from './page-sklad/page-sklad.component';
import { ReestrComponentovComponent } from './reestr-componentov/reestr-componentov.component';
import { VendorComponent } from './vendor/vendor.component';
import { CategoryaComplectComponent } from './categorya-complect/categorya-complect.component';
import { AddComponentComponent } from './add-component/add-component.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { AddCatEquipmentComponent } from './add-cat-equipment/add-cat-equipment.component';
import { AddToScladComponent } from './add-to-sclad/add-to-sclad.component';
import { AddCompComponent } from './page-sklad/add-component/add-comp.component';
import { ProgramReestrComponent } from './program-reestr/program-reestr.component';
import { SelectProgramComponent } from './program-reestr/select-program/select-program.component';
import { DatapickerComponent } from './program-reestr/datapicker/datapicker.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';

const routes = [
  {path:'auth', component: PageAuthComponent},
  {path:'rab-mest', component: PageRabMestComponent},
  {path:'sklad', component: PageSkladComponent},
  {path:'component', component: ReestrComponentovComponent},
  {path:'home', component: PageHomeComponent},
  {path: 'program-reestr',component: ProgramReestrComponent},
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
    SelectUserComponent,
    SelectCategoryEquipmentComponent,
    SelectOtdelComponent,
    ComponentTableComponent,
    SelectComponentComponent,
    TableComponentEquipmentComponent,
    DialogSelectComponent,
    SelectProgramKeyComponent,
    ProgramEquipmentComponent,
    ErrorComponent,
    PopupEditSotrudnickComponent,
    PageSkladComponent,
    ReestrComponentovComponent,
    VendorComponent,
    CategoryaComplectComponent,
    AddComponentComponent,
    AddVendorComponent,
    AddCatEquipmentComponent,
    AddToScladComponent,
    AddCompComponent,
    ProgramReestrComponent,
    SelectProgramComponent,
    DatapickerComponent
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
    FormsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [{provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}, {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
