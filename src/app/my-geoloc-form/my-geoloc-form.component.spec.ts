import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGeolocFormComponent } from './my-geoloc-form.component';

describe('MyGeolocFormComponent', () => {
  let component: MyGeolocFormComponent;
  let fixture: ComponentFixture<MyGeolocFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGeolocFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGeolocFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
