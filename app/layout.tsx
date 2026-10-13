import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--nf-display",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--nf-body",
});

export const metadata = {
  title: "Yorkson Pharmacy",
  description:
    "Prescription consultations, vaccinations and friendly advice from Yorkson Pharmacy. Book your appointment online.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
