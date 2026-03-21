import React from "react";
import Layout from "../components/layout/Layout";
import { Section, AnimatedSection, StaggerContainer } from "../components/ui";
import { Shield, Heart, Globe, Award, Users, TreePine } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden text-center">
        <img
          src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&q=80&w=2067"
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
                Aventara Safaris was founded with a simple vision: to share the
                breathtaking beauty and wildlife of Kenya and Tanzania with the
                world, while ensuring every journey supports local communities
                and conservation efforts.
              </p>
              <p>
                Based in Nairobi, our team of passionate safari designers and
                expert local guides have spent over a decade crafting
                unforgettable experiences. We know every hidden watering hole,
                every secret leopard den, and every sunrise viewpoint that will
                take your breath away.
              </p>
              <p>
                From the thundering wildebeest crossings of the Mara River to
                the ancient volcanic floor of the Ngorongoro Crater — we
                organize safaris and create stories that last a lifetime.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="right">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=2000"
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
                icon: <Heart size={28} />,
                title: "Passion for Africa",
                desc: "We are deeply passionate about the landscapes, wildlife, and people of East Africa. This love drives every experience we create.",
              },
              {
                icon: <Shield size={28} />,
                title: "Trust & Safety",
                desc: "Your safety is our top priority. All our vehicles are fully insured and our drivers are certified and experienced professionals.",
              },
              {
                icon: <TreePine size={28} />,
                title: "Conservation",
                desc: "We believe travel should give back. Every booking contributes to wildlife protection and community development programs.",
              },
              {
                icon: <Globe size={28} />,
                title: "Global Standards",
                desc: "While our heart is in Africa, our service standards are world-class. We cater to international travelers with premium experiences.",
              },
              {
                icon: <Users size={28} />,
                title: "Community First",
                desc: "We employ local guides, use community-owned lodges, and ensure tourism benefits reach the communities who need it most.",
              },
              {
                icon: <Award size={28} />,
                title: "Excellence",
                desc: "From the first inquiry to your final sunset game drive, every detail is crafted with meticulous care and attention.",
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
