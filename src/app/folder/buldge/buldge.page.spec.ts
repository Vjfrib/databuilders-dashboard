import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuldgePage } from './buldge.page';

describe('BuldgePage', () => {
  let component: BuldgePage;
  let fixture: ComponentFixture<BuldgePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuldgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
