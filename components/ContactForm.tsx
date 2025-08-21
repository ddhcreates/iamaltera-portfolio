"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // You can add API call here
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Let&apos;s Create Something Amazing
          </h2>
          <p className="text-xl text-neutral-600">
            Ready to transform your business? Let&apos;s discuss your project.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-effect rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:outline-none transition-colors"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:outline-none transition-colors"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="service" className="block text-sm font-medium mb-2">
              Service Interested In
            </label>
            <select
              id="service"
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:outline-none transition-colors"
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
            >
              <option value="">Select a service</option>
              <option value="automation">Business Process Automation</option>
              <option value="dashboard">Dashboard Development</option>
              <option value="apps-script">Google Apps Script</option>
              <option value="telegram">Telegram Bot Development</option>
              <option value="website">Website Development</option>
              <option value="poetry">Custom Poetry</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Project Details
            </label>
            <textarea
              id="message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:outline-none transition-colors resize-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell me about your project goals and timeline..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-4 rounded-lg hover:bg-primary-700 transition-colors font-medium inline-flex items-center justify-center"
          >
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
