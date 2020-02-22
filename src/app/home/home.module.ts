import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { LayoutModule } from '../layout/layout.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    LayoutModule,
    AppRoutingModule,
    TranslateModule,
  ],
  providers: [],
  declarations: [HomeComponent,],
  exports: [HomeComponent,]
})
export class HomeModule {}
