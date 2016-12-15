import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { SocketService } from '../../components/socket/socket.service';

export let MainComponent = @Component({
  selector: 'main' ,
  template: require('./main.html'),
  styles: [require('./main.scss')]
})
class MainComponent {

  awesomeThings = [];

  static parameters = [Http, SocketService];
  constructor(_Http_) {
    this.Http = _Http_;
  }

  ngOnInit() {
    this.Http.get('/api/things').map(res => res.json()).catch(err => Observable.throw(err.json().error || 'Server error')).subscribe(things => {
      this.awesomeThings = things;
    });
  }
};
