import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() cl = 'yellow';
  @Output() msgToParent = new EventEmitter();

  sendMsg() {
    this.msgToParent.emit('Message envoyé de la part du Child');
  }
}
