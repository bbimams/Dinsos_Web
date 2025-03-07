"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const menuItems = [
  {
    title: "Beranda",
    href: "/",
  },
  {
    title: "Profil",
    items: [
      { title: "Sambutan Kepala Dinas", href: "#" },
      { title: "Struktur Organisasi", href: "#" },
      { title: "Sejarah-Visi-dan-Misi", href: "#" },
      { title: "Tupoksi", href: "#" },
      { title: "Program-Kegiatan", href: "#" },
      { title: "Daftar-Pegawai", href: "#" },
    ],
  },
  {
    title: "PPID",
    items: [
      { title: "Profil PPID", href: "#" },
      { title: "Informasi Publik", href: "#" },
      { title: "Laporan", href: "#" },
    ],
  },
  {
    title: "Berita",
    href: "#",
  },
  {
    title: "Galeri",
    items: [
      { title: "Foto", href: "#" },
      { title: "Video", href: "#" },
    ],
  },
  {
    title: "Publikasi",
    items: [
      { title: "Dokumen", href: "#" },
      { title: "Pengumuman", href: "#" },
    ],
  },
  {
    title: "Layanan",
    href: "#",
  },
  {
    title: "Pengaduan",
    href: "#",
  },
  {
    title: "Kontak",
    href: "#",
  },
]

const ListItem = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>}
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://dinsos.bandung.go.id/assets/images/logotebel.png"
              alt="Dinas Sosial Kota Bandung"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items.map((subItem) => (
                            <ListItem key={subItem.title} title={subItem.title} href={subItem.href} />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href || "#"} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.title}</NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[350px] p-0 [&>button]:hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <Image
                  src="https://dinsos.bandung.go.id/assets/images/logotebel.png"
                  alt="Dinas Sosial Kota Bandung"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10" aria-label="Close Menu">
                    <X className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </div>
              <div className="px-4">
                <Accordion type="single" collapsible className="w-full">
                  {menuItems.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="border-b">
                      {item.items ? (
                        <>
                          <AccordionTrigger className="py-4 text-base hover:no-underline">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col space-y-2 pb-2">
                              {item.items.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  className="text-sm text-muted-foreground py-2 hover:text-primary"
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </>
                      ) : (
                        <div className="py-4">
                          <Link href={item.href || "#"} className="text-base hover:text-primary">
                            {item.title}
                          </Link>
                        </div>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

