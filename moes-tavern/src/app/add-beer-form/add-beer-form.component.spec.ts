import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeerFormComponent } from './add-beer-form.component';

describe('AddBeerFormComponent', () => {
  let component: AddBeerFormComponent;
  let fixture: ComponentFixture<AddBeerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBeerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
