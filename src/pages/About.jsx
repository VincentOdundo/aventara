import React from "react";
import { useSeo, safariJsonLd } from "../hooks/useSeo";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Section, AnimatedSection, StaggerContainer } from "../components/ui";
import {
  Shield,
  Heart,
  Award,
  Users,
  TreePine,
  ArrowRight,
  Play,
} from "lucide-react";
import logo from "./cima_logo.png";

import heroImg from "../assets/nairobi/bird-exotic.jpeg";
import elefantVegetation from "../assets/lion pack.jpeg";

export default function About() {
  useSeo({
    title: "About Us",
    description:
      "Cima Brava Adventures is a Nairobi-based safari operator running shared and private 4x4 safaris across Kenya and Tanzania.",
    path: "/about",
  });
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden text-center bg-midnight-black">
        <img
          src={heroImg}
          alt="About Cima Brava Adventures"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-midnight-black/30"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center justify-center pt-20">
         
          <span className="text-xs uppercase tracking-[0.4em] text-sunrise-yellow font-bold mb-3 block">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-sand-cream tracking-[-0.02em]">
            About Cima Brava Adventures
          </h1>

          {/* Signature Quote & Golden Brush Underline from theme.png */}
          <div className="mt-6 flex flex-col items-center">
            <p className="font-script italic text-3xl md:text-5xl text-sand-cream">
              Wild by Nature. Guided by Heart.
            </p>
            <svg
              viewBox="0 0 320 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-64 md:w-80 h-4 mt-1 text-sunrise-yellow"
              aria-hidden="true"
            >
              <path
                d="M4 13C72 4 195 2 316 9C245 9 125 11 22 15"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Watch Our Story & Explore Trips CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/safaris"
              className="btn-explore inline-flex items-center gap-3 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-bold px-8 py-3.5 rounded-full shadow-lg hover:brightness-105 transition-all"
            >
              <span>Explore Trips</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/gallery"
              className="btn-story-play inline-flex items-center gap-3 px-4 py-2 rounded-full bg-sand-cream/10 hover:bg-sand-cream/20 border border-savannah-gold/40 backdrop-blur-sm transition-all"
            >
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-sunrise-yellow via-savannah-gold to-sunset-orange text-midnight-black flex items-center justify-center shadow-md">
                <Play size={16} fill="currentColor" className="ml-0.5" />
              </span>
              <span className="text-sm font-bold text-sand-cream pr-2">
                Watch Our Story
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <Section className="min-h-[100svh] py-20 md:py-28 flex flex-col justify-center bg-sand-cream text-midnight-black font-body">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="left">
            <span className="text-xs uppercase tracking-[0.3em] text-sunset-orange font-bold mb-4 block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-safari-brown tracking-[-0.02em] mb-6">
              Born from a Love
              <br />
              for East Africa
            </h2>
            <div className="space-y-4 text-safari-brown/85 leading-relaxed font-body">
              <p>
                Cima Brava Adventures is a Kenya-based safari
                and travel company dedicated to creating authentic,
                and well-curated African safari experiences. We
                specialize in personalized wildlife safaris, cultural tours, and
                adventure travel across Kenya and East Africa.
              </p>
              <p>
                Founded with a passion for nature, travel, and African heritage,
                we connect travelers with landscapes, diverse
                wildlife, and rich cultural traditions. Our experienced team
                combines local expertise, professionalism, and attention to
                detail to deliver seamless and meaningful journeys.
              </p>
              <h3 className="text-xl font-headline font-bold text-safari-brown mt-6 mb-2">
                Our Vision
              </h3>
              <p>
                To become Africa&apos;s most trusted and inspiring safari brand,
                renowned for creating wildlife adventures that
                connect travelers to the heart of nature, rich cultural
                heritage, and meaningful conservation efforts. We envision a
                future where every journey fosters appreciation for
                Africa&apos;s landscapes, empowers local communities, and
                contributes to wildlife conservation for generations to come.
              </p>
              <h3 className="text-xl font-headline font-bold text-safari-brown mt-6 mb-2">
                Our Mission
              </h3>
              <p>
                To provide safe, personalized, and memorable safari
                experiences through exceptional service, knowledgeable guides,
                and thoughtfully designed itineraries. We are committed to
                delivering authentic African adventures while promoting
                responsible tourism, supporting local communities, and ensuring
                sustainable conservation practices.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="right">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-savannah-gold/30">
                <img
                  src={elefantVegetation}
                  alt="Safari experience"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream border border-savannah-gold/40 rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-headline font-bold text-sunrise-yellow">
                  Nairobi
                </p>
                <p className="text-sm text-sand-cream/85">
                  Where every safari starts
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-sand-cream border-t border-savannah-gold/20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-sunset-orange font-bold mb-3 block">
              Our Guiding Compass
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-safari-brown tracking-[-0.02em] mb-4">
              Our Core Values
            </h2>
            <p className="text-safari-brown/80 max-w-2xl mx-auto font-body">
              Every decision we make is guided by these principles.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award size={28} />,
                title: "Excellence",
                desc: "We strive for the highest standards in service delivery and customer satisfaction.",
              },
              {
                icon: <Shield size={28} />,
                title: "Integrity",
                desc: "We operate with honesty, transparency, and professionalism.",
              },
              {
                icon: <TreePine size={28} />,
                title: "Sustainability",
                desc: "We promote responsible tourism that protects wildlife and supports local communities.",
              },
              {
                icon: <Users size={28} />,
                title: "Customer-Centered Service",
                desc: "Every journey is tailored to meet our clients' unique needs and expectations.",
              },
              {
                icon: <Heart size={28} />,
                title: "Passion for Adventure",
                desc: "We are driven by a genuine love for travel, wildlife, and African culture.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-sand-cream border border-savannah-gold/25 rounded-2xl p-8 hover:bg-safari-brown hover:text-sand-cream transition-all duration-500 group shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sunrise-yellow to-savannah-gold flex items-center justify-center text-midnight-black mb-6 shadow-md">
                  {value.icon}
                </div>
                <h4 className="text-lg font-headline font-bold mb-3 text-midnight-black group-hover:text-sunrise-yellow">
                  {value.title}
                </h4>
                <p className="text-sm text-safari-brown/80 group-hover:text-sand-cream/85 leading-relaxed font-body">
                  {value.desc}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <Section className="py-20 md:py-28 text-center bg-sand-cream">
        <AnimatedSection>
          <p className="font-script italic text-3xl text-sunset-orange mb-2">
            Wild by Nature. Guided by Heart.
          </p>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-safari-brown tracking-[-0.02em] mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-safari-brown/80 text-lg max-w-2xl mx-auto mb-10 font-body">
            Let us help you craft the perfect East African safari experience.
            Reach out to us at{" "}
            <a
              href="mailto:cimabravaadventures@gmail.com"
              className="text-sunset-orange font-semibold underline hover:text-safari-brown"
            >
              cimabravaadventures@gmail.com
            </a>{" "}
            and let&apos;s start planning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/safaris"
              className="btn-explore inline-flex items-center justify-center gap-3 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:brightness-105 transition-all active:scale-95"
            >
              <span>Explore Trips</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/destinations"
              className="btn-destinations inline-flex items-center justify-center gap-3 bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream px-10 py-4 rounded-full font-semibold text-lg shadow-md hover:brightness-110 transition-all"
            >
              <span>View Destinations</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/company-profile"
              className="btn-plan inline-flex items-center justify-center gap-2 border-2 border-savannah-gold text-midnight-black bg-sand-cream px-10 py-4 rounded-full font-bold text-lg hover:bg-savannah-gold/15 transition-all"
            >
              <span>Company Profile &amp; Rates</span>
            </Link>
            <Link
              to="/contact"
              className="btn-plan inline-flex items-center justify-center gap-2 border-2 border-savannah-gold text-midnight-black bg-sand-cream px-10 py-4 rounded-full font-bold text-lg hover:bg-savannah-gold/15 transition-all"
            >
              <span>Plan Your Adventure</span>
            </Link>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
