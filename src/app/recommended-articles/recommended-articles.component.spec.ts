import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedArticlesComponent } from './recommended-articles.component';

describe('RecommendedArticlesComponent', () => {
  let component: RecommendedArticlesComponent;
  let fixture: ComponentFixture<RecommendedArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
