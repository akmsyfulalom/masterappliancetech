import { Card, Image } from "@nextui-org/react";

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

const Team = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/pvwKWK3/feature-bg.jpg')] py-24 mx-auto">
            <div className="text-center pb-12">
                <p className="text-[#ff6600] text-xl font-semibold">Technician Team</p>
                <h2 className="text-wrap lg:w-5/12 mx-auto text-4xl font-bold">
                    Our dedicated & expert <br />team member
                </h2>
            </div>

            <div className="grid lg:grid-cols-4 justify-around gap-4 mx-auto w-10/12">
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
    );
};

export default Team;
