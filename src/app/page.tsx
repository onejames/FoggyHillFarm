
import FoggyImage from "../../public/img/foggy.jpeg"

import FeaturedProducts from './components/Product/FeaturedProducts';

export default function Home() {
  return (
      <main className="">

        {/* Hero */}
        <div className="my-2"> 
          <div className="hero" style={{backgroundImage: `url(${FoggyImage.src})` }} >
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

      <div>
        <section className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 m-4 p-10 bg-slate-100">
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
    </main>
  );
}
