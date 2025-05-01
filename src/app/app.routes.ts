import { Routes } from '@angular/router';
import { CommonLayoutComponent } from './main-website/common-layout/common-layout.component';

export const routes: Routes = [
    {
        path:'',
        component:CommonLayoutComponent,
        children:[
            {
                path:"",
                loadChildren: () => import('../app/main-website/home/home.routes').then(r => r.HomeRoutes)
            },
            {
                path:"services",
                loadChildren: () => import('../app/main-website/services/services.routes').then(r => r.ServicesRoutes)
            },
            {
                path:"about-us",
                loadChildren: () => import('../app/main-website/about-us/about-us.routes').then(r => r.AboutUsRoutes)
            },
            
            // {
            //     path:"home",
            //     loadChildren: () => import('../app/landing_page/home/home.routes').then(r => r.HomeRoutes)
            // },
            // {
            //     path:"products",
            //     loadChildren: () => import('../app/landing_page/products/products.routes').then(r => r.ProductsRoutes)
            // },
            // {
            //     path:"applications",
            //     loadChildren: () => import('../app/landing_page/applications/applications.routes').then(r => r.ApplicationsRoutes)
            // },
            // {
            //     path:"contactUs",
            //     loadChildren: () => import('../app/landing_page/contact-us/contact-us.routes').then(r => r.ContactUsRoutes)
            // },
            // {
            //     path:"about",
            //     loadChildren: () => import('../app/landing_page/about/about.routes').then(r => r.AboutRoutes)
            // }
        ]
    }
];
