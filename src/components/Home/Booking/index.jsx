import { Button, Card, CardBody } from "@nextui-org/react";
import Link from 'next/link'
export default function BookingSection() {
  return (
    <div className="container flex flex-col item-center justify-center md:pl-28 p-5">
      <div className="grid md:grid-cols-2 gap-10 " >

        <Card>
          <CardBody className="text-center">
            <p>Book on Your Time</p>
            <Link href={'/'} className="pt-2">
              <Button radius="md" className="font-semibold rounded-sm text-lg bg-[#A78BFA]">Book Now</Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="text-center">
            <p>Returning Customer Click here to log in to your hub</p>
            <Link href={'#'} className="pt-2">
              <Button radius="md" className="font-semibold rounded-sm text-lg bg-[#A78BFA]">
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
