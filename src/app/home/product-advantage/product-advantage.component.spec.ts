import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdvantageComponent } from './product-advantage.component';

describe('ProductAdvantageComponent', () => {
  let component: ProductAdvantageComponent;
  let fixture: ComponentFixture<ProductAdvantageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAdvantageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
