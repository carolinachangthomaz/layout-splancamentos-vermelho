import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoCelularComponent } from './contato-celular.component';

describe('ContatoCelularComponent', () => {
  let component: ContatoCelularComponent;
  let fixture: ComponentFixture<ContatoCelularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoCelularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
