import Link from 'next/link'
import React from 'react'

import Image from 'next/image'

const aboutUs = () => {
  return (
    <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">About Foggy Hill Farm</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

        <div className='grid grid-cols-2'>
            <div> <Image src="/img/about-us/fam.jpeg" alt="Family" width="600" height="600" /> </div>
            <div className='bg-amber-100 flex justify-center items-center'>Family</div>

            <div className='bg-amber-100 flex justify-center items-center'>Christian</div>
            <div> <Image src="/img/about-us/christian.jpeg" alt="Horse" width="600" height="600" /> </div>

            <div> <Image src="/img/about-us/bbg.jpeg" alt="Horse" width="600" height="600" /> </div>
            <div className='bg-amber-100 flex justify-center items-center'>BBG</div>

            <div className='bg-amber-100 flex justify-center items-center'>Minis</div>
            <div>  <Image src="/img/about-us/minis.jpeg" alt="Minis" width="600" height="600" />  </div>

            <div> <Image src="/img/about-us/chickens.jpeg" alt="Chickens" width="600" height="600" /> </div>
            <div className='bg-amber-100 flex justify-center items-center'>Chickens</div>

            <div className='bg-amber-100 flex justify-center items-center'>Ducks</div>
            <div>  <Image src="/img/about-us/ducks.jpeg" alt="Ducks" width="600" height="600" />  </div>

            <div>  <Image src="/img/about-us/dogs.jpeg" alt="Dogs" width="600" height="600" />  </div>
            <div className='bg-amber-100 flex justify-center items-center'>Dogs</div>

            <div className='bg-amber-100 flex justify-center items-center'>Bees</div>
            <div>  <Image src="/img/about-us/bees.jpeg" alt="Bees" width="600" height="600" />  </div>

            <div> <Image src="/img/about-us/james.jpeg" alt="James" width="600" height="600" /> </div>
            <div className='bg-amber-100 flex justify-center items-center'>James</div>

            <div className='bg-amber-100 flex justify-center items-center'>Lenora</div>
            <div> <Image src="/img/about-us/lenora.jpeg" alt="Sebastian" width="600" height="600" /> </div>

            <div> <Image src="/img/about-us/dill.jpeg" alt="Dillinger" width="600" height="600" /> </div>
            <div className='bg-amber-100 flex justify-center items-center'>Dill</div>

            <div className='bg-amber-100 flex justify-center items-center'>Ian</div>
            <div> <Image src="/img/about-us/ian.jpeg" alt="Sebastian" width="600" height="600" /> </div>
            
            <div> <Image src="/img/about-us/finn.jpeg" alt="Finn" width="600" height="600" /> </div>
            <div className='bg-amber-100 flex justify-center items-center'>Finn</div>
        </div>

        <p className='py-4'>
            Want to know more? maybe our 
            <Link className="mx-1 font-medium underline text-primary-600 hover:no-underline" href="/faq">FAQ</Link> 
            can help. Or you can always 
            <Link className="mx-1 font-medium underline text-primary-600 hover:no-underline" href="/contact-us">Contact Us</Link> 
        </p>
    </div>
  )
}

export default aboutUs