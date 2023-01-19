import Link from "next/link"
import React, { useState } from "react"
import { HeaderLogo } from "../svg"
import Button from "./Button"

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <header className="h-48 bg-white dark:bg-black text-black dark:text-white">
      <div className="flex gap-2 container mx-auto h-full items-center justify-between">
        <div>
          <Link href="/">
            <HeaderLogo />
          </Link>
        </div>
        <nav>
          <ul className="flex gap-2">
            <li>
              <Link href="/events" className="text-xl">
                Events
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-xl">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-xl">
                News
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="text-xl">
                Jobs
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <p className="text-xl">Light</p>
          <button
            className="bg-blue-light h-8 w-[58px] rounded-3xl relative"
            onClick={() => setDarkMode(!darkMode)}
          >
            <div
              className={`bg-white h-8 w-8 rounded-full border-[3px] border-blue-light absolute top-0 left-0 transition-all ${
                darkMode ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <p className="text-xl">Dark</p>
        </div>
        <Button text="Sign in" />
      </div>
    </header>
  )
}
