import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhoVoluntarioComponent } from './trabalho-voluntario.component';

describe('TrabalhoVoluntarioComponent', () => {
  let component: TrabalhoVoluntarioComponent;
  let fixture: ComponentFixture<TrabalhoVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrabalhoVoluntarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabalhoVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
