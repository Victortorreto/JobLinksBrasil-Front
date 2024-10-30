import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectaComponent } from './ConectaComponent';

describe('ConectaComponent', () => {
  let component: ConectaComponent;
  let fixture: ComponentFixture<ConectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConectaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
