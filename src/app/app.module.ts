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
// Pages
import { HomeComponent } from './pages/home.component';
import { OurIdeasComponent } from './pages/our_ideas.component';
import { YourContributionsComponent } from './pages/your_contributions.component';
import { RehabComponent } from './pages/rehab.component';
import { JoinUsComponent } from './pages/join_us.component';
import { UsefulDocumentsComponent } from './pages/useful_documents.component';
import { ContactUsComponent } from './pages/contact_us.component';
import { WhoAreUsComponent } from './pages/who_are_us.component';
import { BannerAreaComponent } from './container/banner-area/banner-area.component';
import { BreadcrumbComponent } from './container/breadcrumb/breadcrumb.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our_ideas', component: OurIdeasComponent },
  { path: 'your_contributions', component: YourContributionsComponent },
  { path: 'rehab', component: RehabComponent},
  { path: 'join_us', component: JoinUsComponent},
  { path: 'useful_documents', component: UsefulDocumentsComponent },
  { path: 'contact_us', component: ContactUsComponent },
  { path: 'who_are_us', component: WhoAreUsComponent }
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
    OurIdeasComponent,
    YourContributionsComponent,
    RehabComponent,
    JoinUsComponent,
    UsefulDocumentsComponent,
    ContactUsComponent,
    WhoAreUsComponent,
    BannerAreaComponent,
    BreadcrumbComponent
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
