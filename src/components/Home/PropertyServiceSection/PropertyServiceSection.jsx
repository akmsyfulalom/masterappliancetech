import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { motion } from "framer-motion";
import Image from "next/image";
const FramerImage = motion(Image)
export default function PropertyServiceSection() {
    return (
        <div className='my-20'>
            <div className='grid grid-cols-2  gap-10'>
                <div data-aos="fade-left" className='grid grid-rows-2 grid-flow-col  gap-5 md:col-span-1 col-span-2'>
                    <div className='row-span-2 '>


                        <FramerImage width={400} height={600} src={'https://wphix.com/template/airvice-prv/airvice/assets/img/about/about-img-1.jpg'} alt='akm syful web dev project' priority sizes="(mix-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        />


                    </div>
                    <div className='col-span-1'>
                        <FramerImage width={300} height={300} src={'https://wphix.com/template/airvice-prv/airvice/assets/img/about/about-img-2.jpg'} alt='akm syful web dev project' priority sizes="(mix-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        />
                    </div>
                    <div className='col-span-1 bg-[#1D284B]  flex justify-center items-center md:text-6xl text-4xl font-bold text-white'><p>
                        200+ <br /> Project <br /> Done</p> </div>


                </div>
                <div data-aos="fade-right" className='md:col-span-1 col-span-2'>
                    <div className='flex justify-start items-center gap-2'>
                        <Image src='/MasterApplianceTechLogo.jpg' width={50} height={50} alt='logo' />
                        <h3 className='text-[#FF6600] font-semibold'>Master Applience</h3>
                    </div>
                    <h1 className='text-[#1D284B] md:text-5xl text-4xl 
                font-bold '>Property Management Booking</h1>
                    <p>
                        Welcome to our distinguished appliance repair service, owned and operated by Cody Zimmerman, a seasoned professional in the industry since 2003. Cody's extensive background encompasses Factory Authorization for renowned brands such as Bosch, Thermador, Dacor, Whirlpool, Maytag, KitchenAid, Frigidaire, Electrolux, GE, Samsung, LG, and more. This authorization has afforded him the privilege of participating in Factory Training programs organized by these manufacturers, elevating his expertise.
                    </p>
                    <p className='py-5'>
                        Motivated by an unwavering commitment to providing exceptional service, Cody has ventured independently, driven by past experiences with prominent repair companies that fell short of expectations. Fueled by a determination to present a superior alternative in appliance repair, Cody places a premium on customer relations and addresses employment concerns, ensuring a "Better Solution to Appliance Repair." Our objective is to guarantee fair pricing, efficient repairs, and minimal disruption to your daily routine.
                    </p>


                </div>

            </div>
            <div className='flex justify-center items-center pt-10'>
                <PrimaryButton textColor={'#00000'} buttonLink={'/'} buttonTitle={'Property Management Booking'} />
            </div>
        </div>
    )
}
