import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "@/styles/index.module.css"

export default function Home() {

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{backgroundImage: "url('seneca.jpg')", filter: "blur(20px)"}}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="z-10 p-4">
            <h1 className="text-6xl text-white font-bold mb-4"><span className="text-red-800">SSDC</span> - Seneca Software Development Club</h1>
            <picture className="inline-block">
              <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f916/512.webp" type="image/webp" />
              <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f916/512.gif" alt="🤖" width="100" height="100" />
            </picture>
            <p className="text-2xl text-white font-bold mb-4">Learn, Grow, and Contribute.</p>
            <Link legacyBehavior href="https://clubs.ssfinc.ca/SSDC/club_signup">
                <a target="_blank"  className="inline-block px-8 py-4 text-2xl text-white bg-red-900 rounded-full hover:bg-red-600 transition duration-200 transform hover:scale-105">Join Today</a>
            </Link>
        </div>
    </div>
  );
}
