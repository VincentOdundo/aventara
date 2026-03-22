import React from "react";
import Layout from "../components/layout/Layout";
import { Section, AnimatedSection, StaggerContainer } from "../components/ui";
import { Shield, Heart, Globe, Award, Users, TreePine } from "lucide-react";

import imgAsset_0 from "../assets/cheater.jpeg";
import imgAsset_1 from "../assets/cheater_plain.jpeg";
import imgAsset_2 from "../assets/elefpalin.jpeg";
import imgAsset_3 from "../assets/elephant.jpeg";
import imgAsset_4 from "../assets/elephtain.jpeg";
import imgAsset_5 from "../assets/flamingo.jpeg";
import imgAsset_6 from "../assets/lion.jpeg";
import imgAsset_7 from "../assets/lioness.jpeg";
import imgAsset_8 from "../assets/lioness_open.jpeg";
import imgAsset_9 from "../assets/mountain.jpeg";
import imgAsset_10 from "../assets/plain_elefabt.jpeg";
import imgAsset_11 from "../assets/rhino.jpeg";
import imgAsset_12 from "../assets/rhino_plain.jpeg";
import imgAsset_13 from "../assets/treecheta.jpeg";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden text-center">
        <img
          src={imgAsset_2}
          alt="About Aventara Safaris"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 img-overlay-full"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center justify-center">
          <span className="text-xs uppercase tracking-[0.4em] text-white/70 font-bold mb-3 block">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-[-0.02em]">
            About Aventara Safaris
          </h1>
        </div>
      </section>

      {/* Story */}
      <Section className="min-h-[100svh] py-20 md:py-28 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="left">
            <span className="text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-4 block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-[-0.02em] mb-6">
              Born from a Love
              <br />
              for East Africa
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Aventara Safaris is a Kenya-based safari and travel company dedicated to creating authentic, unforgettable, and well-curated African safari experiences. We specialize in personalized wildlife safaris, cultural tours, and adventure travel across Kenya and East Africa.
              </p>
              <p>
                Founded with a passion for nature, travel, and African heritage, Aventara Safaris was established to connect travelers with breathtaking landscapes, diverse wildlife, and rich cultural traditions. Our experienced team combines local expertise, professionalism, and attention to detail to deliver seamless and meaningful journeys.
              </p>
              <h3 className="text-xl font-headline font-bold text-primary mt-6 mb-2">Our Vision</h3>
              <p>
                To become Africa's most trusted and inspiring safari brand, renowned for creating unforgettable wildlife adventures that connect travelers to the heart of nature, rich cultural heritage, and meaningful conservation efforts. Aventara Safaris envisions a future where every journey fosters appreciation for Africa's landscapes, empowers local communities, and contributes to wildlife conservation for generations to come.
              </p>
              <h3 className="text-xl font-headline font-bold text-primary mt-6 mb-2">Our Mission</h3>
              <p>
                To provide safe, personalized, and truly memorable safari experiences through exceptional service, knowledgeable guides, and thoughtfully designed itineraries. We are committed to delivering authentic African adventures while promoting responsible tourism, supporting local communities, and ensuring sustainable conservation practices.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="right">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={imgAsset_3}
                  alt="Safari experience"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-on-primary rounded-xl p-6 shadow-xl">
                <p className="text-3xl font-headline font-bold">12+</p>
                <p className="text-sm text-on-primary/80">
                  Years of Excellence
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-[-0.02em] mb-4">
              Our Core Values
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
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
                className="bg-surface-container-lowest rounded-xl p-8"
              >
                <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-6">
                  {value.icon}
                </div>
                <h4 className="text-lg font-headline font-bold mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <Section className="py-20 md:py-28 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-[-0.02em] mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-10">
            Let us help you craft the perfect East African safari experience.
            Reach out and let's start planning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/safaris"
              className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-10 py-4 rounded-md font-bold text-lg hover:bg-primary-container transition-all active:scale-95"
            >
              Browse Safaris
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-outline text-primary px-10 py-4 rounded-md font-bold hover:bg-surface-container-low transition-all"
            >
              Contact Us
            </a>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
