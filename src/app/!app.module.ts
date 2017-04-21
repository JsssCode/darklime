import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './common_services/in-memory-data.service';
import { WindowRefService } from './common_services/window-ref.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './header/carousel/carousel.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioCategoryComponent } from './portfolio/portfolio-category/portfolio-category.component';
import { PortfolioService } from './portfolio/portfolio.service';
import { FilterImgsByCategoryPipe } from './portfolio/portfolio-category/filter-portfolio-category';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillsComponent } from './skills/skills.component';
import { SkillsService } from './skills/skills.service';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
//import { ContactformComponent } from './contactform/contactform.component';
import { ContactHeaderComponent } from './header/contact_header/contact-header.component';
import { AngularFireModule, AuthProviders, AuthMethods  } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
    apiKey: "", //enter ApiKey here
    authDomain: "darklime-99e0c.firebaseapp.com",
    databaseURL: "https://darklime-99e0c.firebaseio.com",
    storageBucket: "darklime-99e0c.appspot.com",
    messagingSenderId: "929736666445"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Anonymous
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    PortfolioComponent,
    PortfolioCategoryComponent,
    FilterImgsByCategoryPipe,
    SkillsComponent,
    StatisticsComponent,
    AboutComponent,
    FooterComponent,
 //   ContactformComponent,
    ContactHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [WindowRefService, PortfolioService,
    SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
