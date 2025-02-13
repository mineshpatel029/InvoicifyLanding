import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[28%] h-full bg-emerald-500 z-0" />

        <header className="relative z-10 flex items-center justify-between px-3 py-3 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Image src="/Logo.png" alt="" width={35} height={35} />
            <span className="text-xl font-semibold">Invoicify</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-white hover:text-gray-200 transition-colors">Log In</button>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              Sign Up
            </button>
          </div>
        </header>

        <div className="relative z-10 px-6 lg:px-8 max-w-7xl mx-auto h-[calc(100vh-76px)]">
          <div className="grid lg:grid-cols-2 items-start h-full">
            <div className="relative right-11 max-w-1xl py-12 lg:py-24">
              <h1 className="sm:text-5xl tracking-tight text-gray-900 leading-tight font-Inter font-semibold">
                Streamline Your Business with Smart Billing and Management Solutions
              </h1>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Automate invoicing, manage expenses, track sales, and enhance client relationships all in one intuitive
                platform for improved efficiency and growth.
              </p>
              <div className="mt-8">
                <button className="px-12 py-3 bg-emerald-500 text-white text-lg rounded-lg hover:bg-emerald-600 transition-colors">
                  Get Started Now
                </button>
              </div>
            </div>

            <div className="absolute right-0 top-[76px] bottom-0 w-[55%]">
              <Image
                src="/chart.png"
                alt="Business analytics dashboard with charts"
                fill
                className="object-cover object-left scale-110"
                priority
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-base font-semibold text-gray-500">BUILT ON YOUR TRUST</p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            We've helped businesses
            <br />
            Grow Significantly
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Businesses thrive with smoother operations and faster growth using our solutions.
          </p>

          <div className=" h-22">


            <div className=" mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-y-3">
                <dt className="text-5xl font-semibold tracking-tight text-gray-900">300+</dt>
                <dd className="text-base leading-7 text-gray-600">Businesses transformed</dd>
              </div>
              <div className="flex flex-col gap-y-3">
                <dt className="text-5xl font-semibold tracking-tight text-gray-900">4x</dt>
                <dd className="text-base leading-7 text-gray-600">Growth witnessed</dd>
              </div>
              <div className="flex flex-col gap-y-3">
                <dt className="text-5xl font-semibold tracking-tight text-gray-900">95%</dt>
                <dd className="text-base leading-7 text-gray-600">Customer satisfaction</dd>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-base font-semibold text-gray-600">WHY CHOOSE US?</p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Invoicify makes your invoicing journey
            <br />
            smooth, efficient, and hassle-free.
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center gap-4 pr-0 pt-8 bg-slate-100 rounded-lg shadow-sm">
              <div className="flex items-center justify-center gap-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19.5" fill="white" strokeWidth="#A3BFBE" />
                  <path d="M26.0234 13V12C26.0234 11.4477 25.5757 11 25.0234 11H16.9377C16.6724 11 16.4181 11.1054 16.2305 11.2929L12.3163 15.2071C12.1288 15.3946 12.0234 15.649 12.0234 15.9142V28C12.0234 28.5523 12.4712 29 13.0234 29H25.0234C25.5757 29 26.0234 28.5523 26.0234 28V23M17.0234 11V15C17.0234 15.5523 16.5757 16 16.0234 16H12.0234M23.4064 16.772L26.1514 19.518M27.3664 15.612C27.5605 15.8058 27.7144 16.036 27.8194 16.2893C27.9244 16.5427 27.9785 16.8142 27.9785 17.0885C27.9785 17.3627 27.9244 17.6343 27.8194 17.8876C27.7144 18.141 27.5605 18.3712 27.3664 18.565L20.7164 25.211L17.0234 25.95L17.7624 22.258L24.4084 15.612C24.6024 15.4172 24.8328 15.2626 25.0866 15.1572C25.3404 15.0517 25.6126 14.9974 25.8874 14.9974C26.1623 14.9974 26.4344 15.0517 26.6882 15.1572C26.942 15.2626 27.1725 15.4172 27.3664 15.612Z" stroke="#1EB386" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
              <h3 className="text-xl font-semibold text-gray-900">Create Invoice</h3>
              <p className="text-gray-600">Create, send & manage invoices to keep your business running smoothly.</p>
              <div className="w-full relative h-full">
              <img
              src="/Invoice.png"
              alt="sdch"
              className="w-full mr-10"/>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 p-8 bg-slate-100 lg shadow-sm">
              <div className="flex items-center justify-center gap-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19.5" fill="white" strokeWidth="#A3BFBE" />
                  <path d="M18 11V15C18 15.5523 17.5523 16 17 16H13M17 22L19 24L23 20M27 12V28C27 28.5523 26.5523 29 26 29H14C13.4477 29 13 28.5523 13 28V15.9142C13 15.649 13.1054 15.3946 13.2929 15.2071L17.2071 11.2929C17.3946 11.1054 17.649 11 17.9142 11H26C26.5523 11 27 11.4477 27 12Z" stroke="#1EB386" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
              <h3 className="text-xl font-semibold text-gray-900">Manage Invoice</h3>
              <p className="text-gray-600">Create, send & manage invoices to keep your business running smoothly.</p>
            </div>
            <div className="flex flex-col items-center gap-4 p-8 bg-slate-100 lg shadow-sm">
              <div className="flex items-center justify-center gap-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19.5" fill="white" strokeWidth="#A3BFBE" />
                  <path d="M12 12.25V26.75C12 27.3023 12.4477 27.75 13 27.75H28M15 21.75L19 17.75L23 21.75L28 16.75M28 16.75H24.793M28 16.75V19.957" stroke="#1EB386" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
              <h3 className="text-xl font-semibold text-gray-900">Hassle free</h3>
              <p className="text-gray-600">Create, send & manage invoices to keep your business running smoothly.</p>
            </div>
          </div>




        </div>

      </section>
      <footer className="bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                  Start using Invoicify today
                </h2>
                <p className="mt-4 text-lg text-gray-600">14 day free trial, No credit card required.</p>
                <button className="mt-8 group inline-flex items-center gap-2 px-8 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                  Get Started Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <div className="relative h-[300px] lg:h-[400px]">
                <Image
                  src="/cc.png"
                  alt="Invoicify dashboard interface"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>


          <div className="py-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-2">
                <Image src="/Logo.png" alt="Invoicify" width={35} height={35} />
                <span className="text-xl font-semibold">Invoicify</span>
              </div>

              <nav>
                <ul className="flex items-center gap-8 text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
              <p>© 2024 Invoicify Inc. All rights reserved</p>
              <div className="flex items-center gap-6">
                <Link href="#" className="hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>



    </>
  )

}


