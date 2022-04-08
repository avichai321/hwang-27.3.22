import { Component, OnInit} from '@angular/core';
import { Car } from '../interface/Car';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  constructor() { }
  car1: Car = {name:'' , img: ''}
  
  ngOnInit(): void {
  }

}
