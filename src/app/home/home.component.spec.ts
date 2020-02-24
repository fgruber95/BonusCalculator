import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HomeModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

    it('should show no Bonus', () => {
        component.affiliation = 1;
        component.specialEmployee = false;
        component.calculateBonus();
        expect(component.bonus).toEqual('no Bonus');
    });

    
    it('should show 50%', () => {
        component.affiliation = 3;
        component.specialEmployee = false;
        component.calculateBonus();
        expect(component.bonus).toEqual('50%');
    });


    it('should show 80%', () => {
        component.affiliation = 5;
        component.specialEmployee = false;
        component.calculateBonus();
        expect(component.bonus).toEqual('80%');
    });


    it('should show 120%', () => {
        component.affiliation = 11;
        component.specialEmployee = false;
        component.calculateBonus();
        expect(component.bonus).toEqual('120%');
    });


    //Test to check if postal workers or secretaries get double the bonus

    it('should show 100%', () => {
        component.affiliation = 3;
        component.specialEmployee = true;
        component.calculateBonus();
        expect(component.bonus).toEqual('100%');
    });


    // Test to check if people including secretaries and postal workers get zero bonuses if working less that 2 years 
    it('should show no Bonus', () => {
        component.affiliation = 1;
        component.specialEmployee = true;
        component.calculateBonus();
        expect(component.bonus).toEqual('no Bonus');
    });


    //Test to Check Plausibility test for postal workers and secretaries

    it('should show error message', () => {
        component.affiliation = 77;
        component.specialEmployee = true;
        component.calculateBonus();
        expect(component.bonus).toEqual('Affiliation must be under 76!');
    });

    //Test to Check Plausibility test for regular employees

    it('should show error message', () => {
        component.affiliation = 77;
        component.specialEmployee = false;
        component.calculateBonus();
        expect(component.bonus).toEqual('Affiliation must be under 76!');
    });
    
});

