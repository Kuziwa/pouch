import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyptolandingComponent } from './cyptolanding.component';

describe('CyptolandingComponent', () => {
  let component: CyptolandingComponent;
  let fixture: ComponentFixture<CyptolandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyptolandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyptolandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
