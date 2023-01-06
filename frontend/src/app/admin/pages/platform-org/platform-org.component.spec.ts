import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformOrgComponent } from './platform-org.component';

describe('PlatformOrgComponent', () => {
  let component: PlatformOrgComponent;
  let fixture: ComponentFixture<PlatformOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
