import Navbar from '../components/NavBar'
import React from 'react'

export const Home = (): JSX.Element => (
  <>
    <Navbar />
    <main>
      <div className="relative h-screen flex content-center items-center justify-center bg-background">
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <h1 className="text-white font-semibold text-5xl">
                Join the payments revolution!
              </h1>
              <p className="mt-4 text-lg text-white">
                Start building into a community driven network focused in
                micropayments
              </p>
            </div>
          </div>
          <div className="items-center flex flex-wrap mt-10">
            <div className="w-full px-4 text-center"></div>
          </div>
          <div className="w-5/6 mx-auto grid grid-flow-col lg:grid-cols-4 lg:grid-rows-1 grid-rows-2 grid-cols-2 mt-10 gap-10">
            <div className="text-center rounded-lg bg-background_contrast shadow-blue-glow">
              <div className="my-10">
                <p className="text-white text-4xl ">$0.56</p>
                <p className="text-gray-400 text-sm uppercase font-bold mt-1">
                  Price
                </p>
              </div>
            </div>
            <div className="text-center rounded-lg bg-background_contrast shadow-blue-glow">
              <div className="my-10">
                <p className="text-white text-4xl">12,493</p>
                <p className="text-gray-400 text-sm uppercase font-bold mt-1">
                  Users
                </p>
              </div>
            </div>
            <div className="text-center rounded-lg bg-background_contrast shadow-blue-glow">
              <div className="my-10">
                <p className="text-white text-4xl">200,000</p>
                <p className="text-gray-400 text-sm uppercase font-bold mt-1">
                  Transactions
                </p>
              </div>
            </div>
            <div className="text-center rounded-lg bg-background_contrast shadow-blue-glow">
              <div className="my-10">
                <p className="text-white text-4xl">545</p>
                <p className="text-gray-400 text-sm uppercase font-bold mt-1">
                  Merchants
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
)

export default Home
