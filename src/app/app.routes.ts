import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Component } from '@angular/core';
import { Layout } from './pages/layout/layout';
import { EmployeeList } from './pages/employee-list/employee-list';
import { EmployeeForm } from './pages/employee-form/employee-form';
import { Master } from './pages/master/master';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
       component:Login
    },
    {
        path:'',  
        component:Layout,
        children:[
            {
                path:'emp-list',
                component:EmployeeList
            },
            {
                path:'emp-form',
                component:EmployeeForm
            },
            {
                path:'master',
                component:Master
            }
        ]
    }
]

      
