"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">
              8+ Years of Digital Excellence
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Your Digital <span className="gradient-text">Alter Ego</span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            I become the extension of your team—automating workflows, building
            dashboards, and crafting creative solutions that save thousands of
            hours and unlock new possibilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 font-medium text-lg"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-neutral-50 transition-all border-2 border-primary-200 font-medium text-lg"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              1,070+
            </div>
            <div className="text-neutral-600">Hours Saved</div>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-primary-600 mb-2">99%</div>
            <div className="text-neutral-600">Error Reduction</div>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-primary-600 mb-2">300+</div>
            <div className="text-neutral-600">Creative Works</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
