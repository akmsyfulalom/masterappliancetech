import Image from 'next/image'

export default function Hero() {
    return (
        <div>
            <section className=" dark:text-gray-100">
                <div className="container grid lg:grid-cols-5 md:gap-10 grid-cols-1  mx-auto sm:py-12 lg:py-24  lg:justify-between ">
                    <div className="lg:col-span-2  mt-8 lg:mt-0 flex items-center justify-center">
                        <Image width={400} height={400} src="/bgImageRightNow.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center items-center text-center rounded-sm lg:col-span-3">
                        <h1 className="text-4xl font-bold text-black/80 sm:text-6xl">MASTER APPLIENCE TECH
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 text-black/90">Applience Repair Done Right

                        </p>
                        <div className="flex justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">New Customer Booking</a>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
