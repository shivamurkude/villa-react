import { Card, CardHeader } from "@nextui-org/react";
import { BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const ContactCard = () => {
  const data = [
    {
      icon: BiPhone,
      heading: "Phone Number",
      text: "+91 77777777777",
    },
    {
      icon: MdEmail,
      heading: "Email Address",
      text: "support@villa.com",
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <Card key={index} className="min-w-[40%] h-[5rem]  bg-white text-orange-500 justify-center m-3 ">
          <CardHeader className="flex gap-3">
            <item.icon radius="sm" size={50} className="" />
            <div className="flex flex-col">
              <p className="text-md">{item.text}</p>
              <p className="text-small text-default-500 text-center">{item.heading}</p>
            </div>
          </CardHeader>
        </Card>
      ))}
    </>
  );
};

export default ContactCard;
