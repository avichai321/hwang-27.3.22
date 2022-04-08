import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-girl',
  templateUrl: './girl.component.html',
  styleUrls: ['./girl.component.css']
})
export class GirlComponent implements OnInit {

  constructor() { }
 @Input() item = {name: '' , img: ''}
  ngOnInit(): void {
  }

}
