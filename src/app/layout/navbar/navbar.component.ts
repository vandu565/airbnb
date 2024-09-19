import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from "primeng/toolbar";
import {MenuModule} from "primeng/menu";
import { CategoryComponent } from './category/category.component';
import { AvatarComponent } from './avatar/avatar.component';
import { MenuItem } from 'primeng/api';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule,
    FontAwesomeModule,
    ToolbarModule,
    MenuModule,
    CategoryComponent,
    AvatarComponent

  ],
  //providers:[DialogService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  location="Anywhere";
  guests="Add guests";
  dates="Any week";

  toastService = inject(ToastService);

  //login=()=>this.authService.login();
  //logout=()=>this.authService.logout();

  currentMenuItems:MenuItem[] | undefined=[];


  ngOnInit(): void {
    this.currentMenuItems=this.fetchMenu();
    this.toastService.send({severity:"info",summary:"welcome to your airbnb App"})
  }

   private fetchMenu(){
    return[
      {
        label:"Sign up",
        styleClass:"font-bold"
      },
      {
         label:"Log in"
      }
    ]
   }


}
