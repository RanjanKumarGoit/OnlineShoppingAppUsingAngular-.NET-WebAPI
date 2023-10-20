import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddProductComponent } from './dashboard-add-product.component';

describe('DashboardAddProductComponent', () => {
  let component: DashboardAddProductComponent;
  let fixture: ComponentFixture<DashboardAddProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAddProductComponent]
    });
    fixture = TestBed.createComponent(DashboardAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
