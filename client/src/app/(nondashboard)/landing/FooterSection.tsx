import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function FooterSection() {
  return (
    <footer className="border-t border-gray-200 py-20">
      <div className="max-w-4xl  mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4">
            <Link href="/" className="text-xl font-bold" scroll={false}>
              RENTIFUL
            </Link>
          </div>
          <nav className="mb-4">
            <ul className="flex space-x-6">
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/сontact">Contac us</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4 mb-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary-600"
            >
              <FontAwesomeIcon icon={faFacebook} className="size-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-primary-600"
            >
              <FontAwesomeIcon icon={faInstagram} className="size-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary-600">
              <FontAwesomeIcon icon={faTwitter} className="size-6" />
            </a>
            <a
              href="#"
              aria-label="Linkedin"
              className="hover:text-primary-600"
            >
              <FontAwesomeIcon icon={faLinkedin} className="size-6" />
            </a>
            <a href="#" aria-label="Youtube" className="hover:text-primary-600">
              <FontAwesomeIcon icon={faYoutube} className="size-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 flex jusify-center space-x-4">
          <span>&copy; RENTiful. All rights reserved.</span>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of service</Link>
          <Link href="/cookies">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
