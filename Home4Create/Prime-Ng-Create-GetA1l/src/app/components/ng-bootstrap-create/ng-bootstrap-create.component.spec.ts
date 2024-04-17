import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapCreateComponent } from './ng-bootstrap-create.component';

describe('NgBootstrapCreateComponent', () => {
  let component: NgBootstrapCreateComponent;
  let fixture: ComponentFixture<NgBootstrapCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgBootstrapCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgBootstrapCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
