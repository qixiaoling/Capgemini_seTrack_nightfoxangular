import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcerthallUpdateComponent } from './concerthall-update.component';

describe('ConcerthallUpdateComponent', () => {
  let component: ConcerthallUpdateComponent;
  let fixture: ComponentFixture<ConcerthallUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcerthallUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcerthallUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
