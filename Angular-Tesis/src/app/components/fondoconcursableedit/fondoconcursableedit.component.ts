import { Component, OnInit } from '@angular/core';
import {FondosConcursablesService} from 'src/app/services/fondos-concursables.service';
import {FondoConcursable} from 'src/app/interfaces/fondoconcursable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fondoconcursableedit',
  templateUrl: './fondoconcursableedit.component.html',
  styleUrls: ['./fondoconcursableedit.component.css']
})
export class FondoconcursableeditComponent implements OnInit {
  id: any;
  editing: boolean =false;
  fondos_concursables: FondoConcursable[];
  constructor(private fondosconcursablesService: FondosConcursablesService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  
}
