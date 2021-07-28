import Navbar from '../components/NavBar'
import React from 'react'
import Footer from '../components/Footer'

export const Home = (): JSX.Element => (
  <>
    <Navbar />
    <main>
      <div className="relative h-screen flex content-center items-center justify-center hero-header">
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <h1 className="text-white font-semibold text-5xl">
                Join the payments revolution
              </h1>
              <p className="mt-6 lg:w-8/12 text-lg mx-auto text-white">
                Stake, swap, trade and engage with a vibrant community building
                the future of payments.
              </p>
            </div>
          </div>
          <div className="w-5/6 pt-5 sm:flex sm:justify-center mx-auto">
            <div className="rounded-md shadow-lg">
              <a
                href="#start"
                className="bg-gradient-to-r from-secondary to-primary text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="absolute w-5/6 left-1/2 transform -translate-x-1/2 grid grid-flow-col lg:grid-cols-4 lg:grid-rows-1 grid-rows-2 grid-cols-2 my-5 lg:my-20 gap-5 lg:gap-10">
            <div className="text-center rounded-lg bg-dark_contrast_transparent shadow-blue-glow">
              <div className="my-5 lg:my-10">
                <p className="text-white text-2xl lg:text-4xl">$0.56</p>
                <p className="text-gray-400 text-sm uppercase font-bold mt-1">
                  Price
                </p>
              </div>
            </div>
            <div className="text-center rounded-lg bg-dark_contrast_transparent shadow-blue-glow">
              <div className="my-5 lg:my-10">
                <p className="text-white text-2xl lg:text-4xl">12,493</p>
                <p className="text-gray-400 text-sm uppercase font-bold mt-1">
                  Users
                </p>
              </div>
            </div>
            <div className="text-center rounded-lg bg-dark_contrast_transparent shadow-blue-glow">
              <div className="my-5 lg:my-10">
                <p className="text-white text-2xl lg:text-4xl">200,000</p>
                <p className="text-gray-400 text-sm uppercase font-bold mt-1">
                  Transactions
                </p>
              </div>
            </div>
            <div className="text-center rounded-lg bg-dark_contrast_transparent shadow-blue-glow">
              <div className="my-5 lg:my-10">
                <p className="text-white text-2xl lg:text-4xl">545</p>
                <p className="text-gray-400 text-sm uppercase font-bold mt-1">
                  Merchants
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-dark">
        <div className="max-w-3xl mx-auto px-4 pt-10 sm:pt-28 pb-4 bg-dark">
          <h1 className="text-2xl sm:text-4xl font-semibold text-white text-center">
            About
          </h1>
        </div>
      </div>
      <div id="start" className="w-full bg-dark">
        <div className="max-w-3xl mx-auto px-4 pt-10 sm:pt-28 pb-4 bg-dark">
          <h1 className="text-2xl sm:text-4xl font-semibold text-white text-center">
            Explore the main tools on the network.
          </h1>
        </div>
        <div className="w-5/6 mx-auto">
          <div className="flex flex-row space-x-6 items-center px-10 pt-20 pb-8 overflow-x-scroll no-scrollbar">
            <div className="flex flex-row space-x-6 lg:pl-10">
              <div
                className="flow-root bg-dark_contrast rounded-lg px-8 pb-8"
                style={{ width: '281px', height: '250px' }}
              >
                <div className="-mt-16 mx-auto text-center">
                  <div
                    className="inline-flex items-center justify-center rounded-full shadow-lg relative overflow-hidden"
                    style={{
                      backgroundImage:
                        'linear-gradient(224.43deg, rgb(13, 4, 21) -16.69%, rgb(27, 33, 82) 86.36%)',
                      backgroundPosition: 'center bottom',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      width: '123px',
                      height: '123px',
                    }}
                  >
                    <i className="text-white fas fa-3x fa-gifts" />
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-white tracking-tight">
                    Shop
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Enter the self-service shop and access hundresds of
                    products.
                  </p>
                  <div className="rounded-md shadow-lg mt-4">
                    <a
                      href="https://shop.polispay.com"
                      className="bg-gradient-to-r from-secondary to-primary text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-6">
              <div
                className="flow-root bg-dark_contrast rounded-lg px-8 pb-8"
                style={{ width: '281px', height: '250px' }}
              >
                <div className="-mt-16 mx-auto text-center">
                  <div
                    className="inline-flex items-center justify-center rounded-full shadow-lg relative overflow-hidden"
                    style={{
                      backgroundImage:
                        'linear-gradient(224.43deg, rgb(13, 4, 21) -16.69%, rgb(27, 33, 82) 86.36%)',
                      backgroundPosition: 'center bottom',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      width: '123px',
                      height: '123px',
                    }}
                  >
                    <i className="text-white fas fa-3x fa-wallet" />
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-white tracking-tight">
                    Wallet
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Get the mobile wallet to store your tokens safely.
                  </p>
                  <div className="rounded-md shadow-lg mt-4">
                    <a
                      href="https://polispay.com"
                      className="bg-gradient-to-r from-secondary to-primary text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-6">
              <div
                className="flow-root bg-dark_contrast rounded-lg px-8 pb-8"
                style={{ width: '281px', height: '250px' }}
              >
                <div className="-mt-16 mx-auto text-center">
                  <div
                    className="inline-flex items-center justify-center rounded-full shadow-lg relative overflow-hidden"
                    style={{
                      backgroundImage:
                        'linear-gradient(224.43deg, rgb(13, 4, 21) -16.69%, rgb(27, 33, 82) 86.36%)',
                      backgroundPosition: 'center bottom',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      width: '123px',
                      height: '123px',
                    }}
                  >
                    <i className="text-white fas fa-3x fa-cash-register" />
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-white tracking-tight">
                    Point Of Sale
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Deploy your own Point-Of-Sale and start accepting tokens.
                  </p>
                  <div className="rounded-md shadow-lg mt-4">
                    <a
                      href="https://pos.polispay.com"
                      className="bg-gradient-to-r from-secondary to-primary text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
                    >
                      Deploy
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-6">
              <div
                className="flow-root bg-dark_contrast rounded-lg px-8 pb-8"
                style={{ width: '281px', height: '250px' }}
              >
                <div className="-mt-16 mx-auto text-center">
                  <div
                    className="inline-flex items-center justify-center rounded-full shadow-lg relative overflow-hidden"
                    style={{
                      backgroundImage:
                        'linear-gradient(224.43deg, rgb(13, 4, 21) -16.69%, rgb(27, 33, 82) 86.36%)',
                      backgroundPosition: 'center bottom',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      width: '123px',
                      height: '123px',
                    }}
                  >
                    <i className="text-white fas fa-3x fa-coins" />
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-white tracking-tight">
                    Stake
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Enter the the dApp and support the network with your tokens.
                  </p>
                  <div className="rounded-md shadow-lg mt-4">
                    <a
                      href="https://stake.polis.tech"
                      className="bg-gradient-to-r from-secondary to-primary text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
                    >
                      Enter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
)

export default Home
