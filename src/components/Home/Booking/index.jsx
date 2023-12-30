import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { Card, CardBody } from "@nextui-org/react";
export default function BookingSection() {
  return (
    <div className="container flex flex-col item-center justify-center mx-auto pt-10 ">
      <div className="grid md:grid-cols-2 md:mx-1 gap-10" >
        <Card className=" bg-[#ff6600] p-2">
          <CardBody className="text-center flex justify-center">
            <p className="md:text-4xl text-2xl text-white pb-3">Book on Your Time</p>
            <PrimaryButton textColor={'#ffff'} buttonTitle={'On time booking'} buttonLink={'/booking#bookForm'} />
          </CardBody>
        </Card>
        <Card className=" bg-[#1d284b] p-2">
          <CardBody className="text-center flex justify-center">
            <p className="md:text-4xl text-2xl pb-3 text-white">Returning Customer Click here to log in to your hub</p>
            <PrimaryButton textColor={'#ffff'} buttonTitle={'Login your hub'} buttonLink={'https://clienthub.getjobber.com/client_hubs/623f04d2-9301-4ef0-b667-c67229c82601/login/new?source=share_login'} />
          </CardBody>
        </Card>
      </div>
      <h3 className="text-secondary py-10 text-center text-xl font-semibold">
        Expert Appliance Repair: $120 Service Call & 1-Year Warranty for Peace of Mind! <br /> Book Your Appliance Repair Service Online and Get You Appliances Running Smoothly Again!
      </h3>
    </div>
  )
}
