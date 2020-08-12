import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTesisCoordinadortesisComponent } from './lista-tesis-coordinadortesis.component';

describe('ListaTesisCoordinadortesisComponent', () => {
  let component: ListaTesisCoordinadortesisComponent;
  let fixture: ComponentFixture<ListaTesisCoordinadortesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTesisCoordinadortesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTesisCoordinadortesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
