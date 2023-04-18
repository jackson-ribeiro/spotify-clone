import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'


export default function Home() {
  return (
    <div className = "h-screen flex flex-col">
      <div className = "flex flex-1">
        <aside className= "w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
          </div>
          <nav className= "space-y-5">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon />
              Início
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Buscar
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Sua Biblioteca
            </a>
          </nav>
          <nav className='mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Coldplay RIO 25/03/2023</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>FIFA 23 Official Soundtrack</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Best 70s Songs Ever</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>As mais tocadas no seu 2022</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>This is Coldplay</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>This is The Weeknd</a>
          </nav>
        </aside>
        <main className = "flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-bold text-4xl mt-10">Boa Noite</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className="bg-white/10 rounded flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors">
              <Image src= "/albumColdplay.jpg" width={110} height={110} alt='Álbum da banda Coldplay' />
              <strong>Music Of The Spheres</strong>
            </a>
            <a href="#" className="bg-white/10 rounded flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors">
              <Image src= "/albumColdplay2.jpg" width={110} height={110} alt='Álbum da banda Coldplay' />
              <strong>Parachutes</strong>
            </a>
            <a href="#" className="bg-white/10 rounded flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors">
              <Image src= "/albumColdplay3.jpg" width={110} height={110} alt='Álbum da banda Coldplay' />
              <strong>Ghost Stories</strong>
            </a>
            <a href="#" className="bg-white/10 rounded flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors">
              <Image src= "/albumColdplay4.jpg" width={110} height={110} alt='Álbum da banda Coldplay' />
              <strong>A Head Full Of Dreams</strong>
            </a>
            <a href="#" className="bg-white/10 rounded flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors">
              <Image src= "/albumColdplay5.jpg" width={110} height={110} alt='Álbum da banda Coldplay' />
              <strong>A Rush of Blood to the Head</strong>
            </a>
            <a href="#" className="bg-white/10 rounded flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors">
              <Image src= "/albumColdplay6.jpg" width={110} height={110} alt='Álbum da banda Coldplay' />
              <strong>Mylo Xyoto</strong>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  )
}