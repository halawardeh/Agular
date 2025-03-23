import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProducComponent } from './edit-produc.component';

describe('EditProducComponent', () => {
  let component: EditProducComponent;
  let fixture: ComponentFixture<EditProducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProducComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
