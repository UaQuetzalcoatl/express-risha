import { Component } from '@angular/core';

export let NavbarComponent = @Component({
  selector: 'navbar' ,
  template: require('./navbar.html')
})
class NavbarComponent {
  isCollapsed = true;

  currentUser = {};
  menu = [{
    title: 'Home',
    state: 'main'
  }];
};
