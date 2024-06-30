import { FaInstagram, FaTwitter, FaDiscord, FaFacebook, FaLinkedin} from 'react-icons/fa';
import Link from 'next/link';
import styles from "@/styles/footer.module.css"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-10">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="space-y-4 mb-10 md:mb-0">
          <h2 className="text-lg font-bold">SSDC</h2> 
          <Link className={styles.text} href="/">Home</Link> <br /> 
          <Link className={styles.text} href="/about">About us</Link> <br /> 
          <Link className={styles.text} href="/leadership">Leadership team</Link> <br /> 
          <Link className={styles.text} href="/events">Events</Link> <br /> 
          <Link className={styles.text} href="/contact">Contact us</Link> <br /> 
        </div>
        <div className="space-y-4 mb-10 md:mb-0">
          <h2 className="text-lg font-bold">Resources</h2>
          <Link className={styles.text} href="https://clubs.ssfinc.ca/SSDC/club_signup" target="_blank">Join the club</Link> <br />
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-3">
            <a className={styles.text} href="https://www.instagram.com/seneca_sdc/" target="_blank"><FaInstagram /></a>
            <a className={styles.text} href="https://www.facebook.com/campusgroups" target='_blank'><FaFacebook /></a>
            <a className={styles.text} href="https://twitter.com/campusgroups" target="_blank"><FaTwitter /></a>
            <a className={styles.text} href="https://www.linkedin.com/company/seneca-software-developers-club/" target="_blank"><FaLinkedin /></a>
            <a className={styles.text} href="https://discord.com/invite/6jYfqqUtXn" target="_blank"><FaDiscord /></a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t pt-10 text-center">
        <p>© {new Date().getFullYear()} Seneca Software Development Club</p>
        <a target="_blank" className="hover:underline text-slate-300" href="https://www.campusgroups.com/terms?view=privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}
