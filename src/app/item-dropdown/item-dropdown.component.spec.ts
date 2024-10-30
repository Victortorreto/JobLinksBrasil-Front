import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDropdownComponent } from './item-dropdown.component';

describe('ItemDropdownComponent', () => {
  let component: ItemDropdownComponent;
  let fixture: ComponentFixture<ItemDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
