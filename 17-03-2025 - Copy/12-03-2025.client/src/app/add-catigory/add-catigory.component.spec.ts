import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatigoryComponent } from './add-catigory.component';

describe('AddCatigoryComponent', () => {
  let component: AddCatigoryComponent;
  let fixture: ComponentFixture<AddCatigoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCatigoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCatigoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
