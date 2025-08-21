import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Student Database Automation Case Study | iamaltera",
  description: "How we saved 1,070+ hours annually and eliminated data entry errors for a K-12 educational institution.",
};

export default function StudentDatabaseCaseStudy() {
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
              Unified Student Database <span className="gradient-text">Automation</span>
            </h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                K-12 Educational Institution
              </span>
              <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm">
                Google Apps Script
              </span>
              <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm">
                Gmail API
              </span>
              <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm">
                HTML Service
              </span>
            </div>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Transformed manual student data collection from a week-long process involving 1,000+ staff hours into an automated, error-free system using dynamic web forms and batch email automation.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="text-3xl font-bold text-primary-600 mb-2">1,070+</div>
              <div className="text-neutral-600">Hours Saved Annually</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-neutral-600">Error Reduction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="text-3xl font-bold text-blue-600 mb-2">₹2,400</div>
              <div className="text-neutral-600">Annual Cost Savings</div>
            </div>
          </div>

          {/* Case Study Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Client Context */}
            <div className="bg-neutral-50 p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4">Client Context</h2>
              <p className="text-neutral-700 mb-0">
                K-12 schools maintaining student data as central Google Sheets databases with 2,000+ student records. Annual updates required printing blank forms, mailing them to parents for completion, re-collecting, and manually re-entering data. This process consumed significant time, cost, and introduced frequent entry errors.
              </p>
            </div>

            {/* The Problem */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">The Problem</h2>
              <p className="text-neutral-700 mb-4">
                The existing manual process was incredibly inefficient and error-prone:
              </p>
              <ul className="space-y-2 text-neutral-700">
                <li><strong>Printing & Mail-Merge:</strong> 8 hours of preparation</li>
                <li><strong>Form Printing:</strong> Additional 8 hours</li>
                <li><strong>Mailing & Collection:</strong> 1 full week of logistics</li>
                <li><strong>Manual Data Entry:</strong> 12 hours × 90 staff = 1,080 staff-hours</li>
                <li><strong>Verification & Merge:</strong> 4-6 hours × 2-3 staff = 8-18 additional hours</li>
                <li><strong>High Error Rate:</strong> Frequent mistakes due to double data handling</li>
                <li><strong>Staff Frustration:</strong> Teachers lacked bandwidth and ownership, leading to delays</li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-neutral-700 mb-4">
                We developed a comprehensive Google Apps Script-powered automation system in just 5–7 working days:
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border-l-4 border-primary-500">
                  <h3 className="font-semibold text-lg mb-2">1. Dynamic Web Forms</h3>
                  <p className="text-neutral-700">
                    Generated secure, token-protected HTML pages for each student record using Gmail API and Apps Script HTML Service. Forms included both editable and non-editable fields, allowing parents to update only necessary information.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-lg mb-2">2. Automated Batch Emailing</h3>
                  <p className="text-neutral-700">
                    Implemented scripted Gmail API calls to send 2,000+ personalized form links in daily batches of 1,500 emails, completing the entire distribution in just 10 minutes.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-lg mb-2">3. Real-Time Data Capture</h3>
                  <p className="text-neutral-700">
                    Parent submissions were written directly back to the central Google Sheet, completely eliminating the need for manual re-entry and reducing errors to near-zero.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="font-semibold text-lg mb-2">4. Access Logging & Security</h3>
                  <p className="text-neutral-700">
                    Implemented comprehensive tracking of form access and submissions, ensuring accountability and security throughout the process.
                  </p>
                </div>
              </div>
            </div>

            {/* Results & ROI */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Results & ROI</h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-neutral-300">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-300 p-3 text-left">Metric</th>
                      <th className="border border-neutral-300 p-3 text-left">Before Automation</th>
                      <th className="border border-neutral-300 p-3 text-left">After Automation</th>
                      <th className="border border-neutral-300 p-3 text-left">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 p-3 font-medium">Total Process Time</td>
                      <td className="border border-neutral-300 p-3">1 week + 1,088–1,106 staff-hours</td>
                      <td className="border border-neutral-300 p-3">4 hrs setup + 10 min execution + 8–18 staff-hrs</td>
                      <td className="border border-neutral-300 p-3 text-green-600 font-semibold">~1 week and ~1,070 staff-hrs saved (99%)</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-3 font-medium">Manual Data Entry</td>
                      <td className="border border-neutral-300 p-3">1,080 staff-hrs</td>
                      <td className="border border-neutral-300 p-3">0 staff-hrs</td>
                      <td className="border border-neutral-300 p-3 text-green-600 font-semibold">100% elimination</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 p-3 font-medium">Data Entry Errors</td>
                      <td className="border border-neutral-300 p-3">High (frequent corrections required)</td>
                      <td className="border border-neutral-300 p-3">Near-zero</td>
                      <td className="border border-neutral-300 p-3 text-green-600 font-semibold">~100% accuracy improvement</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="border border-neutral-300 p-3 font-medium">Setup Time</td>
                      <td className="border border-neutral-300 p-3">N/A</td>
                      <td className="border border-neutral-300 p-3">5–7 days initial; 1 day per replication</td>
                      <td className="border border-neutral-300 p-3 text-blue-600 font-semibold">Rapid deployment</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-green-800">Key Benefits</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Over 1,070 staff-hours saved annually</li>
                    <li>• Near-zero data errors vs. frequent manual mistakes</li>
                    <li>• ₹2,400 saved in printing costs</li>
                    <li>• Scalable to 1,500 addresses/day via batch emailing</li>
                    <li>• All three schools implemented immediately</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-800">Why It Worked</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Leveraged existing Google Sheets infrastructure</li>
                    <li>• Secure, tokenized access for data integrity</li>
                    <li>• Automation-first approach eliminated manual touchpoints</li>
                    <li>• Minimally disruptive to parents and staff</li>
                    <li>• Quick replication for additional schools</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-xl mb-8">
              <div className="text-center">
                <blockquote className="text-xl italic text-neutral-700 mb-4">
                  "The automation system has completely transformed our annual data collection. What used to take our entire staff over a week now happens automatically with zero errors."
                </blockquote>
                <cite className="font-semibold text-neutral-800">— School Administrator</cite>
              </div>
            </div>

            {/* Key Takeaway */}
            <div className="bg-neutral-800 text-white p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Key Takeaway</h2>
              <p className="text-neutral-200 text-lg leading-relaxed">
                By combining Google Apps Script, Gmail API, and dynamic HTML forms, this solution transformed a labor-intensive, error-prone process into a streamlined, zero-error workflow. The system saved over 1,000 staff-hours annually while eliminating ₹2,400 in printing costs, demonstrating how targeted automation delivers measurable ROI, data integrity, and user satisfaction in educational settings.
              </p>
            </div>

          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}