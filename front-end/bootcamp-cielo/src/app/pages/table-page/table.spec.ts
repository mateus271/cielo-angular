import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TablePage } from './table.page';

describe('TablePage', () => {
  let component: TablePage;
  let fixture: ComponentFixture<TablePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePage ],
    }).compileComponents();

    fixture = TestBed.createComponent(TablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});