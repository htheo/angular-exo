import {Routes, RouterModule} from "@angular/router";
import {PageHomeComponent} from "./page-home.component";
import {PageContactComponent} from "./page-contact.component";
import {PageMentionComponent} from "./page-mention.component";
import {ItemComponent} from "./item/item.component";

const APP_ROUTES : Routes = [
    {path:'', component:PageHomeComponent},
    {path:'contact', component:PageContactComponent},
    {path:'mentions', component:PageMentionComponent},
    {path:'item/:id', component:ItemComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);