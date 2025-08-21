"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, TrendingUp, Shield } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  client: string;
  description: string;
  slug: string; // Add this line
  metrics: {
    label: string;
    value: string;
    icon: "clock" | "trending" | "shield";
  }[];
  technologies: string[];
}

const iconMap = {
  clock: Clock,
  trending: TrendingUp,
  shield: Shield,
};

export default function CaseStudyCard({
  title,
  client,
  description,
  slug, // Add this line
  metrics,
  technologies,
}: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
    >
      <div className="p-8">
        <div className="text-sm text-primary-600 font-semibold mb-2">
          {client}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-neutral-600 mb-6">{description}</p>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          {metrics.map((metric, index) => {
            const Icon = iconMap[metric.icon];
            return (
              <div key={index} className="text-center">
                <Icon className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-neutral-800">
                  {metric.value}
                </div>
                <div className="text-xs text-neutral-600">{metric.label}</div>
              </div>
            );
          })}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <Link
          href={`/case-studies/${slug}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          Read Full Case Study
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}