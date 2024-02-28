import Image from 'next/image'
import Ingredients from './components/Ingredients'
import Instructions from './components/Instructions'
import Nutrition from './components/Nutrition'
import Preparation from './components/Preparation'

export default function Home() {
  return (
    <main className="flex min-h-screen text-[16px] flex-col items-center justify-center bg-eggShell">
      <div className="bg-white max-w-[736px] md:px-10 md:pt-10 md:m-20 md:rounded-3xl">
        <div className='rounded-xl w-full h-[171px] md:h-[300px] bg-[url("/images/image-omelette.jpeg")] bg-center bg-cover'></div>
        <div className="px-8 py-10 md:px-0 space-y-8">
          <div className="space-y-6">
            <h1 className="text-[36px] md:text-[40px] text-darkCharcoal">
              Simple Omelette Recipe
            </h1>
            <p className="text-wengeBrown">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
          <Preparation />
          <Ingredients />
          <hr />
          <Instructions />
          <hr />
          <Nutrition />
        </div>
      </div>
    </main>
  )
}
