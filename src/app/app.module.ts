import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { NavigationComponent } from './container/navigation/navigation.component';
import { HeaderComponent } from './container/header/header.component';
import { TopBarComponent } from './container/top-bar/top-bar.component';
import { CarouselComponent } from './container/carousel/carousel.component';
import { FeaturesComponent } from './container/features/features.component';
import { AboutUsComponent } from './container/about-us/about-us.component';
import { PracticeAreaComponent } from './container/practice-area/practice-area.component';
import { CallToActionComponent } from './container/call-to-action/call-to-action.component';
import { CaseResutlsComponent } from './container/case-resutls/case-resutls.component';
import { ImageBlockComponent } from './container/image-block/image-block.component';
import { AttorneysComponent } from './container/attorneys/attorneys.component';
import { ImageBlock2Component } from './container/image-block2/image-block2.component';
import { NewsComponent } from './news/news.component';
import { QuoteAreaComponent } from './container/quote-area/quote-area.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './container/footer/footer.component';
import { HomeComponent } from './pages/home.component';
import { OurIdeasComponent } from './pages/our_ideas.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },//
  { path: 'our_ideas', component: OurIdeasComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavigationComponent,
    HeaderComponent,
    TopBarComponent,
    CarouselComponent,
    FeaturesComponent,
    AboutUsComponent,
    PracticeAreaComponent,
    CallToActionComponent,
    CaseResutlsComponent,
    ImageBlockComponent,
    AttorneysComponent,
    ImageBlock2Component,
    NewsComponent,
    QuoteAreaComponent,
    ClientsComponent,
    FooterComponent,
    HomeComponent,
    OurIdeasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
