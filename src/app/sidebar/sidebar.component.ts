import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/add-fish-details',   title: 'Add Fish Details',       icon:'nc-simple-add',    class: '' },
    { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/data',         title: 'Fish List',   icon:'nc-tile-56',    class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    isLoggedIn:boolean=false;
    ngOnInit() {
        if(localStorage.getItem('loggedIn')=='true') this.isLoggedIn=true;
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
