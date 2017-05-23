import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSidebarComponent } from './navigation-sidebar.component';

describe('NavigationSidebarComponent', () => {
  let component: NavigationSidebarComponent;
  let fixture: ComponentFixture<NavigationSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
