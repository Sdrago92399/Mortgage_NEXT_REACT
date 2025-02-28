"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between">
        {/* Logo and Description */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold">Better.com Replica</h2>
          <p className="mt-2 text-sm">Replicating the design and functionality of Better.com</p>
          <p className="mt-2 text-sm">© {new Date().getFullYear()} Better.com Replica. All rights reserved.</p>
        </div>

        {/* Link Groups */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <Link href="/about-us" className="hover:text-white transition">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/careers" className="hover:text-white transition">Careers</Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="hover:text-white transition">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/faq" className="hover:text-white transition">FAQs</Link>
              </li>
              <li className="mb-2">
                <Link href="/help" className="hover:text-white transition">Help Center</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul>
              <li className="mb-2">
                <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-white transition" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-white transition" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-white transition" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:text-white transition" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 border-t border-gray-800 pt-4 text-center">
        <p className="text-xs text-gray-500">
          Built with ❤️ by Shahbaaz Alam. Plz hire me 🥺 
        </p>
      </div>
    </footer>
  );
}
