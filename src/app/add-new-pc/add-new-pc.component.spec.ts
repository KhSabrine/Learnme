import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPcComponent } from './add-new-pc.component';

describe('AddNewPcComponent', () => {
  let component: AddNewPcComponent;
  let fixture: ComponentFixture<AddNewPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
