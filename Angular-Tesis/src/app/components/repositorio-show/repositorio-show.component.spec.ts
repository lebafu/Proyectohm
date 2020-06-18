import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioShowComponent } from './repositorio-show.component';

describe('RepositorioShowComponent', () => {
  let component: RepositorioShowComponent;
  let fixture: ComponentFixture<RepositorioShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositorioShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
