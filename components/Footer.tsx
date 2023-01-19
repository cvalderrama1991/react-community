import React from "react"
import { FaTwitter } from "react-icons/fa"
import { SiIndeed } from "react-icons/si"
import { BsGithub } from "react-icons/bs"

export default function Footer() {
  let currentYerar = new Date().getFullYear()
  return (
    <footer className="container mx-auto flex items-center justify-between">
      <p className="text-neutral-600">
        Webfoundation &copy; {currentYerar} / All Rights Reserved.
      </p>
      <div className="flex gap-4">
        <a href="https://twitter.com/">
          <FaTwitter size={26} />
        </a>
        <a href="https://www.indeed.com/">
          <SiIndeed size={26} />
        </a>
        <a href="https://github.com/">
          <BsGithub size={26} />
        </a>
      </div>
      <div className="flex gap-2 text-neutral-600">
        <a href="http://">Privacy Notice</a>
        <a href="http://">Cookie policy</a>
        <a href="http://">Terms of Service</a>
      </div>
    </footer>
  )
}
