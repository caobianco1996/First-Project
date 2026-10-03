import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = '';
  lastCreatedServer = '';
  serverCreated = false;
  servers: string[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(): void {
    const name = this.serverName.trim();
    if (!this.allowNewServer || !name) return;

    this.servers.push(name);
    this.lastCreatedServer = name;
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created';
    this.serverName = '';
  }
}
