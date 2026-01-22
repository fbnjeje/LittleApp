import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPages } from './product-pages';

describe('ProductPages', () => {
  let component: ProductPages;
  let fixture: ComponentFixture<ProductPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
