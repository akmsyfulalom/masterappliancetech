import { Button, Card, CardBody } from "@nextui-org/react";
import Link from 'next/link';
export default function BookingSection() {
  return (
    <div className="container flex flex-col item-center justify-center mx-auto md:pl-28 p-5">
      <div className="grid md:grid-cols-2" >

        <Card className="lg:rounded-e-none bg-[#ff6600] p-8">
          <CardBody className="text-center">
            <p className="text-4xl text-white pb-3">Book on Your Time</p>
            <Link href={'/'} className="pt-2">
              <Button radius="md" className="font-semibold rounded-md text-lg bg-[#ffffff]">Book Now</Button>
            </Link>
          </CardBody>
        </Card>
        <Card className="lg:rounded-s-none bg-[#1d284b] p-8">
          <CardBody className="text-center">
            <p className="text-4xl text-white">Returning Customer Click here to log in to your hub</p>
            <Link href={'#'} className="pt-2">
              <Button radius="md" className="font-semibold rounded-md text-lg bg-[#ffffff]">
                Login
              </Button>
            </Link>
          </CardBody>
        </Card>

        {/* <Card className="bg-[#A78BFA]">
            <CardBody className="!p-0">
              <Button radius="md" className="bg-transparent  font-semibold rounded-sm text-lg">
                Book on Your Time
              </Button>
            </CardBody>
          </Card>
          <Card className="bg-[#A78BFA] ">
            <CardBody className="!p-0">
              <Link href={'/'} radius="md" className="bg-transparent  font-semibold rounded-sm text-lg">
              Returning Customer Click here to log in to your hub

              </Link>
            </CardBody>
          </Card> */}



      </div>
      <h3 className="text-white/90 py-10 text-center">
        Expert Appliance Repair: $90 Service Call & 1-Year Warranty for Peace of Mind! <br /> Book Your Appliance Repair Service Online and Get You Appliances Running Smoothly Again!
      </h3>
    </div>
  )
}
