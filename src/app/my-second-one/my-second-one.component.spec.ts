import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondOneComponent } from './my-second-one.component';

describe('MySecondOneComponent', () => {
  let component: MySecondOneComponent;
  let fixture: ComponentFixture<MySecondOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySecondOneComponent]
    });
    fixture = TestBed.createComponent(MySecondOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
