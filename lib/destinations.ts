// lib/destinations.ts
import data from "@/data/destinations.json";

export type Destination = {
  id: string;
  name: string;
  country?: string;
  region?: string;
  type?: string;
  tags?: string[];
  bestMonths?: number[];
  minNights?: number;
  avgBudgetPerPerson?: number;
  visa?: string;
  fromHub?: string;
  estFlightTimeHrs?: number; // legacy if used elsewhere
  flightTime?: number;        // NEW: in hours, numeric
  highlight?: string;
  hotels?: any[];
  activities?: any[];
  [key: string]: any;
};

export const allDestinations = data as Destination[];
