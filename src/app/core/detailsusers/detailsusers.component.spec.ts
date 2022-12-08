import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsusersComponent } from './detailsusers.component';

describe('DetailsusersComponent', () => {
  let component: DetailsusersComponent;
  let fixture: ComponentFixture<DetailsusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
