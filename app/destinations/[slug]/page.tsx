export default function DestinationPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Destination: {params.slug}</h1>
      <p>This is a placeholder page for destination details.</p>
    </div>
  );
}
