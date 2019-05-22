import { Pilot } from "./pilot";
import { Time } from "@angular/common";

export class Flight {
  crew: Pilot[];
  date: string;
  start_time: Time;
  duration: Time;
  aircraft: string;
  departure: string;
  arrival: string;
  flight_rule: FlightRule;
  takeoffs: number;
  crosscountry: boolean;

  constructor(pilot: Pilot) {
    this.date = new Date().toISOString().split('T')[0];
    this.crew = [pilot];
    this.start_time = {hours: 12, minutes: 30};
    this.duration = {hours: 0, minutes: 0};
    this.aircraft = pilot.aircrafts[0];
    this.flight_rule = 'VFR';
    this.takeoffs = 1
    this.crosscountry = false;
  }
}

export type FlightRule = 'VFR' | 'IFR';
export const flightRules = ['VFR', 'IFR'];