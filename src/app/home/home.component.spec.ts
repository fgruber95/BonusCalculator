import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should show no Bonus', () => {
        component.input = { inputObj: { affiliation: 1, specialEmployee: false } };
        component.calculateBonus();
        expect(fixture.nativeElement.querySelector('p').innerText).toEqual('no Bonus');
    });


    it('should show 50%', () => {
        component.input = { inputObj: { affiliation: 2, specialEmployee: false } };
        component.calculateBonus();
        expect(fixture.nativeElement.querySelector('p').innerText).toEqual('50%');
    });


    it('should show 0.8', () => {
        component.input = { inputObj: { affiliation: 5, specialEmployee: false } };
        component.calculateBonus();
        expect(fixture.nativeElement.querySelector('p').innerText).toEqual(0.8);
    });


    it('should show 120%', () => {
        component.input = { inputObj: { affiliation: 11, specialEmployee: false } };
        component.calculateBonus();
        expect(fixture.nativeElement.querySelector('p').innerText).toEqual('120%');
    });


    //Test to check if Secretaries get double the bonus

    it('should show 100%', () => {
        component.input = { inputObj: { affiliation: 2, specialEmployee: true } };
        component.calculateBonus();
        expect(fixture.nativeElement.querySelector('p').innerText).toEqual('100%');
    });


    // Test to check if people including secretaries and postal workers get zero bonuses if working less that 2 years 
    it('should show 0%', () => {
        component.input = { inputObj: { affiliation: 1, specialEmployee: true } };
        component.calculateBonus();
        expect(fixture.nativeElement.querySelector('div').innerText).toEqual('no Bonus');
    });


    //Test to Check Plausibility test for postal workers and secretaries

    it('should show ERROR', () => {
        component.input = { inputObj: { affiliation: 77, specialEmployee: true } };
        component.calculateBonus();
        expect(() => fixture.detectChanges()).toThrowError('MyComponent: Affiliation must be under 76!.');
    });

    //Also for regular employees

    it('should show ERROR', () => {
        component.input = { inputObj: { affiliation: 77, specialEmployee: false } };
        component.calculateBonus();
        expect(() => fixture.detectChanges()).toThrowError('MyComponent: Affiliation must be under 76!.');
    });
});

