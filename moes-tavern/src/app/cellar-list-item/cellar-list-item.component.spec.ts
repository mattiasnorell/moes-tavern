import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellarListItemComponent } from './cellar-list-item.component';

describe('CellarListItemComponent', () => {
  let component: CellarListItemComponent;
  let fixture: ComponentFixture<CellarListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellarListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellarListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
