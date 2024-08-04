import React from 'react'

const faq = () => {
  return (
    <section className=''>
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Common Questions</h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">Here at the farm we understand everyone has questions about where their food is comming from. We are here to answer that.</p>

            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
                <div>
                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                            Can I buy fresh produce directly?
                        </h3>
                        <p className="text-gray-500 ">
                            If it is seasonally approprate for the type of produce, and you can pick it up locally, please contact us for deatils. Unfortunitally we are unable to ship fresh produce.
                        </p>
                    </div>

                    <div className="mb-10">                        
                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                            How do i know I am getting a consistant product?
                        </h3>
                        <p className="text-gray-500 ">
                            Because of the small production ammounts most of our products are made in multiple batches. We do our best to ensure everything is constant and up to our highest standards, however we are not always able to prodict the effects of outside factors like weather. If you are ay any point unhappy with an item from our shop, please contact us and we will make it right.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                            How do I know I’m getting a quality product?
                        </h3>
                        <p className="text-gray-500 ">
                            While everyones taste and preferences differ, we go out of our way to use the freshest and highest quality ingrediants in our products. We also strive to constantly recieve and respond to feedback from our patrions, imporoving every way we can.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="mb-10" >
                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                            Do you offer batch orderers? 
                        </h3>
                        <p id="batch-orders" className="text-gray-500 target:bg-purple-200 target:p-6 target:rounded-lg">
                            We do our best to provide as much inventory for our patrions as we can. Unfortunitally due to our small opperation, as well as unknown outside varrants, we are unable to fufill some very large orders. If you have any questions please contact us!
                        </p>
                    </div>

                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                            What about an organic certification?
                        </h3>
                        <p className="text-gray-500 ">
                            While we do not use any non-organic pesticies, herbicides, or ferterlizers obtaning an organic certification at the size we are is just not feasable. If you have any questions or concerns regarding our practices, please reach out!
                        </p>
                    </div>

                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                            Where are you located?
                        </h3>
                        <p className="text-gray-500 ">
                            Foggy Hill Farm is locatated just outside of Bloomington Indiana to the west, in Solsberry.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                            Does all of your produce come from the farm?
                        </h3>
                        <p className="text-gray-500 ">
                            We strive to produce and use as much as we can from our farm. Sometimes due to unforseen events we may include produce produced by some of our partners. We can assure you that any putside sourced items are produced with the same love, care, and intrgrety as our own.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </section>
  )
}

export default faq