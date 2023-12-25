import { Image } from "@nextui-org/react";

const Pmanagement = () => {
    return (
        <div className="w-3/4 mx-auto">
            <div className="flex justify-center mb-8">
                <h1 className="px-6 py-2 bg-[#ff6600] text-white text-2xl">Property Management Booking</h1>
            </div>
            <div className="flex flex-col">

                <div className="frex">
                    <div>
                        <Image
                            isZoomed

                            alt="NextUI Fruit Image with Zoom"
                            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                        />
                    </div>
                    <div>
                        <p>Welcome to our distinguished appliance repair service, owned and operated by Cody Zimmerman, a seasoned professional in the industry since 2003. Cody's extensive background encompasses Factory Authorization for renowned brands such as Bosch, Thermador, Dacor, Whirlpool, Maytag, KitchenAid, Frigidaire, Electrolux, GE, Samsung, LG, and more. This authorization has afforded him the privilege of participating in Factory Training programs organized by these manufacturers, elevating his expertise.</p><br />
                    </div>
                </div>
            </div>


            <p>Motivated by an unwavering commitment to providing exceptional service, Cody has ventured independently, driven by past experiences with prominent repair companies that fell short of expectations. Fueled by a determination to present a superior alternative in appliance repair, Cody places a premium on customer relations and addresses employment concerns, ensuring a "Better Solution to Appliance Repair." Our objective is to guarantee fair pricing, efficient repairs, and minimal disruption to your daily routine.</p><br />

            <p>Rest assured that under Cody's proficient hands, you will receive top-tier appliance repair at a fraction of the cost. Recognizing the significance of your time, we strive for swift repairs, offering unparalleled convenience and peace of mind.</p>
        </div>
    );
};

export default Pmanagement;