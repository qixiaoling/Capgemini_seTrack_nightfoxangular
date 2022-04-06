import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcerthallNewComponent } from './concerthall-new.component';

describe('ConcerthallNewComponent', () => {
  let component: ConcerthallNewComponent;
  let fixture: ComponentFixture<ConcerthallNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcerthallNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcerthallNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
