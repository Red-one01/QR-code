import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTranslateMenuComponent } from './my-translate-menu.component';

describe('MyTranslateMenuComponent', () => {
  let component: MyTranslateMenuComponent;
  let fixture: ComponentFixture<MyTranslateMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTranslateMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTranslateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
