import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/mainNav.module.css"
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
    <nav className="bg-black" style={{position:"sticky", top: 0, zIndex: 10000}}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div>
              <Link legacyBehavior href="/">
                <a onClick={closeMenu}>
                  <Image
                    src='/logo.png'
                    width="180"
                    height="180"
                    className="cursor-pointer" 
                  />
                </a>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="text-sm text-white ml-10 space-x-6">
                <Link legacyBehavior href="/"><a onClick={closeMenu} className={router.pathname === '/' ? styles.activeLink : styles.link}>Home</a></Link>
                <Link legacyBehavior href="/about"><a onClick={closeMenu} className={router.pathname === '/about' ? styles.activeLink : styles.link}>About us</a></Link>
                <Link legacyBehavior href="/leadership"><a onClick={closeMenu} className={router.pathname === '/leadership' ? styles.activeLink : styles.link}>Leadership team</a></Link>
                <Link legacyBehavior href="/events"><a onClick={closeMenu} className={router.pathname === '/events' ? styles.activeLink : styles.link}>Events</a></Link>
                <Link legacyBehavior href="/contact"><a onClick={closeMenu} className={router.pathname === '/contact' ? styles.activeLink : styles.link}>Contact us</a></Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-red-600 hover:text-white">
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="text-white md:hidden">
          <div className="px-8 pt-2 pb-3 space-y-1 sm:px-15 text-sm">
              <Link href='/' legacyBehavior><a onClick={closeMenu} className={router.pathname === '/' ? styles.activeLink : styles.link}>Home</a></Link>
            </div>
            <div className="px-8 pt-2 pb-3 space-y-1 sm:px-15 text-sm">
              <Link href='/about' legacyBehavior><a onClick={closeMenu} className={router.pathname === '/about' ? styles.activeLink : styles.link}>About us</a></Link>
            </div>
            <div className="px-8 pt-2 pb-3 space-y-1 sm:px-15 text-sm">
              <Link legacyBehavior href="/leadership"><a onClick={closeMenu} className={router.pathname === '/leadership' ? styles.activeLink : styles.link}>Leadership team</a></Link>
            </div>
            <div className="px-8 pt-2 pb-3 space-y-1 sm:px-15 text-sm">
              <Link legacyBehavior href="/events"><a onClick={closeMenu} className={router.pathname === '/events' ? styles.activeLink : styles.link}>Events</a></Link>
            </div>
            <div className="px-8 pt-2 pb-3 space-y-1 sm:px-15 text-sm">
              <Link href='/contact' legacyBehavior><a onClick={closeMenu} className={router.pathname === '/contact' ? styles.activeLink : styles.link}>Contact us</a></Link>
            </div>
        </div>
      )}
    </nav>
    <hr className="shadow-md"/>
    </>
  );
}
