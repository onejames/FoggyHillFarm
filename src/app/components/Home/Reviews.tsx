"use client"

import React from 'react'

import { useRef, useEffect } from 'react'

import Image from 'next/image'

import { Carousel } from 'flowbite';
import type { CarouselItem, CarouselOptions, InstanceOptions, CarouselInterface } from 'flowbite';

const Reviews = () => {
    const carouselElement = useRef<HTMLDivElement>(null);
    const carouselItem1 = useRef<HTMLDivElement>(null);
    const carouselItem2 = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
        const items: CarouselItem[] = [
            { position: 0, el: carouselItem1.current!, },
            { position: 1, el: carouselItem2.current!, },
        ];

        // const carousel: CarouselInterface = new Carousel(carouselElement.current, items); //, options, instanceOptions);    
        // carousel.cycle();
    }, []);
    
  return (
    <div ref={carouselElement} className="relative w-full">
        {/* <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div ref={carouselItem1} className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image alt="Picture" width="200" height="300"
              src="/img/foggy.jpeg"
              className="rounded-box absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </div>
            <div ref={carouselItem2} className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image alt="Picture" width="200" height="300"
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              className="rounded-box absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </div>
        </div>  */}

        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div ref={carouselItem1} className="hidden duration-700 ease-in-out" data-carousel-item>
            <figure className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 mx-auto text-center my-10">
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

          <div ref={carouselItem2} className="hidden duration-700 ease-in-out" data-carousel-item>
            <figure className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 mx-auto text-center">
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
        </div>

      </div>
  )
}

export default Reviews