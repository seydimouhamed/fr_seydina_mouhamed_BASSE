import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './layout/main/main.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { ToolbarComponent } from './layout/components/toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [MainComponent, NavbarComponent, FooterComponent, ToolbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class CoreModule { }
