import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './menu/menu.component';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import {FormsModule} from "@angular/forms";
import {CapacityComponent} from "./capacity/capacity.component";
import { CaloriesComponent } from './calories/calories.component';
import { RestaurantHomeComponent } from './restaurant-home/restaurant-home.component';
import {NgCircleProgressModule} from "ng-circle-progress";
import {StatisticsComponent} from "./order/statistics/statistics.component";
import {RestaurantComponent} from "./restaurant.component";
import {NgxGaugeModule} from "ngx-gauge";






@NgModule({
  declarations: [
    OrderComponent,
    MenuComponent,
    CapacityComponent,
    RestaurantHomeComponent,
    StatisticsComponent,
    CaloriesComponent,
    RestaurantComponent,

  ],
    imports: [
        CommonModule,
        DemoMaterialModule,
        FormsModule,
      DemoMaterialModule,
      FormsModule,
      NgxGaugeModule




    ]
})
export class RestaurantModule { }
