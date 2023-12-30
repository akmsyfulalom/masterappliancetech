import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { FaEnvelopeCircleCheck, FaHandsHoldingCircle, FaHouseLaptop, FaSackDollar } from "react-icons/fa6";

const cardData = [
    {
        title: "Booking Online",
        description: "You can book in a very easy way, you can book from the booking page or in the navigation bar",
        icon: FaHouseLaptop,
    },
    {
        title: "Discuss Budget",
        description: "After confirming the booking, We will discuss everything with your response",
        icon: FaSackDollar,
    },
    {
        title: "Get Confirmation",
        description: "You will be confirmed after we finalize",
        icon: FaEnvelopeCircleCheck,
    },
    {
        title: "Happy Services",
        description: "You can see the reviews on our service. Our clients are giving us good feedback on our services",
        icon: FaHandsHoldingCircle,
    },
];

const HowItWorks = () => {


    return (
        <div className="relative w-full">
            <div className="bg-[url('https://i.ibb.co/pvwKWK3/feature-bg.jpg')]  mx-auto  py-24">
                <div className="text-center pb-12">
                    <p className="text-[#ff6600] text-xl font-semibold">How it works</p>
                    <h2 className="text-wrap lg:w-5/12 mx-auto text-4xl font-bold">
                        Making technology again <br />working for you
                    </h2>
                </div>

                <div className="grid lg:grid-cols-4 justify-items-center content-start	 gap-4 mx-auto w-10/12">
                    {cardData.map((card, index) => (
                        <Card key={index} className="pb-4 w-[270px] bg-transparent shadow-none">
                            <CardBody className="flex items-center justify-center overflow-visible mx-auto w-[130px] h-[130px] border border-blue-600 border-dashed rounded-full mb-2">
                                <div className="flex items-center justify-center w-full h-[125px] rounded-full relative p-4 bg-blue-600 bg-opacity-50"> 
                                    <card.icon className="text-5xl text-white" />
                                </div>
                            </CardBody>



                            <CardFooter className="pb-0 pt-2 px-4 flex-col items-center text-center gap-4">
                                <p className="text-2xl font-bold">{card.title}</p>
                                <p className="">{card.description}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

            </div>
            

        </div>
    );
};

export default HowItWorks;
