
import Image from 'next/image'

import FoggyImage from "../../public/img/foggy.jpeg"

import FeaturedProducts from './components/Product/FeaturedProducts';

export default function Home() {
  return (
      <main className="">

        {/* Hero */}
        <div className="my-2"> 
          <div className="hero " style={{backgroundImage: `url(${FoggyImage.src})` }} >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="h-96 hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Welcome to Foggy Hill Farm < br/>
                located in Bloomington Indiana
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-bold">Im glad you foud us!</h2>
      <p className="my-2">
        Family farms can be wonderful things. 
        They instill a deep connection to the land and a strong work ethic in younger generations. Our farm isn&apos;t just any place, it&apos;s a family legacy. 
        Here, under sprawling skies, we laugh together over bountiful harvests and brainstorm solutions during tough seasons. 
        It&apos;s a constant dance with nature, but the rewards are sweeter than anything store-bought. 
        We take pride in raising healthy food, knowing it nourishes our family, our community, and connects us all to the land.
      </p>

      <div>
          <FeaturedProducts />
      </div>

      {/* Comments */}
      <div>
        <section className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 m-4 p-10 bg-slate-100 rounded">
            <p className="p-3" >
              This jam is bursting with flavor! Made with wild Maine blueberries, it has a delightful balance of sweetness and tartness. The reviews consistently mention the intense blueberry flavor and the perfect amount of sugar [1]. Spread it on toast, pancakes, or enjoy it on its own for a delicious treat.
            </p>
            <p className="p-3" >
              Looking for a sophisticated taste? La Trinquelinette Three Citrus Jam is a gourmet option made with a well-balanced mix of lemon, grapefruit, and orange. This small-batch jam is cooked in a copper basin using fruit grown without fertilizers [2]. With a perfect balance of sweet and tart, it has a near perfect rating of 4.76 out of 5 stars based on user reviews 
            </p>
            <p className="p-3" >
              If you&apos;re watching your sugar intake, Good Good Blueberry Jam is a delicious option. Made with stevia as a sweetener, it boasts a low-calorie and low-carb content  that fits perfectly into a keto diet [3]. Users love the taste, with Good Good Blueberry Jam.
            </p>
        </section>
      </div>

      {/* reviews */}
      <div>
        <figure className="max-w-screen-md mx-auto text-center my-10">
          <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
          </svg>
          <blockquote>
              <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                  <cite className="pe-3 font-medium text-gray-900 dark:text-white">Michael Gough</cite>
                  <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
              </div>
          </figcaption>
        </figure>
        <div className="divider"></div>
        <figure className="max-w-screen-md mx-auto text-center">
          <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
          </svg>
          <blockquote>
              <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                  <cite className="pe-3 font-medium text-gray-900 dark:text-white">Michael Gough</cite>
                  <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
              </div>
          </figcaption>
        </figure>
      </div>

      {/* Photo scroller */}
      <div>
        <div className="carousel carousel-center m-4 bg-slate-100 rounded-box space-x-4 p-4">
          <div className="carousel-item">
            <Image alt="Picture" width="200" height="300"
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              className="rounded-box" />
          </div>
          <div className="carousel-item">
            <Image alt="Picture" width="200" height="300"
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              className="rounded-box" />
          </div>
          <div className="carousel-item">
            <Image alt="Picture" width="200" height="300"
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="rounded-box" />
          </div>
          <div className="carousel-item">
            <Image alt="Picture" width="200" height="300"
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              className="rounded-box" />
          </div>
          <div className="carousel-item">
            <Image alt="Picture" width="200" height="300"
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              className="rounded-box" />
          </div>
          <div className="carousel-item">
            <Image alt="Picture" width="200" height="300"
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              className="rounded-box" />
          </div>
          <div className="carousel-item">
            <Image alt="Picture" width="200" height="300"
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              className="rounded-box" />
          </div>
        </div>
      </div>
    </main>
  );
}
