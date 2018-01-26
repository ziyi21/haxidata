import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';

/*router*/
import { RouterModule } from '@angular/router';
import { coreRoutes } from './core-routing';


/*使用forroot和forchild都没有什么影响*/
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(coreRoutes)
  ],
  declarations: [IndexComponent, LeftComponent, RightComponent],
  exports: [ LeftComponent ]
})
export class CoreModule {

}
