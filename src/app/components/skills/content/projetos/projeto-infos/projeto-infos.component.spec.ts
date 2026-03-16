import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoInfosComponent } from './projeto-infos.component';

describe('ProjetoInfosComponent', () => {
  let component: ProjetoInfosComponent;
  let fixture: ComponentFixture<ProjetoInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetoInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
