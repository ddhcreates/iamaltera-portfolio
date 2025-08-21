import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">iamaltera</h3>
            <p className="text-neutral-400 text-sm">
              Your digital alter ego for automation and creative solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link
                  href="/services#automation"
                  className="hover:text-white transition-colors"
                >
                  Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#development"
                  className="hover:text-white transition-colors"
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#poetry"
                  className="hover:text-white transition-colors"
                >
                  Creative Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@iamaltera.com"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-400">
          <p>&copy; 2024 iamaltera.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
