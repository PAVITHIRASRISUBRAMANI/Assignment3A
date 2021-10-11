import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpit',
  templateUrl: './cpit.component.html',
  styleUrls: ['./cpit.component.css']
})
export class CpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
   
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}
