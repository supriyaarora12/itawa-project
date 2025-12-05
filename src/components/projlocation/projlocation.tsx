export default function ProjectLocation() {
  const institutions = [
    { name: "International Airport", distance: "6.0 Km" },
    { name: "Railway Station", distance: "8.0 Km" },
    { name: "ABC Store", distance: "2.5 Km" },
    { name: "Stanford University", distance: "3.8 Km" },
    { name: "North Carolina State University", distance: "4.7 Km" },
    { name: "Rocky Cinema", distance: "2.5 Km" },
    { name: "ABC Hospital", distance: "3.0 Km" },
    { name: "Tommy GYM", distance: "4.3 Km" },
    { name: "ABC Store", distance: "2.5 Km" },
  ]
  return (
    <section className="py-16 text-(--color-foreground) px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Project Location</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="rounded-lg overflow-hidden shadow-md border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8503149028447!2d-74.00601342346887!3d40.71282507138054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a20e6c2b9cd%3A0x3f5da90ed0dbb943!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Project Location Map"
            />
            <div className="p-4 border-t border-border">
              <h3 className="font-semibold text-foreground mb-1">New York</h3>
              <p className="text-sm text-muted-foreground mb-3">New York, USA</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Directions
              </a>
              <span className="text-muted-foreground text-sm mx-2">•</span>
              <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View larger map
              </a>
            </div>
          </div>
          {/* Distances Section */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">Distances from Major Institutions:</h2>
            <div className="space-y-4">
              {institutions.map((institution, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-border last:border-b-0"
                >
                  <span className="text-foreground">{institution.name}</span>
                  <span className="font-semibold text-foreground">{institution.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}