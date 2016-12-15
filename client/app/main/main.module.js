import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UIRouterModule } from 'ui-router-ng2';

import { MainComponent } from './main.component';

export const STATES = [{ name: 'main', url: '/', component: MainComponent }];

export let MainModule = @NgModule({
  imports: [BrowserModule , FormsModule, UIRouterModule.forChild({
    states: STATES
  })],
  declarations: [MainComponent],

  exports: [MainComponent]
})
class MainModule {};
