import Link from "next/link";
import React from "react";

function Card() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
            voor al uw afbouw
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Heeft u een stuc of spuitwerk klus?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Wij zijn gespecialiseerd in het stucen en spuiten voor kleine en
            grote projecten.
          </p>
          <section class="text-gray-700 body-font border-t border-gray-200">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-0"></div>
              <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/3">
                  <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div class="flex items-center mb-3">
                      <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 class="text-gray-900 text-lg title-font font-medium">
                        Stucwerk
                      </h2>
                    </div>
                    <div class="flex-grow">
                      <p class="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3">
                  <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div class="flex items-center mb-3">
                      <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <h2 class="text-gray-900 text-lg title-font font-medium">
                        The Catalyzer
                      </h2>
                    </div>
                    <div class="flex-grow">
                      <p class="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3">
                  <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div class="flex items-center mb-3">
                      <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                      </div>
                      <h2 class="text-gray-900 text-lg title-font font-medium">
                        Neptune
                      </h2>
                    </div>
                    <div class="flex-grow">
                      <p class="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="text-gray-700 body-font border-t border-gray-200">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
              <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                <img
                  alt="feature"
                  class="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/600x600/edf2f7/a5afbd"
                />
              </div>
              <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                <div class="flex flex-col mb-10 lg:items-start items-center">
                  <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                      Shooting Stars
                    </h2>
                    <p class="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                    <a class="mt-3 text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="flex flex-col mb-10 lg:items-start items-center">
                  <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                      The Catalyzer
                    </h2>
                    <p class="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                    <a class="mt-3 text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="flex flex-col mb-10 lg:items-start items-center">
                  <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                      Neptune
                    </h2>
                    <p class="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                    <a class="mt-3 text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Card;
