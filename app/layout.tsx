import type { Metadata } from "next";
import { Orbitron, Exo_2, Roboto, Audiowide, Space_Mono,Doto,Gugi,Iceland} from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: "400",
});
const gugi = Gugi({
  variable: "--font-gugi",
  subsets: ["latin"],
  weight: "400",
});
const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: "400",
});
const iceland = Iceland({
  variable: "--font-iceland",
  subsets: ["latin"],
  weight: "400",
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400",
});
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: "400",
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: "400",
});
const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hackquinox 2025",
  description: "HackQuinox 2025 - Premier Offline Hackathon by CSI FCRIT and AIDL FCRIT,Join HackQuinox 2025, an exciting offline hackathon hosted by Agnel Charities and Fr. C. Rodrigues Institute of Technology (FCRIT), Navi Mumbai, in collaboration with CSI-FCRIT and the AI & Deep Learning Club. This event offers a unique platform for students to innovate, tackle real-world challenges, and showcase solutions across domains like AI/ML, Web Development, Cybersecurity, Blockchain, and Open Innovation.Whether you're an experienced coder or a budding innovator, HackQuinox 2025 is your chance to collaborate, learn from industry experts, and create impactful projects.Code. Create. Collaborate."};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className={orbitron.variable}>
          <div className={exo2.variable}>
            <div className={gugi.variable}>
              <div className={doto.variable}>
              <div className={iceland.variable}>
              
            <div className={roboto.variable}>
              <div className={audiowide.variable}>
                {children}
              </div>
            </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}