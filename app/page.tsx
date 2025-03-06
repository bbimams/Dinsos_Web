import Image from "next/image"
import { MapPin, Mail, Phone, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="https://dinsos.bandung.go.id/assets/images/contentUpload/sejarah2.jpg"
          alt="Dinas Sosial Kota Bandung Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">SELAMAT DATANG</h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">WEBSITE DINAS SOSIAL KOTA BANDUNG</h2>
          <p className="text-lg md:text-xl max-w-3xl">
            BERSAMA WUJUDKAN KESEJAHTERAAN SOSIAL DARI, OLEH, DAN UNTUK MASYARAKAT MENUJU BANDUNG YANG UNGGUL, NYAMAN,
            DAN SEJAHTERA
          </p>
          <Button className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-white">Jelajahi Lebih Lanjut</Button>
        </div>
      </section>

      {/* Satisfaction Index */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-sm font-medium text-cyan-500 mb-2">Dinas Sosial Kota Bandung</h3>
              <h2 className="text-3xl font-bold mb-6">INDEKS KEPUASAN MASYARAKAT</h2>
              <p className="text-gray-600 mb-4">
                "Kami dengan bangga mengumumkan bahwa Dinas Sosial Kota Bandung telah berhasil mencapai hasil yang
                menggembirakan dalam survei kepuasan masyarakat terbaru kami. Melalui survei ini, kami menemukan bahwa
                87% dari responden merasa puas dengan layanan yang kami berikan."
              </p>
              <p className="text-gray-600">
                "Hasil ini mencerminkan dedikasi dan upaya keras kami dalam memenuhi kebutuhan dan harapan penduduk Kota
                Bandung. Kami berkomitmen untuk terus meningkatkan kualitas pelayanan kami agar dapat lebih baik lagi
                dalam menjawab tantangan sosial yang dihadapi oleh masyarakat kami."
              </p>
            </div>
            <div className="rounded-xl shadow-lg overflow-hidden">
              <Image
                src="https://dinsos.bandung.go.id/assets/images/contentBeranda/SKM_Dinsos.png"
                alt="Indeks Kepuasan Masyarakat"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Public Information Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Layanan Informasi Publik</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-gradient-to-r from-cyan-400 to-cyan-200 h-48 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="LAPOR!"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <CardHeader>
                <CardTitle>Layanan Aspirasi dan Pengaduan Online Rakyat</CardTitle>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Lihat Disini <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-gradient-to-r from-cyan-400 to-cyan-200 h-48 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="ELHKPN"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <CardHeader>
                <CardTitle>Laporan Harta Kekayaan Pejabat</CardTitle>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Lihat Disini <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-gradient-to-r from-cyan-400 to-cyan-200 h-48 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Permohonan Informasi Publik"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <CardHeader>
                <CardTitle>Permohonan Informasi Publik Online</CardTitle>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Lihat Disini <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles and News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Artikel dan Berita</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="News Image"
                width={600}
                height={300}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle>Kegiatan Bakti Sosial di Kecamatan Rancasari</CardTitle>
                <CardDescription>12 Maret 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dinas Sosial Kota Bandung mengadakan kegiatan bakti sosial untuk membantu masyarakat yang membutuhkan
                  di Kecamatan Rancasari...
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Baca Selengkapnya</Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="News Image"
                width={600}
                height={300}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle>Program Bantuan Sosial untuk Lansia</CardTitle>
                <CardDescription>5 Maret 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dinas Sosial Kota Bandung meluncurkan program bantuan sosial baru yang ditujukan untuk meningkatkan
                  kesejahteraan lansia...
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Baca Selengkapnya</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button>Lihat Semua Berita</Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-cyan-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold">Location:</h3>
                    <p className="text-gray-600">
                      Jl. Babakan Karet (Belakang Rusunawa Rancacili) Kel. Derwati Kec. Rancasari
                      <br />
                      Kota Bandung 40292
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-cyan-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold">Email:</h3>
                    <p className="text-gray-600">dinsos.bandung.go.id</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-cyan-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold">Hotline WA (Chat Only):</h3>
                    <p className="text-gray-600">0812-2174-2841</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                width="100%" 
                height="100%" 
                id="gmap_canvas" 
                src="https://maps.google.com/maps?q=dinsos kota bandung&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

