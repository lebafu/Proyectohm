import { Component, OnInit } from '@angular/core';
import {FondosConcursablesService} from 'src/app/services/fondos-concursables.service';
import {FondoConcursable} from 'src/app/interfaces/fondoconcursable';

@Component({
  selector: 'app-fondoconcursableshow',
  templateUrl: './fondoconcursableshow.component.html',
  styleUrls: ['./fondoconcursableshow.component.css']
})
export class FondoconcursableshowComponent implements OnInit {

  constructor(private fondosconcursablesService: FondosConcursablesService) { }

  ngOnInit(): void {
  }

}
