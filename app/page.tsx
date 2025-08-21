import Hero from "@/components/Hero";
import Link from "next/link";
import { Zap, Code2, PenTool, Users, Target, Lightbulb } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const benefits = [
    {
      icon: Zap,
      title: "Save Thousands of Hours",
      description:
        "Automate repetitive tasks and workflows that drain your team's productivity.",
    },
    {
      icon: Target,
      title: "99% Error Reduction",
      description:
        "Eliminate human errors with precise automation and systematic processes.",
    },
    {
      icon: Users,
      title: "Seamless Integration",
      description:
        "I become an extension of your team, understanding your unique needs.",
    },
    {
      icon: Code2,
      title: "Custom Solutions",
      description:
        "Tailored automation and development that fits your specific workflows.",
    },
    {
      icon: PenTool,
      title: "Creative Excellence",
      description:
        "Unique combination of technical expertise and creative artistry.",
    },
    {
      icon: Lightbulb,
      title: "Proven Results",
      description: "Track record of delivering measurable impact and ROI.",
    },
  ];

  return (
    <>
      <Hero />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Your Digital Alter Ego?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              With 8+ years of experience transforming businesses through
              automation and creativity, I deliver solutions that make a real
              difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how automation and creative solutions can
              elevate your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all font-medium"
              >
                View Services & Pricing
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-neutral-50 transition-all border-2 border-primary-200 font-medium"
              >
                See Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
