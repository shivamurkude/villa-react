// Dependencies
import { Input, Textarea, Button, Card, CardBody } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";
import { useRef, useState } from "react";
import toast, { Toaster, ToastPosition } from "react-hot-toast";
import axios from "axios";
import ContactCard from "./ContactCard";

const emailRe: RegExp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
const toastSetting: {
  position: ToastPosition;
} = { position: "top-center" };

let apiUrl = process.env.REACT_APP_API_URL;

const EmailForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const [emailValidity, setEmailValidity] = useState<boolean>(false);
  const [nameValidity, setNameValidity] = useState<boolean>(false);
  const [subjectValidity, setSubjectValidity] = useState<boolean>(false);
  const [messageValidity, setMessageValidity] = useState<boolean>(false);

  const [emailState, setEmailState] = useState<number>(-1);
  const [userNameState, setUserNameState] = useState<number>(-1);
  const [subjectState, setSubjectState] = useState<number>(-1);
  const [messageState, setMessageState] = useState<number>(-1);
  const [state, setState] = useState(false);

  const [input, setInput] = useState({
    name: "",
    message: "",
    subject: "",
    email: "",
  });

  const checkEmail = (event: any) => {
    input.email = event.currentTarget.value;
    setEmailState(event.currentTarget.value.length);
    const validity = input.email.match(emailRe);
    if (validity) {
      setEmailValidity(false);
    } else {
      setEmailValidity(true);
    }
  };

  const checkUserName = (event: any) => {
    input.name = event.currentTarget.value;
    setUserNameState(event.currentTarget.value.length);

    const validity = input.name.length > 4;
    if (validity) {
      setNameValidity(false);
    } else {
      setNameValidity(true);
    }
  };

  const checkSubject = (event: any) => {
    input.subject = event.currentTarget.value;
    setSubjectState(event.currentTarget.value.length);

    const validity = input.subject.length > 4;
    if (validity) {
      setSubjectValidity(false);
    } else {
      setSubjectValidity(true);
    }
  };

  const checkMessage = (event: any) => {
    input.message = event.currentTarget.value;
    setMessageState(event.currentTarget.value.length);

    const validity = input.message.length > 10;
    if (validity) {
      setMessageValidity(false);
    } else {
      setMessageValidity(true);
    }
  };

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setState(true);
      const response: any = await axios.post(`${apiUrl}/contact/form`, input);

      if (response?.data?.success) {
        toast.success("Email sent Successfully");
        setState(false);
      }
    } catch (error) {
      toast.error("failed to send Email 404");
      setState(false);
    }

    setInput({
      name: "",
      message: "",
      subject: "",
      email: "",
    });
  };
  return (
    <div className="bg-white px-[3rem] md:px-[5rem] py-[2rem] dark flex flex-col lg:grid lg:grid-cols-2  gap-[2rem] lg:gap-[6rem]">
      <div className="text-black flex flex-col gap-[1rem] justify-center items-center md:items-start">
        <div className="flex flex-row items-center justify-start py-[2rem] ">
          <div className="h-[1rem] w-[0.5rem] bg-orange-700 "></div>
          <div className="text-orange-500 font-serif text-[1rem] font-bold p-[1rem]">
            <h2>CONTACT US</h2>
          </div>
        </div>
        <h1 className="font-['lilita_one'] text-[3rem] text-orange-500">Get In Touch With Our Agents</h1>
        <p className="text-justify text-black text-[0.95rem] sm:text-md">
          Whether you're curious about our services, or looking for personalized solutions for your brand, the Kreative
          Machinez team is here for you. Your privacy is our priority, and we ensure the confidentiality of your
          information. Rest assured, we don't share your details with any third party. Our team of professionals
          understands your needs, offering expert guidance to propel your digital journey forward. Drop us an email, and
          we will get back to you at the earliest.
        </p>
        <p className="text-justify text-black text-[0.95rem] sm:text-md">
          We'll never share your email with anyone else.
        </p>
        <ContactCard />
      </div>
      <Card className="bg-white p-4 mt-[5rem] shadow-md">
        <CardBody>
          <div className="  my-4 mb-8  rounded-lg flex  flex-col justify-center items-center bg-black ">
          <h1 className="text-center font-bold text-2xl  text-white font-serif p-5">Contact Us</h1>
          </div>
          
          <form className="flex flex-col gap-[2rem] items-center grow" ref={form} onSubmit={sendEmail}>
            <Input
              radius="sm"
              variant="bordered"
              color="warning"
              type="text"
              label="Name"
              name="name"
              id="name"
              onChange={checkUserName}
              errorMessage={nameValidity ? "Please enter a valid Name" : ""}
              isInvalid={nameValidity}
            />
            <Input
              variant="bordered"
              radius="sm"
              type="email"
              label="Email"
              color="warning"
              name="email"
              onChange={checkEmail}
              isInvalid={emailValidity}
              errorMessage={emailValidity ? "Please enter a valid Email" : ""}
            />
            <Input
              variant="bordered"
              radius="sm"
              type="text"
              label="Subject"
              color="warning"
              name="subject"
              onChange={checkSubject}
              isInvalid={subjectValidity}
              errorMessage={subjectValidity ? "Please enter a valid Subject" : ""}
            />
            <Textarea
              variant="bordered"
              radius="sm"
              label="Message"
              color="warning"
              name="message"
              onChange={checkMessage}
              isInvalid={messageValidity}
              errorMessage={messageValidity ? "Please enter a minimum 10 charater" : ""}
            />
            <Button
              variant="shadow"
              className="w-[10rem] mt-5 bg-orange-500"
              endContent={<IoSend className="mt-[0.2rem]" />}
              type="submit"
              isLoading={state}
            >
              Send Message
            </Button>
            <Toaster />
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default EmailForm;
