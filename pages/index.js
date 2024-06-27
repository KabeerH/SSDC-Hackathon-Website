import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "@/styles/index.module.css"

export default function Home() {
  const phrase = `Hello Friend! Looks like you found my secret hideout! Do you want to enhance your coding skills?, collaborate on exciting projects?, and be part of a vibrant community? Then what are you waiting for? Join the Seneca Software Development Club Today! `;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex < phrase.length ? prevIndex + 1 : prevIndex);
    }, 50); //set each letter after each interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-top min-h-screen">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{backgroundImage: "url('seneca.jpg')", filter: "blur(20px)"}}></div>
        <div className="relative z-10 mt-24 text-4xl md:text-6xl mb-20">
          <picture>
            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f913/512.webp" type="image/webp"/>
            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f913/512.gif" alt="🤓" width="200" height="250" className="w-200 h-250 md:w-400 md:h-500"/>
          </picture>
        </div>
        <div className="relative z-10 font-mono text-3xl md:text-5xl flex flex-col items-center">
          <div className="text-white font-bold text-center">
              {phrase.slice(0, index)}
          </div>
          {index === phrase.length && (
            <Link legacyBehavior href="/about">
              <a className={styles.link}>Learn more...</a>
            </Link>
          )}
        </div>
    </div>
  );
}
