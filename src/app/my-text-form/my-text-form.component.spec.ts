import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTextFormComponent } from './my-text-form.component';

describe('MyTextFormComponent', () => {
  let component: MyTextFormComponent;
  let fixture: ComponentFixture<MyTextFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTextFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTextFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
