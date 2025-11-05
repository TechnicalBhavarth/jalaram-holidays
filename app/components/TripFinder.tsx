import React, { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/Slider";
import { Button } from "@/components/ui/Button";
// For shadcn/ui - replace these with your actual imports as needed

// Utility: Month names
const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const travellerTypes = ["Couple", "Family", "Friends", "Senior"];
const travelThemes = [
  "Beach", "Mountain", "City", "Culture", "Pilgrimage", "Adventure"
];

// Simulated dynamic data import
// In production: import destinations from '@/data/destinations.json';
const fetchDestinations = async () => {
  // TODO: Replace with dynamic import for '@/data/destinations.json'
  return [
    {
      id: 1,
      name: "Goa Beach Retreat",
      theme: "Beach",
      month: [11, 12, 1, 2],
      budget: 25000,
      traveller: ["Couple", "Friends"],
      image: "/beach_goa.jpg",
      description: "Enjoy Goa's sun, sand, and premium resorts in winter.",
      whatsapp: "https://wa.me/919012345678?text=I'm%20interested%20in%20Goa%20Beach%20Retreat",
    },
    {
      id: 2,
      name: "Manali Snow Escape",
      theme: "Mountain",
      month: [12, 1, 2, 3],
      budget: 18000,
      traveller: ["Family", "Friends", "Couple"],
      image: "/mountain_manali.jpg",
      description: "Witness snow in Manali - perfect for adventure and family holidays.",
      whatsapp: "https://wa.me/919012345678?text=I'm%20interested%20in%20Manali%20Snow%20Escape",
    },
    {
      id: 3,
      name: "Varanasi Pilgrimage Tour",
      theme: "Pilgrimage",
      month: [10, 11, 12, 1, 2],
      budget: 22000,
      traveller: ["Senior", "Family"],
      image: "/pilgrimage_varanasi.jpg",
      description: "Spiritual journey through Varanasi - temples, rituals, and ghats.",
      whatsapp: "https://wa.me/919012345678?text=I'm%20interested%20in%20Varanasi%20Pilgrimage%20Tour",
    },
    // Add more destinations as needed
  ];
};

const DestinationCard = ({ dest }: { dest: any }) => (
  <div className="rounded-xl shadow-lg bg-white dark:bg-zinc-900 p-6 flex flex-col gap-3 w-full md:w-72">
    <img
      src={dest.image}
      alt={dest.name}
      className="rounded-lg object-cover h-32 w-full mb-2"
    />
    <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100">{dest.name}</h3>
    <p className="text-gray-500 mb-2">{dest.description}</p>
    <div className="flex flex-wrap gap-2 text-xs mb-2">
      <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">{dest.theme}</span>
      <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">Budget: ₹{dest.budget}</span>
      <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">Recommended for: {dest.traveller.join(", ")}</span>
      <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">{dest.month.map((m:number)=>months[m-1]).join(", ")}</span>
    </div>
    <a
      href={dest.whatsapp}
      target="_blank"
      rel="noopener"
      className="mt-auto"
    >
      <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full">
        WhatsApp Inquiry
      </Button>
    </a>
  </div>
);

const TripFinder: React.FC = () => {
  const [allDestinations, setDestinations] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  // Filters
  const [month, setMonth] = useState<number | null>(null);
  const [budget, setBudget] = useState<number>(40000);
  const [traveller, setTraveller] = useState<string>("");
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    fetchDestinations().then((data) => {
      setDestinations(data);
      setFiltered(data);
    });
  }, []);

  useEffect(() => {
    let results = allDestinations.filter((d) => {
      if (month && !d.month.includes(month)) return false;
      if (budget && d.budget > budget) return false;
      if (traveller && !d.traveller.includes(traveller)) return false;
      if (theme && d.theme !== theme) return false;
      return true;
    });
    setFiltered(results);
  }, [month, budget, traveller, theme, allDestinations]);

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 w-full mx-auto max-w-6xl flex flex-col gap-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-6 md:gap-8 justify-between items-center mb-8">
        {/* Month Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">Month</label>
          <select
            className="rounded-lg border-zinc-300 dark:border-zinc-700 px-4 py-2 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
            value={month ?? ""}
            onChange={e => setMonth(e.target.value ? Number(e.target.value) : null)}
          >
            <option value="">Any</option>
            {months.map((m, idx) => (
              <option key={idx} value={idx+1}>{m}</option>
            ))}
          </select>
        </div>
        {/* Budget Slider */}
        <div className="flex flex-col gap-2 md:w-1/5">
          <label className="font-medium">Budget (Max)</label>
          <input
            type="range"
            min={10000}
            max={100000}
            step={1000}
            value={budget}
            className="w-full accent-green-500"
            onChange={e => setBudget(Number(e.target.value))}
          />
          <span className="text-xs mt-1">≤ ₹{budget}</span>
        </div>
        {/* Traveller Type */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">Traveller Type</label>
          <select
            className="rounded-lg border-zinc-300 dark:border-zinc-700 px-4 py-2 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
            value={traveller}
            onChange={e => setTraveller(e.target.value)}
          >
            <option value="">Any</option>
            {travellerTypes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        {/* Travel Theme */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">Theme</label>
          <select
            className="rounded-lg border-zinc-300 dark:border-zinc-700 px-4 py-2 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
            value={theme}
            onChange={e => setTheme(e.target.value)}
          >
            <option value="">Any</option>
            {travelThemes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      {/* Destinations Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length > 0 ? filtered.map(dest => (
          <DestinationCard key={dest.id} dest={dest} />
        )) : (
          <div className="col-span-full text-center text-zinc-500 py-12">
            No destinations found matching your criteria.<br />Try updating filters above!
          </div>
        )}
      </div>
      {/* Seasonal and Recommended */}
      <div className="mt-14">
        <h4 className="text-xl font-bold mb-3">Seasonal Suggestions &amp; Recommendations</h4>
        <div className="w-full flex flex-wrap gap-4">
          {allDestinations
            .filter(dest => month ? dest.month.includes(month) : true)
            .slice(0, 3)
            .map(dest => (
            <DestinationCard key={dest.id+"rec"} dest={dest} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripFinder;
