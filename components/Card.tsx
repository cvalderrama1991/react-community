import Image from "next/image"
import React from "react"

interface CardTypes {
  img?: string
  imgName?: string
  title: string
  content: string
}

export default function Card(props: CardTypes) {
  const { imgName, img, title, content } = props
  return (
    <div className="border-2 border-blue-light p-4 flex flex-col gap-2">
      {/* <Image src={img} alt={imgName} /> */}
      <h4 className="font-bold text-center">{title}</h4>
      <p className="">{content}</p>
    </div>
  )
}
