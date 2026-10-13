"use client";

import { useState } from "react";

const services = [
  "Prescription consultation",
  "Vaccination",
  "Medication review",
  "Health check",
];

const times = ["Morning", "Afternoon", "Evening"];

const inputClass =
  "mt-1 block w-full rounded-lg border border-brand-navy/25 bg-white px-4 py-3 text-base text-ink focus:border-brand-blue";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // TODO: send `data` to your own API route or booking service here,
    // e.g. await fetch("/api/book", { method: "POST", body: JSON.stringify(data) })
    setSubmitted(data);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-lg" role="status">
        <h3 className="text-2xl font-bold text-brand-navy">
          Thanks, {submitted.name}
        </h3>
        <p className="mt-3 leading-relaxed text-ink/80">
          We've got your request for a {submitted.service.toLowerCase()} on{" "}
          {submitted.date} ({submitted.time.toLowerCase()}). We'll call{" "}
          {submitted.phone} to confirm your time.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(null)}
          className="mt-6 rounded-full border border-brand-blue px-6 py-2.5 font-semibold text-brand-blue transition-colors hover:bg-mist"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-6 shadow-lg sm:p-8"
    >
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-brand-navy">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-semibold text-brand-navy">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="text-sm font-semibold text-brand-navy"
        >
          What do you need?
        </label>
        <select id="service" name="service" className={inputClass}>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="date"
            className="text-sm font-semibold text-brand-navy"
          >
            Preferred date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="time"
            className="text-sm font-semibold text-brand-navy"
          >
            Preferred time
          </label>
          <select id="time" name="time" className={inputClass}>
            {times.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-brand-blue px-7 py-3 font-semibold text-white transition-colors hover:bg-brand-navy"
      >
        Request appointment
      </button>
    </form>
  );
}
