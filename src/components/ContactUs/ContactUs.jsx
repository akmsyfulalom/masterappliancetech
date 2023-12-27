"use client"
import { Input, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
const FramerImage = motion(Image)

export default function ContactUs() {
    const sendEmail = (e) => {

    }
  return (
    <div className="py-20">
      <div className="grid grid-cols-2 gap-10">
      <div className="flex justify-center items-center">
      <FramerImage width={300} height={350} src={'https://wphix.com/template/airvice-prv/airvice/assets/img/about/about-img-1.jpg'} alt='akm syful web dev project' priority sizes="(mix-width: 566px) 50vw, (max-width: 768px) 50vw, 50vw"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        />
      </div>
      <div className="">
      <div className="flex items-center justify-around text-white w-full">
        <form onSubmit={sendEmail} className="w-full">
          <div className="rounded-lg w-full xl:mr-40 bg-[#ff6600] p-8">
            <p className=" text-3xl">Free Estimate</p>
            <div className="form-control w-full mt-5">
              <label className="label">
                <span className="label-text">your name *</span>
              </label>
              <Input
                type="text"
                name='to_name'
                placeholder="Write name"
                className="bordered w-full"
              />
            </div>
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text">your email *</span>
              </label>
              <Input
                type="email"
                name='user_email'
                placeholder="Give email address"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text">your subject *</span>
              </label>
              <Input
                type="subject"
                name='subject'
                placeholder="Write subject"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mt-3">
              <label className="label">
                <span className="label-text">your message *</span>
              </label>
              <Textarea name="message" className="input input-bordered w-full" placeholder="Enter your message" id=""></Textarea>
            </div>
            <div>
              <button className={`relative group overflow-hidden px-4 py-3 mt-8 w-full justify-center rounded-md flex space-x-2 bg-gradient-to-r text-white from-gray-600 via-[#1d284b] to-[#ff6600] hover:to-[#1d284b]`}> Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
      </div>
    </div>
  )
}
