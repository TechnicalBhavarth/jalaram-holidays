// data/destinations.ts
export interface Destination {
  id: string;
  name: string;
  image: string;
  budget: string;
  description: string;
  highlights: string[];
  duration: string;
}

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Goa Beach Paradise",
    image: "/images/goa.jpg",
    budget: "budget",
    description: "Experience the stunning beaches and vibrant nightlife of Goa",
    highlights: ["Beach Activities", "Water Sports", "Night Markets", "Portuguese Architecture"],
    duration: "4-5 days"
  },
  {
    id: "2",
    name: "Rajasthan Heritage Tour",
    image: "/images/rajasthan.jpg",
    budget: "mid-range",
    description: "Explore the royal palaces and desert landscapes of Rajasthan",
    highlights: ["Jaipur City Palace", "Udaipur Lake Palace", "Jaisalmer Fort", "Camel Safari"],
    duration: "7-8 days"
  },
  {
    id: "3",
    name: "Kerala Backwaters Retreat",
    image: "/images/kerala.jpg",
    budget: "mid-range",
    description: "Relax in the serene backwaters and lush greenery of God's Own Country",
    highlights: ["Houseboat Cruise", "Ayurvedic Spa", "Tea Plantations", "Wildlife Safari"],
    duration: "5-6 days"
  },
  {
    id: "4",
    name: "Ladakh Adventure",
    image: "/images/ladakh.jpg",
    budget: "luxury",
    description: "Discover the breathtaking landscapes and Buddhist culture of Ladakh",
    highlights: ["Pangong Lake", "Nubra Valley", "Monasteries", "Mountain Biking"],
    duration: "7-8 days"
  },
  {
    id: "5",
    name: "Himachal Hill Stations",
    image: "/images/himachal.jpg",
    budget: "budget",
    description: "Experience the scenic beauty of Himalayan hill stations",
    highlights: ["Shimla Mall Road", "Manali Adventures", "Dharamshala Monasteries", "Trekking"],
    duration: "5-6 days"
  },
  {
    id: "6",
    name: "Andaman Islands",
    image: "/images/andaman.jpg",
    budget: "luxury",
    description: "Dive into crystal clear waters and pristine beaches",
    highlights: ["Scuba Diving", "Radhanagar Beach", "Cellular Jail", "Island Hopping"],
    duration: "6-7 days"
  }
];
