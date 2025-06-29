import './globals.css'
import { Inter } from 'next/font/google'
import { Menu } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Imtiyaz.dev | Portfolio',
  description: 'Showcasing projects, skills & DevOps magic',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        <header className="shadow-md bg-white">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-emerald-900">Imtiyaz.dev</h1>

            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-6 text-sm font-medium">
              <li><a href="#">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="flex items-center space-x-4">
              {/* Avatar */}
              <Avatar>
                <AvatarImage src="/avatar.jpeg" alt="You" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>

              {/* Mobile Menu */}
              <div className="md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-150"
                    >
                      <Menu size={20} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="mt-2 p-2 bg-white border border-gray-200 rounded-lg shadow-lg
                              animate-slide-down min-w-[8rem] z-50"
                  >
                    <DropdownMenuItem
                      asChild
                      className="px-3 py-2 rounded-md hover:bg-purple-50 hover:text-purple-700
                                transition-colors duration-150"
                    >
                      <a href="#">Home</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      asChild
                      className="px-3 py-2 rounded-md hover:bg-purple-50 hover:text-purple-700
                                transition-colors duration-150"
                    >
                      <a href="#projects">Projects</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      asChild
                      className="px-3 py-2 rounded-md hover:bg-purple-50 hover:text-purple-700
                                transition-colors duration-150"
                    >
                      <a href="#contact">Contact</a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </nav>
        </header>

        <main className="container mx-auto py-8">{children}</main>

        <footer className="text-center text-sm text-gray-500 mt-12 pb-6">
          © {new Date().getFullYear()} Ahmad Imtiyaz. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
