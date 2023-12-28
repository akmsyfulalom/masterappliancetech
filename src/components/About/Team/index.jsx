import { Card, Image } from "@nextui-org/react";
import { FaBuilding, FaCheckToSlot, FaHandsHoldingCircle } from "react-icons/fa6";
import { LiaNetworkWiredSolid } from "react-icons/lia";

const cardData = [
    {
        name: "Demica Master",
        role: "Main Technician",
        url: "/images/1.jpg",
    },
    {
        name: "Margie Burman",
        role: "Junior Technician",
        url: "/images/2.jpg",
    },
    {
        name: "Gorrien Hyrick",
        role: "Senior Technician",
        url: "/images/3.jpg",
    },
    {
        name: "Jonson Pierce",
        role: "Founder Of Avc",
        url: "/images/4.jpg",
    },
];

const epData = [
    {
        title: "Expert Technician",
        count: 280,
        icon: LiaNetworkWiredSolid,
    },
    {
        title: "Total Branches",
        count: 120,
        icon: FaBuilding,
    },
    {
        title: "Project Complete",
        count: 348,
        icon: FaCheckToSlot,
    },
    {
        title: "Happy Customer",
        count: 330,
        icon: FaHandsHoldingCircle,
    },
]

const Team = () => {
    return (
        <div className="relative lg:mb-28">
            <div className="bg-[url('https://i.ibb.co/pvwKWK3/feature-bg.jpg')] py-24 mx-auto lg:mt-24">
                <div className="text-center pb-12">
                    <p className="text-[#ff6600] text-base lg:text-xl font-semibold">Technician Team</p>
                    <h2 className="text-wrap lg:w-5/12 mx-auto lg:text-4xl text-2xl font-bold">
                        Our dedicated & expert <br />team member
                    </h2>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-around gap-8 mx-auto w-10/12">
                    {cardData.map((card, index) => (
                        <div key={index}>
                            <Card className="w-[270px] rounded-none">
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover rounded-none "
                                    width="100%"
                                    src={card.url}
                                    height="100%"
                                />
                            </Card>
                            <Card className="p-4  w-[270px] mt-2 flex-col  rounded-none">
                                <small className="text-default-500">{card.role}</small>
                                <p className="text-xl font-bold">{card.name}</p>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#ff6600] py-12 grid lg:grid-cols-4 gap-8 justify-items-center lg:absolute inset-x-0 bottom-[-110px] mx-auto">

                {epData?.map((data, index) => (
                    <div key={index} className="flex items-center justify-center h-[50px] w-full max-h-[70px]">

                        <data.icon className="lg:text-5xl text-4xl me-4 text-white self-start" />

                        <div className="text-white">
                            <p className="lg:text-4xl text-xl font-bold">{data.count}+</p>
                            <p className="lg:text-xl text-sm">{data.title}</p>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default Team;
