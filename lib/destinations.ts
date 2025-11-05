// Placeholder for destinations data
// This file will contain destination-related types and data fetching logic

export interface Destination {
  id: string;
  name: string;
  description?: string;
  image?: string;
}

const destinations: Destination[] = [];

export default destinations;
