import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelsforhubComponent } from './parcelsforhub.component';

describe('ParcelsforhubComponent', () => {
  let component: ParcelsforhubComponent;
  let fixture: ComponentFixture<ParcelsforhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelsforhubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcelsforhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
