import React from 'react'

function CourseDetails() {
  return (
    <div class="font-sans bg-white">
    <div class="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
      <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
        <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">
          <div class="bg-white px-4 py-5 rounded-xl">
            <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product" class="rounded mx-auto" />
          </div>

          <div class="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-6 mx-auto">
            <div class="bg-gray-800 rounded-xl p-4">
              <img src="https://readymadeui.com/images/coffee3.webp" alt="Product2" class="w-20 cursor-pointer" />
            </div>
            <div class="bg-gray-800 rounded-xl p-4">
              <img src="https://readymadeui.com/images/coffee4.webp" alt="Product2" class="w-20 cursor-pointer" />
            </div>
            <div class="bg-gray-800 rounded-xl p-4">
              <img src="https://readymadeui.com/images/coffee5.webp" alt="Product2" class="w-20 cursor-pointer" />
            </div>
          </div>
        </div>

        <div class="lg:col-span-2">
          <h2 class="text-3xl font-semibold text-black">Espresso Elegante | Coffee</h2>
          <div class="flex flex-wrap gap-4 mt-4">
            <p class="text-black text-4xl font-semibold">$12</p>
            <p class="text-black text-xl"><strike>$16</strike> <span class="text-sm ml-1">Tax included</span></p>
          </div>

          <div class="flex space-x-2 mt-4">
            <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <h4 class="text-black text-base">500 Reviews</h4>
          </div>

          <div class="flex flex-wrap gap-4 mt-8">
            <button type="button" class="min-w-[200px] px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-semibold rounded">Buy now</button>
            <button type="button" class="min-w-[200px] px-4 py-2.5 border border-yellow-300 bg-transparent text-yellow-300 text-sm font-semibold rounded">Add to cart</button>
          </div>

          <div class="mt-8">
            <h3 class="text-lg font-semibold text-black">About the coffee</h3>
            <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-black">
              <li>A cup of coffee is a beverage essential because of its timeless appeal</li>
              <li>Easy to prepare. It can be brewed using various methods, from drip machines to manual pour-overs.</li>
              <li>Available in various sizes, from a standard espresso shot to a large Americano, catering to different preferences.</li>
              <li>You can customize your coffee by adding cream, sugar, or flavorings to suit your taste preferences.</li>
            </ul>
          </div>

          <div class="mt-8">
            <ul class="flex">
              <li class="text-white font-semibold text-sm bg-gray-800 py-3 px-8 border-b-2 border-yellow-300 cursor-pointer transition-all">
                Reviews</li>
              <li class="text-black font-semibold text-sm py-3 px-8 cursor-pointer">Sellter</li>
            </ul>

            <div class="mt-8">
              <h3 class="text-lg font-semibold text-white">Reviews(10)</h3>

              <div class="space-y-3 mt-4">
                <div class="flex items-center">
                  <p class="text-sm text-white font-semibold">5.0</p>
                  <svg class="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-400 rounded w-full h-2 ml-3">
                    <div class="w-2/3 h-full rounded bg-yellow-300"></div>
                  </div>
                  <p class="text-sm text-white font-semibold ml-3">66%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-white font-semibold">4.0</p>
                  <svg class="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-400 rounded w-full h-2 ml-3">
                    <div class="w-1/3 h-full rounded bg-yellow-300"></div>
                  </div>
                  <p class="text-sm text-white font-semibold ml-3">33%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-white font-semibold">3.0</p>
                  <svg class="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-400 rounded w-full h-2 ml-3">
                    <div class="w-1/6 h-full rounded bg-yellow-300"></div>
                  </div>
                  <p class="text-sm text-white font-semibold ml-3">16%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-white font-semibold">2.0</p>
                  <svg class="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-400 rounded w-full h-2 ml-3">
                    <div class="w-1/12 h-full rounded bg-yellow-300"></div>
                  </div>
                  <p class="text-sm text-white font-semibold ml-3">8%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-white font-semibold">1.0</p>
                  <svg class="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-400 rounded w-full h-2 ml-3">
                    <div class="w-[6%] h-full rounded bg-yellow-300"></div>
                  </div>
                  <p class="text-sm text-white font-semibold ml-3">6%</p>
                </div>
              </div>
            </div>

            <div class="flex items-start mt-8">
              <img src="https://readymadeui.com/team-2.webp" class="w-12 h-12 rounded-full border-2 border-white" />

              <div class="ml-3">
                <h4 class="text-sm font-semibold text-black">John Doe</h4>
                <div class="flex space-x-1 mt-1">
                  <svg class="w-4 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg class="w-4 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg class="w-4 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p class="text-xs !ml-2 font-semibold text-black">2 mins ago</p>
                </div>
                <p class="text-xs mt-4 text-black">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
              </div>
            </div>

            <button type="button" class="w-full text-black mt-8 px-4 py-2.5 bg-transparent border border-blue-500 font-semibold rounded">Read all reviews</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CourseDetails