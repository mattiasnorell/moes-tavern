import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellarListComponent } from './cellar-list.component';

describe('CellarListComponent', () => {
  let component: CellarListComponent;
  let fixture: ComponentFixture<CellarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
