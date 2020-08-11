import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordListaTesisProfesorComponent } from './word-lista-tesis-profesor.component';

describe('WordListaTesisProfesorComponent', () => {
  let component: WordListaTesisProfesorComponent;
  let fixture: ComponentFixture<WordListaTesisProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordListaTesisProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordListaTesisProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
