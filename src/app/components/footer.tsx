import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 text-center md:text-left">
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/chiya.png"
            alt="Chiya Khasauli Logo"
            width={80}
            height={80}
            className="rounded-full mb-4 border border-amber-500"
            priority
          />
          <p className="text-sm text-gray-400 max-w-xs">
            A perfect place for your morning and evening gatherings. Come share
            your stories at Chiya Khasauli over a warm cup of tea.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-amber-500 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-amber-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-amber-500 transition">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-amber-500 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/guffgaff"
                className="hover:text-amber-500 transition"
              >
                Guff Gaff
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-amber-500 mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-amber-500" />
              +977-9800000000
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-amber-500" />
              chiya@example.com
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-amber-500 mt-1" />
              <span>Khasauli, Rupandehi, Nepal</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <a href="#" className="hover:text-amber-500 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-amber-500 transition">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-40 rounded-md overflow-hidden border border-gray-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8951.642478815153!2d83.46054086406865!3d27.689668781029138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996867b77c6d20b%3A0x825dcd306f66d912!2z4KSm4KWH4KS14KWA4KSo4KSX4KSwIOCkmuCljOCkpOCkvuCksOClgA!5e1!3m2!1sne!2snp!4v1747893052449!5m2!1sne!2snp"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
        &copy; {new Date().getFullYear()} Chiya Khasauli. All rights reserved.
      </div>
    </footer>
  );
}
