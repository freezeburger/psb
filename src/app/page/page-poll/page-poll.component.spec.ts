import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePollComponent } from './page-poll.component';

describe('PagePollComponent', () => {
  let component: PagePollComponent;
  let fixture: ComponentFixture<PagePollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
