import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLogosComponent } from './my-logos.component';

describe('MyLogosComponent', () => {
  let component: MyLogosComponent;
  let fixture: ComponentFixture<MyLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
