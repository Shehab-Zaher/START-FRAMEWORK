import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProtoflioComponent } from './protoflio/protoflio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'' , component:HomeComponent , title:'home'},
    {path:"home" , component:HomeComponent , title:"home"},
    {path:"about" , component:AboutComponent , title:"about"},
    {path:"protoflio" , component:ProtoflioComponent , title:"protoflio"},
    {path:"contact" , component:ContactComponent , title:"contact"},
    {path:'**' , component:NotFoundComponent , title:'not found'}

];
