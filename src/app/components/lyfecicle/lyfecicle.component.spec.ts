import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyfecicleComponent } from './lyfecicle.component';

describe('LyfecicleComponent', () => {
  let component: LyfecicleComponent;
  let fixture: ComponentFixture<LyfecicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyfecicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyfecicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
