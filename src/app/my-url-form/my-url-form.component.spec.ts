import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUrlFormComponent } from './my-url-form.component';

describe('MyUrlFormComponent', () => {
  let component: MyUrlFormComponent;
  let fixture: ComponentFixture<MyUrlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyUrlFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyUrlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
