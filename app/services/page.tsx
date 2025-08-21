import { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { Cpu, BarChart3, FileCode, Bot, Globe, PenTool } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | iamaltera - Automation & Creative Solutions",
  description:
    "Professional automation, development, and creative services. From Google Apps Script to custom poetry, transforming businesses with technology and creativity.",
};

const services = [
  {
    title: "Business Process Automation",
    description:
      "Streamline workflows and eliminate repetitive tasks with custom automation solutions.",
    price: "$75-150/hr",
    icon: Cpu,
    features: [
      "Workflow analysis and optimization",
      "Custom automation scripts",
      "Integration with existing tools",
      "Process documentation",
      "Training and support",
    ],
  },
  {
    title: "Custom Dashboard Development",
    description:
      "Beautiful, interactive dashboards that transform your data into actionable insights.",
    price: "$100-200/hr",
    icon: BarChart3,
    features: [
      "Real-time data visualization",
      "React/Next.js development",
      "Responsive design",
      "API integrations",
      "Performance optimization",
    ],
  },
  {
    title: "Google Apps Script Solutions",
    description:
      "Powerful automation for Google Workspace that saves thousands of hours.",
    price: "$50-125/hr",
    icon: FileCode,
    features: [
      "Custom Google Sheets functions",
      "Automated workflows",
      "Gmail automation",
      "Drive management tools",
      "Forms and data processing",
    ],
  },
  {
    title: "Telegram Bot Development",
    description:
      "Intelligent bots that automate communication and enhance user engagement.",
    price: "$150-300/project",
    icon: Bot,
    features: [
      "Custom bot functionality",
      "Integration with APIs",
      "Automated responses",
      "User management",
      "Analytics and reporting",
    ],
  },
  {
    title: "Website Development",
    description:
      "Modern, fast, and SEO-optimized websites built with the latest technologies.",
    price: "$100-160/hr",
    icon: Globe,
    features: [
      "Next.js/React development",
      "Responsive design",
      "SEO optimization",
      "Performance tuning",
      "Deployment and hosting",
    ],
  },
  {
    title: "Custom Poetry Services",
    description:
      "Unique, personalized poetry for special occasions, events, and creative projects.",
    price: "$100-200/piece",
    icon: PenTool,
    features: [
      "Personalized poems",
      "Wedding and event poetry",
      "Brand storytelling",
      "Creative content writing",
      "300+ poems portfolio",
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="py-20 px-4 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Services That <span className="gradient-text">Transform</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From automation that saves thousands of hours to creative
              solutions that inspire, I offer a unique blend of technical
              expertise and artistic vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">How I Work</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Understand</h3>
              <p className="text-neutral-600">
                Deep dive into your workflows, challenges, and goals to identify
                opportunities.
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-neutral-600">
                Create tailored solutions that integrate seamlessly with your
                existing systems.
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Deliver</h3>
              <p className="text-neutral-600">
                Implement, test, and optimize solutions with ongoing support and
                documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
