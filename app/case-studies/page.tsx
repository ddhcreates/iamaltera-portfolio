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
    title: "Unified Student Database Automation",
    client: "K-12 Educational Institutions",
    slug: "student-database-automation",
    description:
      "Transformed manual student data collection from a week-long process involving 1,000+ staff hours into an automated, error-free system using dynamic web forms and batch email automation.",
    metrics: [
      { label: "Hours Saved", value: "1,070+", icon: "clock" as const },
      { label: "Error Reduction", value: "99%", icon: "shield" as const },
      { label: "Cost Savings", value: "₹2,400", icon: "trending" as const },
    ],
    technologies: [
      "Google Apps Script",
      "Gmail API",
      "HTML Service",
      "Google Sheets",
      "Token Authentication",
    ],
  },
  {
    title: "Tech Support Ticket Automation",
    client: "K-12 Schools",
    slug: "tech-support-automation",
    description:
      "Replaced expensive Freshdesk licenses and inefficient Google Forms with a custom Telegram bot system that doubled ticket capture while eliminating ₹42,000 in annual costs.",
    metrics: [
      { label: "Cost Savings", value: "₹42,000/yr", icon: "trending" as const },
      { label: "Submission Speed", value: "95% faster", icon: "clock" as const },
      { label: "Ticket Increase", value: "150%", icon: "shield" as const },
    ],
    technologies: [
      "Telegram Bot API",
      "Google Apps Script",
      "Webhooks",
      "Google Sheets",
      "Automated Workflows",
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
              solutions have transformed educational institutions and saved thousands of
              hours while eliminating costly licensing fees.
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
              educational institutions operate.
            </p>
          </div>

          <div className="space-y-8">
            {/* Featured Case Study 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Featured: Unified Student Database System
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                  <p className="text-neutral-600">
                    Annual student data updates required printing 2,000+ forms, mailing them to parents, collecting responses, and manually re-entering data. This consumed over 1,000 staff hours, introduced frequent errors, and cost ₹2,400 annually in printing alone.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">The Solution</h4>
                  <p className="text-neutral-600">
                    Developed a Google Apps Script system with dynamic, token-protected web forms sent via automated email batches. Parents updated data directly into the central Google Sheets database, eliminating all manual re-entry while maintaining security and accountability through access logging.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">The Results</h4>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Saved 1,070+ staff hours annually (99% reduction in process time)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Eliminated 100% of manual data entry errors
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Reduced process time from 1 week to 4 hours setup + 10 minutes execution
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Saved ₹2,400 in annual printing and mailing costs
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Deployed across all three schools within days of demonstration
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t">
                  <p className="text-sm text-neutral-600 italic">
                    &quot;The automation system has completely transformed our annual data collection. What used to take our entire staff over a week now happens automatically with zero errors.&quot;
                  </p>
                  <p className="text-sm font-semibold mt-2">
                    - School Administrator
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Case Study 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Featured: Tech Support Ticket Automation
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                  <p className="text-neutral-600">
                    Three schools with 340 staff faced escalating costs with ₹42,000/year Freshdesk licenses, 30-60 minute form submissions, manual ticket assignments taking 5-10 minutes each, and 1-2 day response times that frustrated users.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">The Solution</h4>
                  <p className="text-neutral-600">
                    Built a custom dual-bot Telegram system in just 2 days using Google Apps Script and webhooks. Bot1 guides users through Q&A, assigns ticket numbers, and logs to Google Sheets. Bot2 handles tech staff updates, leave management, and status tracking—all with real-time reporting.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">The Results</h4>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Eliminated ₹42,000 in annual Freshdesk licensing costs
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Reduced submission time by 95% (from 30-60 mins to 1-2 mins)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Automated ticket assignment (90% faster than manual process)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Achieved same-day responses vs. previous 1-2 day delays
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Increased ticket capture by 66-150% due to ease of use
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      Teachers reported being "super-happy" with instant chat-based support
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t">
                  <p className="text-sm text-neutral-600 italic">
                    &quot;Teachers love the instant Telegram interface. We went from constant complaints about slow support to zero escalations in the first month. It&apos;s been transformational.&quot;
                  </p>
                  <p className="text-sm font-semibold mt-2">
                    - IT Department Head
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Combined Impact Across Projects</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">1,070+</div>
                <div className="text-primary-100">Hours Saved Annually</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">₹44,400</div>
                <div className="text-primary-100">Annual Cost Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99%</div>
                <div className="text-primary-100">Error Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}