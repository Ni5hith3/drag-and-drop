import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { DropAreaComponent } from './components/drop-area/drop-area.component';
import { GenericBoxComponent } from './components/generic-box/generic-box.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TypeCheckComponent } from './components/type-check/type-check.component';
import { DropAreaTypeCheckComponent } from './components/type-check/drop-area-type-check/drop-area-type-check.component';
import { NavigationTypeCheckComponent } from './components/type-check/navigation-type-check/navigation-type-check.component';
import { DragDropDirectiveModule} from "angular4-drag-drop";
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import {MdSidenavModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DragdropComponent,
    DropAreaComponent,
    GenericBoxComponent,
    NavigationComponent,
    TypeCheckComponent,
    DropAreaTypeCheckComponent,
    NavigationTypeCheckComponent,
    MenuComponent,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule
  ],
  imports: [
    BrowserModule,
    Ng2DragDropModule.forRoot(),
    DragDropDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
