import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyyerLibComponent } from './soyyer-lib.component';

describe('SoyyerLibComponent', () => {
  let component: SoyyerLibComponent;
  let fixture: ComponentFixture<SoyyerLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoyyerLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoyyerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
