import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDesignComponent } from './my-design.component';

describe('MyDesignComponent', () => {
  let component: MyDesignComponent;
  let fixture: ComponentFixture<MyDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
