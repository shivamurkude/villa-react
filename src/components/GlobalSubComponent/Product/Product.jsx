import p1 from "./assets/villa.jpg";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const content = [
  {
    villa: "Luxury Villa",
    price: "70 Lakh",
    Adress: "54 New Street Miami, OR 97212",
    bedroom: "8",
    bathroom: "2",
    area: "545m2",
    floor: "3",
    parking: "6 spots",
  },
  {
    villa: "Apartment",
    price: "70 Lakh",
    Adress: "54 Mid Street Florida, OR 27001",
    bedroom: "8",
    bathroom: "2",
    area: "545m2",
    floor: "3",
    parking: "6 spots",
  },
  {
    villa: "Penthouse",
    price: "70 Lakh",
    Adress: "22 New Street Portland, OR 16540",
    bedroom: "8",
    bathroom: "2",
    area: "545m2",
    floor: "3",
    parking: "6 spots",
  },
  {
    villa: "Modern Corendo",
    price: "70 Lakh",
    Adress: "12 New Street Miami, OR 12650",
    bedroom: "8",
    bathroom: "2",
    area: "545m2",
    floor: "3",
    parking: "6 spots",
  },
  {
    villa: "Luxury Villa",
    price: "70 Lakh",
    Adress: "34 Beach Street Miami, OR 42680",
    bedroom: "8",
    bathroom: "2",
    area: "545m2",
    floor: "3",
    parking: "6 spots",
  },
  {
    villa: "Apartment",
    price: "70 Lakh",
    Adress: "18 New Street Miami, OR 97219",
    bedroom: "8",
    bathroom: "2",
    area: "545m2",
    floor: "3",
    parking: "6 spots",
  },
];

const Product = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-[2rem]">
        {content.map((e, index) => (
          <Card shadow="sm" key={index}>
            <CardBody className="flex flex-col gap-5 overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={e.title}
                className="w-full object-cover h-[15rem]"
                src={p1}
              />
              <div className="flex flex-row justify-evenly items-center gap-4">
                <div className="bg-pink-200 py-[0.5rem] rounded-xl p-[1rem] px-[2rem]">
                  <h1 className="text-red-500 font-bold text-1xl font-serif">{e.villa}</h1>
                </div>
                <div className="py-[1rem] px-[2rem]">
                  <h1 className="text-red-500 font-bold text-1xl font-serif">{e.price}</h1>
                </div>
              </div>
              <h2 className="px-[1rem] md:text-[1.2rem] text-1xl font-serif font-semibold text-black text-center">
                {e.Adress}
              </h2>
              <div className="grid grid-cols-2 gap-1 py-[1rem] px-[2rem] border-b-2 border-gray-500 ">
                <h3 className="font-normal md:text-[1.2rem] text-1xl">
                  Bedrooms: <span className="text-black md:text-[1.2rem] font-bold">{e.bedroom}</span>
                </h3>
                <h3 className="font-normal md:text-[1.2rem] text-xl">
                  Bathroom: <span className="text-black md:text-[1.2rem] font-bold">{e.bathroom}</span>
                </h3>
                <h3 className="font-normal md:text-[1.2rem] text-xl">
                  Area: <span className="text-black md:text-[1.2rem] font-bold">{e.area}</span>
                </h3>
                <h3 className=" font-normal md:text-[1.2rem] text-xl">
                  Floor: <span className="text-black md:text-[1.2rem] font-bold">{e.floor}</span>
                </h3>
                <h3 className=" font-normal md:text-[1.2rem] text-xl">
                  Parking: <span className="text-black md:text-[1.2rem] font-bold">{e.parking}</span>
                </h3>
              </div>
            </CardBody>
            <CardFooter className="text-small justify-center p-[1.5rem]">
              <Button className="" size="lg" variant="bordered" color="danger">
                Schedule Visit
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Product;
