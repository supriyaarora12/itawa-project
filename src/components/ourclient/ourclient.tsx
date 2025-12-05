import Image from "next/image"
import image from "@/assets/agent/image.png"

export default function ClientReviews() {
  const reviews = [
    {
      id: 1,
      name: "Tom Smile",
      location: "Sydney",
      image: "/professional-man-headshot.png",
      review:
        "Lorem ipsum dolor sit amet adipiscing elit sed orci dictum sagittis libero vitae auctor elit. Praesent accumsan mauris eget tortor auctor efficitur nunc iaculis nunc.",
    },
    {
      id: 2,
      name: "Mike Smile",
      location: "Newyork City",
      image: "/professional-woman-headshot.png",
      review:
        "Lorem ipsum dolor sit amet adipiscing elit sed orci dictum sagittis libero vitae auctor elit. Praesent accumsan mauris eget tortor auctor efficitur nunc iaculis nunc.",
    },
    {
      id: 3,
      name: "John Doe",
      location: "Los Angeles",
      image: "/professional-man-headshot.png",
      review:
        "Lorem ipsum dolor sit amet adipiscing elit sed orci dictum sagittis libero vitae auctor elit. Praesent accumsan mauris eget tortor auctor efficitur nunc iaculis nunc.",
    },
  ]
  return (
    <section className="py-16 text-black px-4 md:py-20 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Client Reviews</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="border border-border rounded-lg overflow-hidden bg-card">
              {/* Profile Section */}
              <div className="flex flex-col items-center pt-8 pb-6">
                <Image
                    width={24}
                    height={24}
                  src={image}
                  alt={review.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-bold text-primary text-center">{review.name}</h3>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </div>
              {/* Review Section */}
              <div className="bg-red-50 px-6 py-6">
                <div className="text-4xl text-red-500 mb-3 leading-none"></div>
                <p className=" text-black text-center leading-relaxed">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}