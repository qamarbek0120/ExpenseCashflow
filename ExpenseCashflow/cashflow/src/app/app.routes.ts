import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { DeleteComponent } from './delete/delete.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
        },
        {
            path: "home",
            component: HomeComponent
        },
        {
            path: "create",
            component: CreateComponent
        },
        {
            path: "edit/:id",
            component: EditComponent
        },
    
        {
            path: "details/:id",
            component: DetailsComponent
        },
    
        {
            path: "delete/:id",
            component: DeleteComponent
        }
];
