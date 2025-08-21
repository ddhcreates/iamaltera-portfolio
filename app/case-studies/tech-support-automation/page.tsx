import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Tech Support Automation Case Study | iamaltera",
  description: "How we eliminated ₹42,000 in annual licensing costs and improved response times by 95% using Telegram bots.",
};

export default function TechSupportCaseStudy() {
  return (
    <>
      <section className="py-20 px-4 mt-16">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6">
              Tech Support Ticket <span className="gradient-text">Automation</span>
            </h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                Three K-12 Schools (340 Staff)
              </span>
              <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm">
                Telegram Bot API
              </span>
              <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm">
                Google Apps Script
              </span>
              <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm">
                Webhooks
              </span>
            </div>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Replaced expensive Freshdesk licenses and inefficient Google Forms with a custom Telegram bot system that doubled ticket capture while eliminating ₹42,000 in annual costs.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="text-3xl font-bold text-green-600 mb-2">₹42,000</div>
              <div className="text-neutral-600">Annual Cost Savings</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-neutral-600">Faster Submissions</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="text-3xl font-bold text-primary-600 mb-2">150%</div>
              <div className="text-neutral-600">More Tickets Captured</div>
            </div>
          </div>

          {/* Case Study Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Client Context */}
            <div className="bg-neutral-50 p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4">Client Context</h2>
              <p className="text-neutral-700 mb-0">
                Three K-12 schools with approximately 340 staff members faced escalating costs and inefficiencies managing tech support tickets through email, Google Forms, and paid Freshdesk licenses costing ₹42,000 annually.
              </p>
            </div>

            {/* The Problem & Legacy Systems */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">The Problem & Legacy Systems</h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-semibold text-lg mb-2 text-red-800">1. Freshdesk Free Plan (2017–2024)</h3>
                  <ul className="space-y-1 text-red-700">
                    <li>• Only 6 tickets per week capacity</li>
                    <li>• 1–2 day response times</li>
                    <li>• No custom reporting capabilities</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-lg mb-2 text-orange-800">2. Paid Freshdesk + Freshchat (2023-2025)</h3>
                  <ul className="space-y-1 text-orange-700">
                    <li>• ₹42,000 annually for 3 licenses</li>
                    <li>• 12–18 months implementation delay</li>
                    <li>• Complex interface frustrated users</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="font-semibold text-lg mb-2 text-yellow-800">3. Google Forms + Email (2024-2025)</h3>
                  <ul className="space-y-1 text-yellow-700">
                    <li>• Only 4 tickets per week due to complexity</li>
                    <li>• 30–60 minutes just to access and submit forms</li>
                    <li>• Manual assignment taking 5–10 minutes per ticket</li>
                    <li>• No streamlined reporting capabilities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* The Solution */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-neutral-700 mb-6">
                We built a custom Telegram bot system in just 2 days (8 hours) with 8–16 additional hours for enhancements, using Google Apps Script and Telegram webhooks:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-lg mb-3 text-blue-800">Bot 1: User Interface</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Guided Q&A collects ticket details</li>
                    <li>• Automatically assigns unique ticket numbers</li>
                    <li>• Auto-notifies assigned tech staff</li>
                    <li>• Logs all submissions in Google Sheets</li>
                    <li>• Familiar chat interface for users</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-lg mb-3 text-green-800">Bot 2: Tech Department Interface</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Update ticket status and add notes</li>
                    <li>• Staff 'on leave' mode for assignment skipping</li>
                    <li>• Real-time interaction logging</li>
                    <li>• Automated workflow management</li>
                    <li>• Comprehensive reporting capabilities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Before vs After Comparison */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Before vs. After Comparison</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-3 text-left">Metric</th>
                      <th className="border border-neutral-300 p-3 text-left">Legacy Systems</th>
                      <th className="border border-neutral-300 p-3 text-left">Telegram Bots + Apps Script</th>
                      <th className="border border-neutral-300 p-3 text-left">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-3 font-medium">Tickets per Week</td>
                      <td className="border border-neutral-300 p-3">4–6 (Forms & Email)</td>
                      <td className="border border-neutral-300 p-3">10</td>
                      <td className="border border-neutral-300 p-3 text-green-600 font-semibold">↑66%–150% more tickets captured</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-3 font-medium">Average Submission Time</td>
                      <td className="border border-neutral-300 p-3">30–60 mins (find & open form)</td>
                      <td className="border border-neutral-300 p-3">1–2 mins (open Telegram)</td>
                      <td className="border border-neutral-300 p-3 text-green-600 font-semibold">95% faster</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-3 font-medium">Ticket Assignment Time</td>
                      <td className="border border-neutral-300 p-3">5–10 mins per ticket</td>
                      <td className="border border-neutral-300 p-3">&lt;1 min (automated)</td>
                      <td className="border border-neutral-300 p-3 text-green-600 font-semibold">90% faster</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-3 font-medium">First-Response Time</td>
                      <td className="border border-neutral-300 p-3">1–2 days</td>
                      <td className="border border-neutral-300 p-3">30–60 mins</td>
                      <td className="border border-neutral-300 p-3 text-green-600 font-semibold">Same-day responses</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-3 font-medium">Annual License Cost</td>
                      <td className="border border-neutral-300 p-3">₹42,000 (Freshdesk/Freshchat)</td>
                      <td className="border border-neutral-300 p-3">₹0</td>
                      <td className="border border-neutral-300 p-3 text-green-600 font-semibold">Saved ₹42,000</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-3 font-medium">User Satisfaction</td>
                      <td className="border border-neutral-300 p-3">Occasional frustration, 0 expansions</td>
                      <td className="border border-neutral-300 p-3">"Super-happy," requests to expand</td>
                      <td className="border border-neutral-300 p-3 text-green-600 font-semibold">High adoption & positive feedback</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-3 font-medium">Implementation Time</td>
                      <td className="border border-neutral-300 p-3">12–18 months (paid solution)</td>
                      <td className="border border-neutral-300 p-3">2 days + 1–2 weeks for updates</td>
                      <td className="border border-neutral-300 p-3 text-green-600 font-semibold">Months faster</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Outcomes & ROI */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Key Outcomes & ROI</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-green-800">Quantifiable Results</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• <strong>Time Savings:</strong> Eliminated ~10 mins per ticket assignment</li>
                    <li>• <strong>Cost Elimination:</strong> ₹42,000/year in licensing fees</li>
                    <li>• <strong>Efficiency Boost:</strong> Doubled ticket capture rate</li>
                    <li>• <strong>Response Speed:</strong> Same-day responses vs. 1-2 day delays</li>
                    <li>• <strong>Scalability:</strong> 1-day deployment per additional school</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-800">User Experience Impact</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Teachers described as "super-happy" with new system</li>
                    <li>• Zero escalations in first month of operation</li>
                    <li>• Instant chat-based support eliminated frustration</li>
                    <li>• Requests to expand system to other departments</li>
                    <li>• High adoption rate across all three schools</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why It Worked */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Why It Worked</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Technical Excellence</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Leveraged familiar Telegram interface instead of complex forms</li>
                    <li>• Fully custom, in-house solution using Google Apps Script</li>
                    <li>• Automated workflows with zero ongoing licensing costs</li>
                    <li>• Real-time reporting and analytics built-in</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Implementation Strategy</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Rapid 2-day deployment with immediate value</li>
                    <li>• Continuous enhancement based on user feedback</li>
                    <li>• Minimal disruption to existing workflows</li>
                    <li>• Scalable architecture for multi-school deployment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-xl mb-8">
              <div className="text-center">
                <blockquote className="text-xl italic text-neutral-700 mb-4">
                  "Teachers love the instant Telegram interface. We went from constant complaints about slow support to zero escalations in the first month. It's been transformational."
                </blockquote>
                <cite className="font-semibold text-neutral-800">— IT Department Head</cite>
              </div>
            </div>

            {/* Key Takeaway */}
            <div className="bg-neutral-800 text-white p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Key Takeaway</h2>
              <p className="text-neutral-200 text-lg leading-relaxed">
                This project showcases the power of custom automation solutions that prioritize user experience and cost-effectiveness. By replacing expensive third-party tools with a purpose-built Telegram bot system, we delivered faster service, happier users, and significant cost savings while creating a scalable foundation for future growth.
              </p>
            </div>

          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}