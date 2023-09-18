import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  @Output() backButton = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  goToBack() {
    this.backButton.emit();
  }

}
