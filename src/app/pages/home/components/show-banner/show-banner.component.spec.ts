import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowBannerComponent} from './show-banner.component';

describe('ShowBannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<ShowBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
