import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeitComponent } from './deit.component';

describe('DeitComponent', () => {
  let component: DeitComponent;
  let fixture: ComponentFixture<DeitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
