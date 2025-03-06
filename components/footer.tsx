import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="https://dinsos.bandung.go.id/assets/images/logotebel.png"
              alt="Dinas Sosial Kota Bandung"
              width={200}
              height={60}
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 mt-4">
              Bersama wujudkan kesejahteraan sosial dari, oleh, dan untuk masyarakat menuju Bandung yang unggul, nyaman,
              dan sejahtera.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-cyan-500 pb-2">Profil</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Sambutan Kepala Dinas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Struktur Organisasi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Sejarah-Visi-dan-Misi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Tupoksi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Program-Kegiatan
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Daftar-Pegawai
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-cyan-500 pb-2">Link Terkait</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Kementrian Sosial RI
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Dinas Sosial Prov Jabar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  LAPOR!
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Portal Kota Bandung
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  JDIH Kota Bandung
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Data Kota Bandung
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Bandung Smart City
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">© Dinas Sosial Kota Bandung 2025</div>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">Youtube</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

