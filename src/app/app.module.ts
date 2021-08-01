import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { HoverDirective } from './card/hover.directive';
import { SearchPipe } from './card/search.pipe';
import { NavComponent } from './nav/nav.component';
import { PageComponent } from './page/page.component';
import { ContentService } from './service/content.service';
import { RouterModule } from '@angular/router'; 


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    HoverDirective,
    SearchPipe,
    NavComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,

    MatToolbarModule,
    MatGridListModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'welcome',
        component: CardComponent,
      }
    ])

  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
