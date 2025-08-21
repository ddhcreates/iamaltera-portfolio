import { Metadata } from "next";
import CaseStudyCard from "@/components/CaseStudyCard";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Case Studies | iamaltera - Success Stories",
  description:
    "Real results from automation and creative projects. See how we saved 1,070+ hours and achieved 99% error reduction.",
};

const caseStudies = [
  {
    title: "Unified Database Automation System",
    client: "Educational Institution",
    description:
      "Transformed manual data management across multiple departments into an automated, error-free system that revolutionized operations.",
    metrics: [
      { label: "Hours Saved", value: "1,070+", icon: "clock" as const },
      { label: "Error Reduction", value: "99%", icon: "shield" as const },
      { label: "Cost Savings", value: "₹2,400", icon: "trending" as const },
    ],
    technologies: [
      "Google Apps Script",
      "Google Sheets",
      "Gmail API",
      "Custom Functions",
    ],
  },
  {
    title: "Real-time Analytics Dashboard",
    client: "Marketing Agency",
    description:
      "Built a comprehensive dashboard that consolidated data from multiple sources, providing real-time insights and automated reporting.",
    metrics: [
      { label: "Data Sources", value: "12", icon: "trending" as const },
      { label: "Update Speed", value: "< 1s", icon: "clock" as const },
      { label: "Reports/Month", value: "200+", icon: "shield" as const },
    ],
    technologies: ["React", "Next.js", "Chart.js", "REST APIs", "PostgreSQL"],
  },
  {
    title: "Customer Service Bot Integration",
    client: "E-commerce Platform",
    description:
      "Developed an intelligent Telegram bot that automated customer inquiries, order tracking, and support ticket management.",
    metrics: [
      { label: "Response Time", value: "< 5s", icon: "clock" as const },
      { label: "Queries/Day", value: "500+", icon: "trending" as const },
      { label: "Satisfaction", value: "94%", icon: "shield" as const },
    ],
    technologies: [
      "Telegram Bot API",
      "Node.js",
      "MongoDB",
      "Natural Language Processing",
    ],
  },
];

export default function CaseStudies() {
  return (
    <>
      <section className="py-20 px-4 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Success <span className="gradient-text">Stories</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Real results from real projects. See how automation and creative
              solutions have transformed businesses and saved thousands of
              hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-neutral-50 to-primary-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              The Impact of Automation
            </h2>
            <p className="text-xl text-neutral-600">
              Every project delivers measurable results that transform how
              businesses operate.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6">
              Featured: Unified Database System
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                <p className="text-neutral-600">
                  Multiple departments manually managing data across
                  disconnected spreadsheets, leading to errors, duplications,
                  and countless hours of repetitive work.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">The Solution</h4>
                <p className="text-neutral-600">
                  Developed a comprehensive Google Apps Script solution that
                  automated data entry, validation, and synchronization across
                  all departments. Implemented custom functions for data
                  processing and automated email notifications for updates.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">The Results</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    Saved 1,070+ staff hours annually through automation
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    Reduced data entry errors by 99%
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    Eliminated ₹2,400 in monthly operational costs
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    Improved data accessibility and real-time reporting
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-neutral-600 italic">
                  &quot;The automation system has completely transformed our
                  operations. What used to take days now happens instantly, and
                  we&apos;ve eliminated virtually all data errors.&quot;
                </p>
                <p className="text-sm font-semibold mt-2">
                  - Department Head, Educational Institution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
