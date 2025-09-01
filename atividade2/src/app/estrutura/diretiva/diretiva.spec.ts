import { ComponentFixture, TestBed } from '@angular/core/testing';

import { diretiva } from './diretiva';

describe('diretiva', () => {
  let component: diretiva;
  let fixture: ComponentFixture<diretiva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [diretiva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(diretiva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
