import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online { color: white; }
  `]
})
export class ServerComponent {
  @Input() serverName = '';
  serverId = Math.floor(Math.random() * 10000);
  serverStatus: 'online' | 'offline' = Math.random() > 0.5 ? 'online' : 'offline';

  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
