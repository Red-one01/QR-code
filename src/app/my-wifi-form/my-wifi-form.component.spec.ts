import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWifiFormComponent } from './my-wifi-form.component';

describe('MyWifiFormComponent', () => {
  let component: MyWifiFormComponent;
  let fixture: ComponentFixture<MyWifiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWifiFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyWifiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
