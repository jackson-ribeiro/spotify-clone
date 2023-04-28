import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, List, MonitorSpeaker, Volume, Maximize2 } from 'lucide-react'
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

          <h1 className="font-semibold text-3xl mt-10">Boa Noite</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className="bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors">
              <Image src= "/albumColdplay.jpg" width={110} height={110} alt='Álbum da banda Coldplay' />
              <strong>Music Of The Spheres</strong>
              <button className ="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors">
              <Image src= "/albumColdplay2.jpg" width={110} height={110} alt='Álbum da banda Coldplay' />
              <strong>Parachutes</strong>
              <button className ="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors">
              <Image src= "/albumColdplay3.jpg" width={110} height={110} alt='Álbum da banda Coldplay' />
              <strong>Ghost Stories</strong>
              <button className ="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors">
              <Image src= "/albumColdplay4.jpg" width={110} height={110} alt='Álbum da banda Coldplay' />
              <strong>A Head Full Of Dreams</strong>
              <button className ="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors">
              <Image src= "/albumColdplay5.jpg" width={110} height={110} alt='Álbum da banda Coldplay' />
              <strong>A Rush of Blood to the Head</strong>
              <button className ="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors">
              <Image src= "/albumColdplay6.jpg" width={110} height={110} alt='Álbum da banda Coldplay' />
              <strong>Mylo Xyoto</strong>
              <button className ="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">Feito para Jackson Ribeiro</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="" className="bg-white/5 p-2 rounded flex flex-col gap-2 hover:bg-white/10">
              <Image src= "/albumColdplay.jpg" className = "w-full" width={120} height={120} alt='Álbum da banda Coldplay' />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-xs text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className="bg-white/5 p-2 rounded flex flex-col gap-2 hover:bg-white/10">
              <Image src= "/albumColdplay.jpg" className = "w-full" width={120} height={120} alt='Álbum da banda Coldplay' />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-xs text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className="bg-white/5 p-2 rounded flex flex-col gap-2 hover:bg-white/10">
              <Image src= "/albumColdplay.jpg" className = "w-full" width={120} height={120} alt='Álbum da banda Coldplay' />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-xs text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className="bg-white/5 p-2 rounded flex flex-col gap-2 hover:bg-white/10">
              <Image src= "/albumColdplay.jpg" className = "w-full" width={120} height={120} alt='Álbum da banda Coldplay' />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-xs text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className="bg-white/5 p-2 rounded flex flex-col gap-2 hover:bg-white/10">
              <Image src= "/albumColdplay.jpg" className = "w-full" width={120} height={120} alt='Álbum da banda Coldplay' />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-xs text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/albumColdplay.jpg" width={56} height={56} alt="Álbum da banda Coldplay" />
          <div className="flex flex-col">
            <strong className="font-normal">Higher Power</strong>
            <span className="text-xs text-zinc-400">Coldplay</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle  size = {20} className="text-zinc-200" />
            <SkipBack size = {20} className="text-zinc-200" />

            <button className ="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>

            <SkipForward size = {20} className="text-zinc-200" />
            <Repeat size = {20} className="text-zinc-200" />
          </div>
          <div className = "flex items-center gap-2">
            <span className = "text-xs text-zinc-400">1:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className = "text-xs text-zinc-400">3:26</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2 size = {20} />
          <List size = {20} />
          <MonitorSpeaker size = {20} />
          <div className="flex items-center gap-2">
            <Volume size = {20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size = {20} />
        </div>
      </footer>
    </div>
  )
}