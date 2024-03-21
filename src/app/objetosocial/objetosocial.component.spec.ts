import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetosocialComponent } from './objetosocial.component';

describe('ObjetosocialComponent', () => {
  let component: ObjetosocialComponent;
  let fixture: ComponentFixture<ObjetosocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjetosocialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjetosocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
