import Image from "next/image";
import Navbar from "./components/Navbar";

const heroCards = [
  {
    title: "Vaccinations and health checks",
    text: "Flu shots and other vaccinations in a private room.",
    image: "/vaccination.jpg",
    link: "https://www.getvaccinated.gov.bc.ca/s/bookavaccine",
    width: 1000,
    height: 1000,
  },
  {
    title: "Talk to a physician online",
    text: "We partnered with Avee to get you a doctor quickly.",
    image: "/Avee.jpg",
    link: "https://booking.avee.health/NRY22",
    width: 1000,
    height: 1000,
  },

];

const services = [
  {
    title: "Prescription refills",
    text: "By phone (and very soon, online). We text you the moment it's ready to pick up.",
  },
  {
    title: "Prescription transfer",
    text: "Give us a call and we will take care of your medication transfer.",
  },
  {
    title: "Medication reviews",
    text: "Sit down with a pharmacist and go over everything you take, one-on-one.",
  },
  {
    title: "Vaccinations",
    text: "Flu, shingles, travel and school vaccines. Walk-ins welcome for flu and pneumonia shots.",
  },
  {
    title: "Pharmacist run clinics",
    text: "A pharmacist will customize a clinic to your need.",
  },
  {
    title: "Blister packs (with no cost)",
    text: "Your doses sorted by day and time, so nothing gets missed.",
  },
  {
    title: "Minor ailment advice",
    text: "Coughs, rashes, aches. Ask us first and skip the waiting room.",
  },
];

function ContactIcon({ children }: any ) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist text-brand-blue">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    </span>
  );
}


const hours = [
  { day: "Monday to Friday", time: "9:00 am – 6:00 pm" },
  { day: "Saturday", time: "10:00 am – 3:00 pm" },
  { day: "Sunday & Holiday", time: "Closed" },
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
              Yorkson Pharmacy
            </h1>
            <p className="mt-1 max-w-xl text-2xl italic leading-relaxed text-white/80">
              Your Health Is Our Priority
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {heroCards.map(({ title, text, image, link, width, height }) => (
                <article
                  key={title}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white text-ink shadow-xl"
                >
                  <div className="aspect-[5/3] w-full bg-mist">
                    <Image src={image} width={width} height={height} alt="" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-2xl font-bold text-brand-navy">
                      {title}
                    </h2>
                    <p className="mt-2 flex-1 leading-relaxed text-ink/75">
                      {text}
                    </p>
                    <a
                      href={link} target="_blank"
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

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                Visit or get in touch
              </h2>
              <address className="font-bold mt-6 space-y-1 text-2xl not-italic text-ink/80">
                <p>#140 - 20144 86 Avenue</p>
                <p>Langley, BC V2Y 3W6</p>
              </address>
              <ul className="mt-8 space-y-5">
                <li className="flex items-center gap-4">
                  <ContactIcon>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </ContactIcon>
                  <div>
                    <p className="text-sm text-ink/60">Call</p>
                    <a
                      href="tel:+17783663552"
                      className="text-lg font-semibold text-brand-blue hover:text-brand-navy"
                    >
                      (778) 366-3552
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <ContactIcon>
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </ContactIcon>
                  <div>
                    <p className="text-sm text-ink/60">Fax</p>
                    <p className="text-lg font-semibold text-ink">
                      (778) 366-3559
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <ContactIcon>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </ContactIcon>
                  <div>
                    <p className="text-sm text-ink/60">Email</p>
                    <a
                      href="mailto:yorksoninfo@gmail.com"
                      className="break-all text-lg font-semibold text-brand-blue hover:text-brand-navy"
                    >
                      yorksoninfo@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
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
