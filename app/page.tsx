import { Button } from '@/components/ui/Button'
import TripFinder from '@/components/TripFinder'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to Jalaram Holidays
        </h1>
        <p className="text-lg mb-6">
          Your trusted travel partner for unforgettable journeys.
        </p>
        
        <Button>Find Trips</Button>
        
        {/* Trip Finder Section */}
        <section className="mt-16 w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Explore Our Destinations</h2>
            <p className="text-gray-600">Browse through our curated collection of travel experiences</p>
          </div>
          <TripFinder />
        </section>
        
        {/* TODO: Add Hero section with call-to-action */}
        {/* TODO: Add Featured Destinations section using Card components */}
        {/* TODO: Add Search/Filter functionality for destinations */}
        {/* TODO: Add Testimonials section */}
        {/* TODO: Add Newsletter signup form */}
        {/* TODO: Add animations with Framer Motion */}
      </div>
    </main>
  )
}
