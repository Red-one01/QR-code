import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVcardFormComponent } from './my-vcard-form.component';

describe('MyVcardFormComponent', () => {
  let component: MyVcardFormComponent;
  let fixture: ComponentFixture<MyVcardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyVcardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyVcardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
