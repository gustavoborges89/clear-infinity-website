import ContactForm from "./ContactForm";
import BeforeAfterSlider from "./BeforeAfterSlider";



export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <header className="relative z-20 w-full border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

          <a href="#home" className="flex items-center">
            <img
              src="/clear-infinity-logo.webp"
              alt="Clear Infinity Carpet & Upholstery Cleaning"
              className="h-auto w-60 object-contain"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#home" className="hover:text-blue-300">Home</a>
            <a href="#services" className="hover:text-blue-300">Services</a>
            <a href="#about" className="hover:text-blue-300">About Us</a>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Get a Free Quote
          </a>

        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[720px] items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(7,20,43,0.94) 0%, rgba(7,20,43,0.72) 48%, rgba(7,20,43,0.18) 100%), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85')"
        }}
      >

        <div className="mx-auto w-full max-w-7xl px-6 pb-12 pt-40">

          <div className="max-w-2xl">

            <div className="mb-7 inline-flex rounded-full border border-blue-300/40 bg-blue-400/10 px-5 py-2 text-xs font-semibold tracking-[2px] text-blue-200">
              PREMIUM CARPET CLEANING SERVICES IN ORLANDO
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
              A Cleaner Home.
              <br />
              <span className="text-blue-400">
                A Fresher Life.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200">
              Experience the difference of professional carpet
              and upholstery cleaning. We bring freshness,
              comfort and care back to your space.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="rounded-full bg-blue-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-600"
              >
                Request Your Free Quote →
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/50 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Explore Our Services
              </a>

            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-sm text-white">
              <div>
                <strong className="block text-xl text-blue-400">Professional</strong>
                <span className="text-slate-300">Cleaning Care</span>
              </div>
              <div>
                <strong className="block text-xl text-blue-400">Residential</strong>
                <span className="text-slate-300">& Commercial</span>
              </div>
              <div>
                <strong className="block text-xl text-blue-400">Orlando, FL</strong>
                <span className="text-slate-300">Local Service</span>
              </div>
            </div>

          </div>
        </div>

      </section>


      {/* SERVICES SECTION */}
      <section id="services" className="bg-slate-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">
            <p className="font-semibold tracking-[3px] text-blue-600">
              OUR SERVICES
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Professional Care for Every Space
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-500">
              From your favorite sofa to your entire commercial space,
              we deliver professional cleaning solutions you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Upholstery */}
            <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div
                className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900')" }}
              />
              <div className="p-7">
                <h3 className="text-xl font-bold">Upholstery Cleaning</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Professional cleaning for sofas, chairs and upholstered furniture.
                </p>
                <a href="#contact" className="mt-5 inline-block font-semibold text-blue-600">
                  Request a Quote →
                </a>
              </div>
            </div>

            {/* Carpet */}
            <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div
                className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900')" }}
              />
              <div className="p-7">
                <h3 className="text-xl font-bold">Carpet Cleaning</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Deep carpet cleaning to remove accumulated dirt and refresh your space.
                </p>
                <a href="#contact" className="mt-5 inline-block font-semibold text-blue-600">
                  Request a Quote →
                </a>
              </div>
            </div>

            {/* Mattress */}
            <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div
                className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900')" }}
              />
              <div className="p-7">
                <h3 className="text-xl font-bold">Mattress Cleaning</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Specialized mattress cleaning for a fresher and more comfortable bedroom.
                </p>
                <a href="#contact" className="mt-5 inline-block font-semibold text-blue-600">
                  Request a Quote →
                </a>
              </div>
            </div>


            {/* Commercial */}
            <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div
                className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900')" }}
              />
              <div className="p-7">
                <h3 className="text-xl font-bold">Commercial Cleaning</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Professional cleaning solutions for offices and commercial properties.
                </p>
                <a href="#contact" className="mt-5 inline-block font-semibold text-blue-600">
                  Request a Quote →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="bg-slate-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="font-semibold tracking-[3px] text-blue-600">
              THE CLEAR INFINITY DIFFERENCE
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Why Choose Clear Infinity?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-500">
              We combine professional care, attention to detail
              and personalized cleaning solutions for every space.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-9 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-3xl">
                ✨
              </div>
              <h3 className="mt-7 text-xl font-bold text-slate-900">
                Professional Cleaning Care
              </h3>
              <p className="mt-4 leading-7 text-slate-500">
                Specialized cleaning for carpets, upholstery
                and mattresses with attention to every detail.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-9 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-3xl">
                ✓
              </div>
              <h3 className="mt-7 text-xl font-bold text-slate-900">
                Attention to Detail
              </h3>
              <p className="mt-4 leading-7 text-slate-500">
                We carefully consider each surface and its
                cleaning needs to provide appropriate care.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-9 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-3xl">
                🏠
              </div>
              <h3 className="mt-7 text-xl font-bold text-slate-900">
                Residential & Commercial
              </h3>
              <p className="mt-4 leading-7 text-slate-500">
                Flexible cleaning solutions for residential
                properties and commercial environments.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* BEFORE AND AFTER GALLERY */}
      <section id="gallery" className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="font-semibold tracking-[3px] text-blue-600">
              OUR WORK IN ACTION
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Real Results. Real Difference.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-500">
              See how professional cleaning can transform
              your carpets, upholstery and mattresses.
            </p>
          </div>


          <div className="mt-16 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">

            {/* PROJECT 1 */}
            <div className="h-full min-w-0 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <BeforeAfterSlider
                before="/gallery/01-chair-before.webp"
                after="/gallery/02-chair-after.webp"
                alt="Dining chair cleaning"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Dining Chair Cleaning
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Bringing freshness back to upholstered dining chairs.
                </p>
              </div>
            </div>

            {/* PROJECT 2 */}
            <div className="h-full min-w-0 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <BeforeAfterSlider
                before="/gallery/03-mattress-before.webp"
                after="/gallery/04-mattress-after.webp"
                alt="Mattress cleaning"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Mattress Cleaning
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Professional treatment for visible mattress stains.
                </p>
              </div>
            </div>

            {/* PROJECT 3 */}
            <div className="h-full min-w-0 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <BeforeAfterSlider
                before="/gallery/07-upholstered-chair-before.webp"
                after="/gallery/08-upholstered-chair-after.webp"
                alt="Upholstery cleaning"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Upholstery Cleaning
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Removing visible stains and refreshing upholstery.
                </p>
              </div>
            </div>

            {/* PROJECT 4 */}
            <div className="h-full min-w-0 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <BeforeAfterSlider
                before="/gallery/09-bedroom-carpet-before.webp"
                after="/gallery/10-bedroom-carpet-after.webp"
                alt="Bedroom carpet cleaning"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Bedroom Carpet Cleaning
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Professional carpet cleaning with visible grooming lines.
                </p>
              </div>
            </div>

            {/* PROJECT 5 */}
            <div className="h-full min-w-0 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <BeforeAfterSlider
                before="/gallery/11-bedroom-carpet-before.webp"
                after="/gallery/12-bedroom-carpet-after.webp"
                alt="Residential carpet cleaning"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Residential Carpet Cleaning
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Restoring freshness and a beautiful carpet finish.
                </p>
              </div>
            </div>

            {/* PROJECT 6 */}
            <div className="h-full min-w-0 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <BeforeAfterSlider
                before="/gallery/13-bedroom-carpet-room-before.webp"
                after="/gallery/14-bedroom-carpet-room-after.webp"
                alt="Bedroom carpet cleaning project"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Bedroom Carpet Cleaning
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  A refreshed bedroom with professionally cleaned carpets.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <a href="#contact"
              className="inline-block rounded-full bg-blue-600 px-9 py-4 font-semibold text-white transition hover:bg-blue-700">
              Get Your Free Quote →
            </a>
          </div>

        </div>
      </section>

   {/* CUSTOMER REVIEWS */}
      
      
      {/* CUSTOMER REVIEWS */}
      <section id="reviews" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Customer Reviews
            </p>

            <h2 className="mb-5 text-3xl font-bold text-slate-900 md:text-4xl">
              Real Customers. Real Experiences.
            </h2>

            <p className="mx-auto max-w-2xl text-slate-600">
              We are proud of the trust our customers place in us.
              Here is what they say about their experience with Clear Infinity.
            </p>

            <div className="mt-5">
              <span className="text-xl font-bold text-slate-900">5.0</span>
              <span className="ml-2 text-orange-400">★★★★★</span>
              <p className="mt-1 text-sm text-slate-500">
                44 reviews on Thumbtack
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                name: "Yun X.",
                date: "April 23, 2026",
                service: "Carpet Cleaning",
                review: "I recently had Clear Infinity deep clean the carpets in my home, and I’m very impressed with their work. The carpets had significant stains and a strong dog odor left by previous tenants, and they were able to completely remove both."
              },
              {
                name: "Kristin J.",
                date: "June 29, 2026",
                service: "Carpet Cleaning",
                review: "Gustavo provided services to me and my family for carpet cleaning for our home. He was very responsive, professional and accommodating and we were very pleased with his work."
              },
              {
                name: "Susan F.",
                date: "January 22, 2026",
                service: "Carpet Cleaning",
                review: "Gustavo showed up when promised & cleaned 4 rooms of my carpet beautifully! He uses a very specialized & efficient technique which made the job go smoother than expected & my home smells wonderful!"
              },
              {
                name: "Luana M.",
                date: "July 7, 2025",
                service: "Upholstery Cleaning",
                review: "Awesome job! My couch looks and smells amazing. Super friendly and professional. Will definitely use again!"
              },
              {
                name: "Yanhui L.",
                date: "July 11, 2025",
                service: "Carpet Cleaning",
                review: "Clear Infinity saved my carpet from being replaced. My carpet was deeply soiled by my tenants and I was seriously considering replacing it. The outcome exceeded my expectations."
              },
              {
                name: "Ethan L.",
                date: "January 26, 2025",
                service: "Carpet & Upholstery Cleaning",
                review: "I would highly recommend this company to anyone who needs a deep clean of their carpets or couches. They had excellent communication from beginning to end. The end result exceeded our expectations and the house looks and feels amazing."
              }
            ].map((item) => (
              <div
                key={item.name}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {item.service}
                  </span>
                  <span className="text-xs text-slate-400">
                    Thumbtack
                  </span>
                </div>

                <p className="flex-1 text-base leading-7 text-slate-700">
                  “{item.review}”
                </p>

                <div className="mt-7 border-t border-slate-100 pt-5">
                  <p className="font-bold text-slate-900">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}

          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.thumbtack.com/profile/services/532477508392230918/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Read More Reviews on Thumbtack →
            </a>
          </div>

        </div>
      </section>


      {/* ABOUT US SECTION */}
      <section id="about" className="bg-white px-6 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85"
              alt="Beautiful professionally maintained living room"
              className="h-[480px] w-full rounded-3xl object-cover shadow-xl"
            />

           
          </div>

          {/* CONTENT */}
          <div className="py-6">

            <p className="font-semibold tracking-[3px] text-blue-600">
              ABOUT CLEAR INFINITY
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              More Than Cleaning.
              <span className="block text-blue-600">
                It's About Quality.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-slate-600">
              At Clear Infinity, we believe that a clean environment
              makes a difference in the way you live and work.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              We provide professional cleaning solutions for carpets,
              upholstery, mattresses and commercial spaces, with
              attention to detail and a commitment to quality.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our goal is simple: deliver reliable service,
              exceptional care and a fresher environment for every client.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-6">

              <div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-blue-600">✓</span>
                  <strong className="text-slate-900">
                    Quality Care
                  </strong>
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  Attention to every detail.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-blue-600">✓</span>
                  <strong className="text-slate-900">
                    Professional Service
                  </strong>
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  Care for every space.
                </p>
              </div>

            </div>

            <a
              href="#contact"
              className="mt-10 inline-block rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Get to Know Our Services →
            </a>

          </div>

        </div>





      </section>


      {/* CONTACT SECTION */}
     
      {/* SOCIAL MEDIA SECTION */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="font-semibold tracking-[3px] text-blue-600">
              STAY CONNECTED
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Follow Clear Infinity
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-500">
              Follow our journey, discover cleaning transformations
              and stay connected with our latest work.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">

            <a
              href="https://www.instagram.com/clear_infinity_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Clear Infinity on Instagram"
              className="group rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-50 text-pink-600 transition group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
                </svg>
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Instagram
              </h3>

              <p className="mt-2 text-slate-500">
                @clear_infinity_
              </p>

              <span className="mt-6 inline-block font-semibold text-blue-600">
                Follow Us →
              </span>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61561062815183"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Clear Infinity on Facebook"
              className="group rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.6V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.2v3h2.8v8h3.5Z" />
                </svg>
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Facebook
              </h3>

              <p className="mt-2 text-slate-500">
                Clear Infinity
              </p>

              <span className="mt-6 inline-block font-semibold text-blue-600">
                Visit Our Page →
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-slate-950 px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Contact Clear Infinity
            </p>

            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Ready for a Cleaner
              <span className="block text-blue-400">
                Home or Business?
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-slate-300">
              Let us take care of your carpets, upholstery and more.
              Contact us today for a free quote and experience
              professional cleaning with attention to every detail.
            </p>

            <div className="mt-9 space-y-5 text-slate-200">
              <p>✓ Professional Cleaning Services</p>
              <p>✓ Residential & Commercial</p>
              <p>✓ Friendly and Reliable Service</p>
            </div>

            <a
              href="https://wa.me/17747771123?text=Hello%20Clear%20Infinity!%20I%27d%20like%20a%20free%20cleaning%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-fit rounded-full bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
            >
              Chat on WhatsApp →
            </a>
          </div>

          {/* RIGHT FORM */}
          <ContactForm />

        </div>
      </section>


      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Clear Infinity. All rights reserved.
      </footer>

    </main>
  );
}
