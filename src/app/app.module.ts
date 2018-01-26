import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/*module*/
import { CoreModule } from './core/core.module';


/*component*/
import { AppComponent } from './app.component';
// import { LeftComponent} from './core/left/left.component';

/*router*/
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    CoreModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ NgZorroAntdModule, RouterModule ]
})
export class AppModule { }
