import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-[1450px] mx-auto bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[url('/bg.svg')] bg-cover bg-center h-[70vh] flex items-center justify-center text-center text-white">
        <div className="">
          <h1 className="text-4xl font-bold mb-4">Crafting Comfort and Style for Your Home</h1>
          <p className="text-lg mb-6">Discover our passion for creating quality Blogs that fits your lifestyle.</p>
          <button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded text-white font-semibold">
            Learn More About Us
          </button>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          <Image src="/story.jpg" alt="Our Story" width={100} height={100} className="rounded-lg shadow-md w-[100%] h-[50rem] "></Image>
          <div>
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            <p className="text-lg text-gray-600">
              Founded in 2020, we are committed to creating timeless furniture pieces that combine
              elegance and comfort. Sustainability and quality craftsmanship are at the heart of our designs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Top Readers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div
                key={testimonial}
                className="bg-white p-6 shadow-lg rounded-lg"
              >
                <p className="text-gray-600 italic">
                  Absolutely love the quality and design! It fits perfectly in
                  my living room.
                </p>
                <div className="mt-4 flex items-center justify-center">
                  <Image
                    src="/story.jpg"
                    alt="Customer"
                    width={100}
                    height={100}
                    className="w-12 h-12 rounded-full"
                  >
                  </Image>
                  <div className="ml-4 text-left">
                    <h4 className="font-bold">Saad Junejo</h4>
                    <p className="text-gray-500 text-sm">Verified Reader</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

