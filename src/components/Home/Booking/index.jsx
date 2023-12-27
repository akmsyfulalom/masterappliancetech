import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { Card, CardBody } from "@nextui-org/react";
export default function BookingSection() {
  return (
    <div className="container flex flex-col item-center justify-center mx-auto ">
      <div className="grid md:grid-cols-2 md:mx-1" >
        <Card className="lg:rounded-e-none bg-[#ff6600] p-8">
          <CardBody className="text-center">
            <p className="text-4xl text-white pb-3">Book on Your Time</p>
            <PrimaryButton textColor={'#ffff'} buttonTitle={'On time booking'} buttonLink={'/ntm'} />
          </CardBody>
        </Card>
        <Card className="lg:rounded-s-none bg-[#1d284b] p-8">
          <CardBody className="text-center">
            <p className="text-4xl pb-3 text-white">Returning Customer Click here to log in to your hub</p>
            <PrimaryButton textColor={'#ffff'} buttonTitle={'Login your hub'} buttonLink={'/ntm'} />
          </CardBody>
        </Card>
      </div>
      <h3 className="text-white/90 py-10 text-center">
        Expert Appliance Repair: $90 Service Call & 1-Year Warranty for Peace of Mind! <br /> Book Your Appliance Repair Service Online and Get You Appliances Running Smoothly Again!
      </h3>
    </div>
  )
}
