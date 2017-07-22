import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'quo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
