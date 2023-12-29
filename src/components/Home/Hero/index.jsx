import PrimaryButton from '@/components/Buttons/PrimaryButton'
import Image from 'next/image'

export default function Hero() {
    return (
     <div>
         <div className='h-screen hidden md:block'>
             
             <div className="relative overflow-hidden bg-cover bg-no-repeat " style={{
                 backgroundPosition: '50%',
                 backgroundImage: "url('https://tecdn.b-cdn.net/img/new/slides/146.webp')",
                 height: '100vh',
             }}>
                 <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
                 <section className=" dark:text-gray-100 content-center">
                 <div className="container grid lg:grid-cols-5 md:gap-10 grid-cols-1  mx-auto sm:py-12 lg:py-24  lg:justify-between ">
                     <div
                         data-aos="fade-left"
                         data-aos-anchor="#example-anchor"
                         data-aos-offset="500"
                         data-aos-duration="500"
                         className="lg:col-span-2  mt-8 lg:mt-0 flex items-center justify-center">
                         <Image width={400} height={400} src="/bgImageRightNow.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                     </div>
                     <div
                         data-aos="fade-right"
                         data-aos-offset="300"
                         data-aos-easing="ease-in-sine"
 
                         className="flex flex-col justify-center items-center text-center rounded-sm lg:col-span-3">
                         <h1 className="text-4xl font-bold text-white/80 sm:text-6xl">MASTER APPLIENCE TECH
                         </h1>
                         <p className="mt-6 mb-8 text-lg sm:mb-12 text-white/90">Applience Repair Done Right
 
                         </p>
                         <div className="flex justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
                             <PrimaryButton textColor={'#ffff'} buttonLink={'/'} buttonTitle={'New Customer Booking'}/>
 
                         </div>
                     </div>
 
                 </div>
             </section>
                    
                 </div>
             </div>
         </div>
         <div className='md:hidden block '>
             
             <div className="relative overflow-hidden bg-cover bg-no-repeat " style={{
                 backgroundPosition: '50%',
                 backgroundImage: "url('https://tecdn.b-cdn.net/img/new/slides/146.webp')",
                 height: '60vh',
             }}>
                 <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed px-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
                 <section className=" dark:text-gray-100 content-center">
                 <div className="container grid lg:grid-cols-5 md:gap-10 grid-cols-1  mx-auto sm:py-12 lg:py-24  lg:justify-between ">
                     <div
                         data-aos="fade-left"
                         data-aos-anchor="#example-anchor"
                         data-aos-offset="500"
                         data-aos-duration="500"
                         className="lg:col-span-2  mt-8 lg:mt-0 flex items-center justify-center">
                         <Image width={200} height={200} src="/bgImageRightNow.png" alt="" className="object-contain h-40 sm:h-48 lg:h-96 xl:h-112 2xl:h-128 py-2" />
                     </div>
                     <div
                         data-aos="fade-right"
                         data-aos-offset="300"
                         data-aos-easing="ease-in-sine"
 
                         className="flex flex-col justify-center items-center text-center rounded-sm lg:col-span-3 pb-3">
                         <h1 className="text-2xl font-bold text-white/80 sm:text-6xl">MASTER APPLIENCE TECH
                         </h1>
                         <p className="mt-6 mb-8 text-lg sm:mb-12 text-white/90">Applience Repair Done Right
 
                         </p>
                         <div className="flex justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
                             <PrimaryButton textColor={'#ffff'} buttonLink={'/'} buttonTitle={'New Customer Booking'}/>
 
                         </div>
                     </div>
 
                 </div>
             </section>
                    
                 </div>
             </div>
         </div>
     </div>
    )
}
