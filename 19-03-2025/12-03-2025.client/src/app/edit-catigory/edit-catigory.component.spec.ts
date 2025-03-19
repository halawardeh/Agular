import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCatigoryComponent } from './edit-catigory.component';

describe('EditCatigoryComponent', () => {
  let component: EditCatigoryComponent;
  let fixture: ComponentFixture<EditCatigoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCatigoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCatigoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
