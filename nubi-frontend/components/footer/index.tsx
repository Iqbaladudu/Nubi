import Image from "next/image";
import LightLogo from "@/public/image/logo/nubiLightLogo.png";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-100 text-base-content">
      <aside>
        <Image src={LightLogo} alt="Nubi Academy" className=" w-24" />
        <p>
          PT. Kecerdasan Teknologi Indonesia
          <br />
          Limapuluh Kota, Indonesia
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Layanan Kami</h6>
        <a className="link link-hover">Kursus Online</a>
        <a className="link link-hover">Bootcamp</a>
        <a className="link link-hover">Kursus Offline</a>
        <a className="link link-hover">Inhouse Training</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">Tentang Kami</a>
        <a className="link link-hover">Kontak</a>
        <a className="link link-hover">Karir</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Ketentuan Pengguna</a>
        <a className="link link-hover">Aturan Privasi</a>
        <a className="link link-hover">Aturan Kuki</a>
      </nav>
    </footer>
  );
}
