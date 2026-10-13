import Image from "next/image";
import Navbar from "./components/Navbar";

const heroCards = [
  {
    title: "Vaccinations and health checks",
    text: "Flu shots, travel vaccines and blood pressure checks, done in a private room.",
    image: "/vaccination.jpg",
    link: "https://www.getvaccinated.gov.bc.ca/s/bookavaccine",
  },
  {
    title: "Talk to a physician online",
    text: "We partnered with Avee to get you a doctor quickly.",
    image: "/Avee.jpg",
    link: "https://booking.avee.health/NRY22",
  },

];

const services = [
  {
    title: "Prescription refills",
    text: "By phone (and very soon, online). We text you the moment it's ready to pick up.",
  },
  {
    title: "Medication reviews",
    text: "Sit down with a pharmacist and go over everything you take, one-on-one.",
  },
  {
    title: "Vaccinations",
    text: "Flu, shingles and travel vaccines. Walk-ins welcome for flu shots.",
  },
  {
    title: "Pharmacist run clinics",
    text: "A pharmacist will customize a clinic to your need.",
  },
  {
    title: "Weekly blister packs",
    text: "Your doses sorted by day and time, so nothing gets missed.",
  },
  {
    title: "Minor ailment advice",
    text: "Coughs, rashes, aches. Ask us first and skip the waiting room.",
  },
];

const hours = [
  { day: "Monday to Friday", time: "9:00 am – 6:00 pm" },
  { day: "Saturday", time: "10:00 am – 3:00 pm" },
  { day: "Sunday", time: "Closed" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Home */}
        <section id="home" className="scroll-mt-16 bg-brand-navy text-white">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-6">
            <h1 className="max-w-6xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Yorkson Pharmacy: ...SLOGAN HERE...
            </h1>
            <p className="mt-2 max-w-xl text-lg leading-relaxed text-white/80">
              Yorkson Pharmacy is where you get the answers to your health questions. ...CONTENT...
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {heroCards.map(({ title, text, image, }) => (
                <article
                  key={title}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white text-ink shadow-xl"
                >
                  <div className="aspect-[5/3] w-full bg-mist">
                    <Image src={image} width={1000} height={1000} alt=""/>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-2xl font-bold text-brand-navy">
                      {title}
                    </h2>
                    <p className="mt-2 flex-1 leading-relaxed text-ink/75">
                      {text}
                    </p>
                    <a
                      href="#booking"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-blue px-7 py-3 font-semibold text-white transition-colors hover:bg-brand-navy sm:w-auto sm:self-start"
                    >
                      Book an appointment
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-16 bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Services for you:
            </h2>
            <div className="mt-12 grid gap-x-12 md:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="border-t border-brand-blue/25 py-6"
                >
                  <h3 className="text-xl font-semibold text-brand-blue">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-md leading-relaxed text-ink/75">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-16 bg-mist">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Serving every patient in our community.
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                We started Yorkson because...
              </p>
              <p>
                We work with your doctor...
              </p>
            </div>
          </div>
        </section>

        {/* Booking */}
        {/* <section id="booking" className="scroll-mt-16 bg-brand-sky">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                Book an appointment
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-brand-navy/85">
                Tell us what you need and when you're free. We'll call to
                confirm your time, usually within one business day.
              </p>
            </div>
            <BookingForm />
          </div>
        </section> */}

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                Visit or get in touch
              </h2>
              <address className="mt-6 space-y-1 text-lg not-italic text-ink/80">
                <p>#140 - 20144 86 Avenue</p>
                <p>Langley, BC V2Y 3W6</p>
                <p>Fax: (778) 366-3559</p>
              </address>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+17783663552"
                  className="rounded-full bg-brand-blue px-7 py-3 text-center font-semibold text-white transition-colors hover:bg-brand-navy"
                >
                  Call (778) 366-3552
                </a>
                <a
                  href="mailto:yorksoninfo@gmail.com"
                  className="rounded-full border border-brand-blue/40 px-7 py-3 text-center font-semibold text-brand-blue transition-colors hover:bg-mist"
                >
                  Send an email
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy">
                Opening hours
              </h3>
              <ul className="mt-4">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between gap-4 border-t border-brand-blue/25 py-3"
                  >
                    <span>{h.day}</span>
                    <span className="font-semibold">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-navy py-10 text-center text-sm text-white/75">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5">
          <Image
            src="/yorkson-logo.png"
            alt="Yorkson Pharmacy"
            width={1139}
            height={300}
            className="h-10 w-auto"
          />
          <p>©2026 Yorkson Pharmacy. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
