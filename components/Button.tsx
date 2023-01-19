import React from "react"

export default function Button({ text }: { text: string }) {
  return (
    <>
      <button className="bg-blue-light text-white text-lg hover:text-neutral-700 hover:bg-white border-2 border-blue-light px-8 py-2 w-max">
        {text}
      </button>
    </>
  )
}
