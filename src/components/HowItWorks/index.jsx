import { Card, CardBody, CardFooter } from "@nextui-org/react";

const cardData = [
    {
        title: "Booking Online",
        tracks: "12 Tracks",
        description: "Lorem ipsum dolor sit amets consec of tetur adipisicing elit sed.",
    },
    {
        title: "Booking Online",
        tracks: "12 Tracks",
        description: "Lorem ipsum dolor sit amets consec of tetur adipisicing elit sed.",
    },
    {
        title: "Booking Online",
        tracks: "12 Tracks",
        description: "Lorem ipsum dolor sit amets consec of tetur adipisicing elit sed.",
    },
    {
        title: "Booking Online",
        tracks: "12 Tracks",
        description: "Lorem ipsum dolor sit amets consec of tetur adipisicing elit sed.",
    },
];

const HowItWorks = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/pvwKWK3/feature-bg.jpg')] py-24 mx-auto">
            <div className="text-center pb-12">
                <p className="text-[#ff6600] text-xl font-semibold">How it works</p>
                <h2 className="text-wrap lg:w-5/12 mx-auto text-4xl font-bold">
                    Making technology again <br />working for you
                </h2>
            </div>

            <div className="grid lg:grid-cols-4 justify-around gap-4 mx-auto w-10/12">
                {cardData.map((card, index) => (
                    <Card key={index} className="py-4 w-[270px]">
                        <CardBody className="flex items-center justify-center overflow-visible mx-auto w-[125px] h-[125px] border border-dashed rounded-full">
                            <div className="flex items-center justify-center w-[125px] h-[125px] rounded-full relative p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    height="64"
                                    width="80"
                                    viewBox="0 0 640 512"
                                >
                                    <path d="M218.3 8.5c12.3-11.3 31.2-11.3 43.4 0l208 192c6.7 6.2 10.3 14.8 10.3 23.5H336c-19.1 0-36.3 8.4-48 21.7V208c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64V416H112c-26.5 0-48-21.5-48-48V256H32c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8.1-35.2l208-192zM352 304V448H544V304H352zm-48-16c0-17.7 14.3-32 32-32H560c17.7 0 32 14.3 32 32V448h32c8.8 0 16 7.2 16 16c0 26.5-21.5 48-48 48H544 352 304c-26.5 0-48-21.5-48-48c0-8.8 7.2-16 16-16h32V288z" />
                                </svg>
                            </div>
                        </CardBody>


                        <CardFooter className="pb-0 pt-2 px-4 flex-col items-center text-center">
                            <p className="text-tiny font-bold">{card.title}</p>
                            <small className="text-default-500">{card.tracks}</small>
                            <p className="">{card.description}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
