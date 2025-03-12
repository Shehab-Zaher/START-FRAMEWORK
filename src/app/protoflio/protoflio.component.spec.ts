import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtoflioComponent } from './protoflio.component';

describe('ProtoflioComponent', () => {
  let component: ProtoflioComponent;
  let fixture: ComponentFixture<ProtoflioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtoflioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProtoflioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
