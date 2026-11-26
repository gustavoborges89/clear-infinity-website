
"use client";

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const message = [
      "Hello Clear Infinity! I'd like a free quote.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      `Message: ${data.get("message") || "Not provided"}`
    ].join("\n");

    const phone = "+17747771123";
    const url = `sms:${phone}?body=${encodeURIComponent(message)}`;

    window.location.href = url;
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-10">
      <h3 className="text-2xl font-bold text-slate-900">
        Request Your Free Quote
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        Tell us a little about your cleaning needs.
        We will be happy to help!
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Your Name
          </label>
          <input
            name="name"
            required
            placeholder="Enter your name"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="Your phone number"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Service Needed
          </label>
          <select
            name="service"
            required
            defaultValue=""
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none focus:border-blue-500"
          >
            <option value="" disabled>Select a service</option>
            <option>Upholstery Cleaning</option>
            <option>Carpet Cleaning</option>
            <option>Mattress Cleaning</option>
            <option>Commercial Cleaning</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Additional Details
          </label>
          <textarea
            name="message"
            rows={3}
            placeholder="Tell us more about your cleaning needs..."
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Request My Free Quote →
        </button>
      </form>
    </div>
  );
}
