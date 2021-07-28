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
      <div className="w-full bg-dark">
        <div className="mx-auto px-4 pt-10 sm:pt-28 bg-dark">
          <h1 className="text-2xl sm:text-4xl font-semibold text-white text-center">
            TODO Subtitle
          </h1>
        </div>
        <div className="w-full mx-auto grid grid-flow-col lg:grid-cols-4 lg:grid-rows-1 grid-rows-2 grid-cols-2 my-5 lg:my-20 gap-5 lg:gap-10 px-10 pt-20">
          <div className="flex flex-row">
            <div className="flow-root bg-dark_contrast rounded-lg px-8 pb-8">
              <div className="-mt-16 mx-auto text-center">
                <div
                  className="inline-flex items-center justify-center rounded-full shadow-lg relative overflow-hidden bg-primary"
                  style={{ width: '123px', height: '123px' }}
                >
                  IMG
                </div>{' '}
                <h3 className="mt-2 text-lg font-semibold text-white tracking-tight">
                  Wallet
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Download the official wallet to help you get into the
                  ecosystem
                </p>
                <div className="rounded-md shadow-lg mt-4">
                  <a
                    href="#"
                    className="bg-gradient-to-r from-secondary to-primary text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
                  >
                    Download Wallet
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flow-root bg-dark_contrast rounded-lg px-8 pb-8">
              <div className="-mt-16 mx-auto text-center">
                <div
                  className="inline-flex items-center justify-center rounded-full shadow-lg relative overflow-hidden bg-primary"
                  style={{ width: '123px', height: '123px' }}
                >
                  IMG
                </div>{' '}
                <h3 className="mt-2 text-lg font-semibold text-white tracking-tight">
                  Shop
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Enter the shop and purchase thousands of products
                </p>
                <div className="rounded-md shadow-lg mt-4">
                  <a
                    href="#"
                    className="bg-gradient-to-r from-secondary to-primary text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
                  >
                    Explore Shop
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flow-root bg-dark_contrast rounded-lg px-8 pb-8">
              <div className="-mt-16 mx-auto text-center">
                <div
                  className="inline-flex items-center justify-center rounded-full shadow-lg relative overflow-hidden bg-primary"
                  style={{ width: '123px', height: '123px' }}
                >
                  IMG
                </div>{' '}
                <h3 className="mt-2 text-lg font-semibold text-white tracking-tight">
                  Stake
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Help candidates and delegate your coins to support the network
                </p>
                <div className="rounded-md shadow-lg mt-4">
                  <a
                    href="#"
                    className="bg-gradient-to-r from-secondary to-primary text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
                  >
                    Enter App
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flow-root bg-dark_contrast rounded-lg px-8 pb-8">
              <div className="-mt-16 mx-auto text-center">
                <div
                  className="inline-flex items-center justify-center rounded-full shadow-lg relative overflow-hidden bg-primary"
                  style={{ width: '123px', height: '123px' }}
                >
                  IMG
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white tracking-tight">
                  Merchants
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Deploy your own Point-of-Sale to accept tokens as a payment
                </p>
                <div className="rounded-md shadow-lg mt-4">
                  <a
                    href="#"
                    className="bg-gradient-to-r from-secondary to-primary text-white w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md"
                  >
                    Enter App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-dark">
        <div className="mx-auto pb-4 bg-dark">
          <h1 className="text-2xl sm:text-4xl font-semibold text-white text-center">
            Partners
          </h1>
        </div>
        <div className="max-w-6xl pt-10 pb-32 mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            <a
              href="https://yearn.finance/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row space-x-6">
                <div className="flow-root rounded-lg mx-auto">
                  <div className="mx-auto text-center">
                    <span className="text-white">IMG</span>
                    <p className="mt-2 text-base text-gray-500">
                      Yearn Finance
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://cream.finance/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row space-x-6">
                <div className="flow-root rounded-lg mx-auto">
                  <div className="mx-auto text-center">
                    <span className="text-white">IMG</span>
                    <p className="mt-2 text-base text-gray-500">
                      CREAM Finance
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://aave.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row space-x-6">
                <div className="flow-root rounded-lg mx-auto">
                  <div className="mx-auto text-center">
                    <span className="text-white">IMG</span>
                    <p className="mt-2 text-base text-gray-500">Aave</p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://pickle.finance/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row space-x-6">
                <div className="flow-root rounded-lg mx-auto">
                  <div className="mx-auto text-center">
                    <span className="text-white">IMG</span>
                    <p className="mt-2 text-base text-gray-500">
                      Pickle Finance
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://akropolis.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row space-x-6">
                <div className="flow-root rounded-lg mx-auto">
                  <div className="mx-auto text-center">
                    <span className="text-white">IMG</span>
                    <p className="mt-2 text-base text-gray-500">Akropolis</p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://keep3r.network/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row space-x-6">
                <div className="flow-root rounded-lg mx-auto">
                  <div className="mx-auto text-center">
                    <span className="text-white">IMG</span>
                    <p className="mt-2 text-base text-gray-500">
                      Keep3r Network
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
)

export default Home
