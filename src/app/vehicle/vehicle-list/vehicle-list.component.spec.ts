/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VehicleListComponent } from './vehicle-list.component';
import { VehicleService } from './vehicle.service';
import { HttpClientModule } from '@angular/common/http';
import { Vehicle } from '../vehicle';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [VehicleListComponent],
      providers:[VehicleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const movie = new Vehicle(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.image.url(),
      );
      component.vehicles.push(movie);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have four tr elements: one head and three bodies', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
    expect(debug.queryAll(By.css('tr.head'))).toHaveSize(1)
    expect(debug.queryAll(By.css('tr.body'))).toHaveSize(3)
  });

  it('should have td tag with the vehicle.marca, vehicle.linea and vehicle.modelo', () => {
    debug.queryAll(By.css('td.brand')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.vehicles[i].marca)
    });
    debug.queryAll(By.css('td.line')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.vehicles[i].linea)
    });
    debug.queryAll(By.css('td.model')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.vehicles[i].modelo)
    });
  });
});
