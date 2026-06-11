"use client";

import Link from "next/link";
import Container from "./ui/Container";
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
          {/* Column 1: Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-2">DevAura</h2>
            <p className="text-sm text-gray-400">
              A platform for mastering programming through interactive quizzes,
              curated learning tracks, and quality resources.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-white  hover:text-[#5271FF] transition-all duration-300 " href="/">Home</Link>
              </li>
              <li>
                <Link className="text-white  hover:text-[#5271FF] transition-all duration-300 " href="/about">About Us</Link>
              </li>
              <li>
                <Link className="text-white  hover:text-[#5271FF] transition-all duration-300 " href="/quizzes">Quizzes</Link>
              </li>
              <li>
                <Link className="text-white  hover:text-[#5271FF] transition-all duration-300 " href="/tracks">Tracks</Link>
              </li>
              <li>
                <Link className="text-white  hover:text-[#5271FF] transition-all duration-300 " href="/resources">Resources</Link>
              </li>
              <li>
                <Link className="text-white  hover:text-[#5271FF] transition-all duration-300 " href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tracks */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Tracks</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-white  hover:text-[#5271FF] transition-all duration-300 " href="/tracks/frontend-nextjs">Frontend Development (Next.js)</Link>
              </li>
              <li>
                <Link className="text-white  hover:text-[#5271FF] transition-all duration-300 " href="/tracks/backend-nodejs">Backend Development (Node.js)</Link>
              </li>
              <li>
                <Link className="text-white  hover:text-[#5271FF] transition-all duration-300 " href="/tracks/mobile-flutter">Mobile Development (Flutter)</Link>
              </li>
              <li>
                <Link className="text-white  hover:text-[#5271FF] transition-all duration-300 " href="/tracks/data-analysis-python">Data Analysis</Link>
              </li>
              <li>
                <Link className="text-white  hover:text-[#5271FF] transition-all duration-300 " href="/tracks/devops">DevOps</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Programming Languages */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Languages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-white  hover:text-[#5271FF] transition-all duration-300 " href="/quizzes/html">HTML</Link>
              </li>
              <li>
                <Link className="text-white  hover:text-[#5271FF] transition-all duration-300 " href="/quizzes/css">CSS</Link>
              </li>
              <li>
                <Link className="text-white  hover:text-[#5271FF] transition-all duration-300 " href="/quizzes/javascript">Javascript</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-sm text-center text-gray-200">
          <p>&copy; {currentYear} DevAura. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
