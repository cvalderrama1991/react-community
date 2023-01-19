import Button from "../components/Button"
import Card from "../components/Card"
import { ReactLogoInside, ReactLogoOutside } from "../svg"
import { FaArrowRight } from "react-icons/fa"
import { useState } from "react"

export default function Home() {
  const [showSubcription, setShowSubcription] = useState(false)
  return (
    <>
      <section className="bg-white dark:bg-black h-[calc(100vh-192px)] container flex justify-center items-center">
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="font-bold text-lg">React ATX</h1>
          <h2 className="font-semibold text-4xl">
            Join Austins React Community
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            incidunt commodi corrupti ratione odit aliquid accusantium, possimus
            nemo odio recusandae eum debitis, fuga molestiae facere illum
            nostrum inventore cupiditate. Quisquam eos pariatur dicta voluptatem
            error recusandae, libero consectetur iusto esse vero doloremque
            quasi, placeat dignissimos repellendus obcaecati blanditiis eum
            provident?
          </p>
          <Button text="Join Now" />
        </div>
        <div>
          <div className="relative flex items-center justify-center">
            <ReactLogoOutside className="absolute" />
            <ReactLogoInside className="absolute" />
          </div>
        </div>
      </section>
      <section className="min-h-screen container mx-auto">
        <h2 className="text-5xl text-center">About our Community</h2>
        <p className="max-w-3xl mx-auto my-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          architecto voluptas, vitae tempore, accusamus doloremque itaque
          doloribus cumque quidem iure ut commodi. A, sint pariatur,
          consequuntur, nostrum quo ipsam corporis nihil eaque assumenda sunt
          officiis nisi quod. Nulla veniam ipsa deserunt, nihil illo iusto
          eligendi id dignissimos porro animi quasi?
        </p>
        <ul className="grid grid-cols-3 gap-4">
          <li>
            <Card
              img="https://"
              imgName="image"
              title="What do we do?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!"
            />
          </li>
          <li>
            <Card
              img="https://"
              imgName="image"
              title="What do we do?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!"
            />
          </li>
          <li>
            <Card
              img="https://"
              imgName="image"
              title="What do we do?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!"
            />
          </li>
        </ul>
      </section>
      <section className="container mx-auto min-h-screen bg-blue-light">
        <div className="p-4">
          <h2 className="text-white text-4xl">Join the Community</h2>
          <p className="text-white py-4">
            Subscribe to our newsletter and get notified of upcoming events.
          </p>
          <form className="border-2 border-white">
            <input
              type="email"
              name=""
              id=""
              className="py-2 px-1 w-full max-w-md"
            />
            <button type="submit" className="bg-white py-2 px-4">
              <FaArrowRight />
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
