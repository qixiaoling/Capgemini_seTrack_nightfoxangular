import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcerthallDetailComponent } from './concerthall-detail.component';

describe('ConcerthallDetailComponent', () => {
  let component: ConcerthallDetailComponent;
  let fixture: ComponentFixture<ConcerthallDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcerthallDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcerthallDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
