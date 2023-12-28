import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { FaEnvelopeCircleCheck, FaHandsHoldingCircle, FaHouseLaptop, FaSackDollar } from "react-icons/fa6";

const cardData = [
    {
        title: "Booking Online",
        description: "Lorem ipsum dolor sit amets consec of tetur adipisicing elit sed.",
        icon: FaHouseLaptop,
    },
    {
        title: "Discuss Budget",
        description: "Laboris nisi ut aliquip exe ea commodo the coniseqs duis aute.",
        icon: FaSackDollar,
    },
    {
        title: "Get Confirmation",
        description: "Ut enim ade minim veniam quis nostrud exerci tation ullamco laboris.",
        icon: FaEnvelopeCircleCheck,
    },
    {
        title: "Happy Services",
        description: "Suscipit doarce iaculis class nulam rutrume aliquams vulputa.",
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

                <div className="grid lg:grid-cols-4 justify-around gap-4 mx-auto w-10/12">
                    {cardData.map((card, index) => (
                        <Card key={index} className="pb-4 w-[270px] bg-transparent shadow-none">
                            <CardBody className="flex items-center justify-center overflow-visible mx-auto w-[130px] h-[130px] border border-blue-600 border-dashed rounded-full mb-2">
                                <div className="flex items-center justify-center w-full h-[125px] rounded-full relative p-4 bg-blue-600 bg-opacity-50"> {/* Add bg-opacity-50 to both bg-blue-600 and bg-white */}
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
            <div className="lg:absolute inset-x-0 bottom-[-110px] flex justify-center items-center">
                <div className="grid md:grid-cols-2 w-10/12">
                    <Card className="lg:rounded-e-none  bg-[#ff6600] p-8">
                        <CardBody className="text-center">
                            <p className="text-4xl text-white pb-3">
                                Residential Repair Service</p>
                            <PrimaryButton textColor={'#ffff'} buttonTitle={'Service'} buttonLink={'/ntm'} />
                        </CardBody>
                    </Card>
                    <Card className="lg:rounded-s-none  bg-[#1d284b] p-8">
                        <CardBody className="text-center">
                            <p className="text-4xl pb-3 text-white">
                                Commercial Repair Service </p>
                            <PrimaryButton textColor={'#ffff'} buttonTitle={'Service'} buttonLink={'/ntm'} />
                        </CardBody>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default HowItWorks;