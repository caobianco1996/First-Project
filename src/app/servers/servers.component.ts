import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverName = '';
  lastCreatedServer = '';
  servers: string[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(): void {
    const name = this.serverName.trim();
    if (!this.allowNewServer || !name) return;

    this.servers.push(name);
    this.lastCreatedServer = name;
    this.serverName = '';
  }
}
