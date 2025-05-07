'use client';

import { Linkedin, Github, Mail, Phone, DownloadCloud } from 'lucide-react';
import Link from 'next/link';

export default function Resume() {
  return (
    <div className="mt-16 h-full bg-black p-8 text-gray-100">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 border p-6 text-center">
          <h1 className="mb-2 text-3xl font-bold">Şeref</h1>
          <p className="text-xl">Genç Yazılımcı</p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          <aside>
            <section className="mb-8">
              <h2 className="mb-4 border-b pb-2 text-xl font-semibold">Detaylar</h2>
              <div className="mb-2 flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>05423652057</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>şerefmelek23@gmail.com</span>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 border-b pb-2 text-xl font-semibold">Linkler</h2>
              <ul className="space-y-2">

                <li className="flex items-center">
                  <Github className="mr-2 h-5 w-5" />
                  <a href="#" className="hover:text-blue-400">
                    GitHub
                  </a>
                </li>
                <li className="flex items-center">
                  <Linkedin className="mr-2 h-5 w-5" />
                  <a href="www.linkedin.com/in/şeref-gül-05816b364" className="hover:text-blue-400">
                    LinkedIn
                  </a>
                </li>
                
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 border-b pb-2 text-xl font-semibold">SKILLS/TRAITS</h2>
              <ul className="list-inside list-disc space-y-1">
                <li>HTML & CSS: Orta Seviye</li>
                <li>Python & PyCharm: Orta Seviye</li>
                <li>Unity & Oyun Geliştirme: Başlangıç-Orta Seviye</li>
                <li>Flutter (Mobil Programlama): Orta Seviye</li>
                <li>C#, C++ ve Java: Başlangıç</li>
                <li>Photoshop & After Effects: Başlangıç-Orta</li>
                <li>Nesne Tabanlı Programlama: Başlangıç-Orta</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 border-b pb-2 text-xl font-semibold">Hobiler</h2>
              <ul className="list-inside list-disc space-y-1">
                <li>Spor yapmak</li>
                <li>Oyun oynamak</li>
                <li>Gezmek</li>
              </ul>
            </section>
          </aside>

          <main className="md:col-span-2">
            <section className="mb-8">
              <h2 className="mb-4 border-b pb-2 text-xl font-semibold">Profil</h2>
              <p>
              04 Ocak 2009 doğumluyum. Bilgisayar parçaları, siber güvenlik, yapay zeka ve oyun tasarımıyla ilgileniyorum. İngilizcemi geliştirerek gelecekte İngiltere veya ABD'de yaşamak istiyorum.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="mb-4 border-b pb-2 text-xl font-semibold">Eğitim</h2>
              <p>
              Nef İlkokulu  : 2014 – 2018</p>
              <p>
              Hasan Ali Yücel Ortaokulu  : 2018 – 2022</p>
              <p>
              Şehit Cihan Erat Mesleki ve Teknik Anadolu Lisesi  : 2022 - Devam Ediyor

              </p>
            </section>
            
          </main>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href={'/Şeref Gül.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          locale={false}
          download
          className="inline-flex items-center rounded-md bg-[#1E1E1E] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#272727]"
        >
          <span>Download Resume</span>
          <DownloadCloud className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
