import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AnimationWrapper from "../AnimationWrapper";
import VanImg from "../assets/van.png";
import BackToParent from "../components/BackToParent";
function RentVan() {
  const van = useLoaderData();
  const [confirmed, setConfirmed] = useState(false);
  function setTypeClass(type) {
    if (type == "simple") {
      return "bg-[#E17654]";
    } else if (type == "luxury") {
      return "bg-[#161616]";
    } else {
      return "bg-[#115E59]";
    }
  }
  function onCancel() {
    window.location.href = "/vans";
  }
  return (
    <AnimationWrapper>
      <section className="md:px-[5vw] px-[3vw] py-10">
        {!confirmed && (
          <>
            <section className="py-3">
              <span>&#8678; </span>
              <BackToParent text={`Back to ${van.name}`} />
            </section>
            <h2 className="text-4xl font-bold py-4 pb-6">
              Please confirm your van details
            </h2>
            <section className=" md:flex flex-1 px-[5vw] py-8 items-center gap-6 max-w-4xl mx-auto text-[#161616]">
              <img
                src={van.imageUrl}
                alt="van"
                className="max-w-sm w-[80vw] rounded-[5px] mx-auto"
              />
              <section>
                <p
                  className={`${setTypeClass(
                    van.type
                  )} text-[#FFEAD0] py-1 px-3 w-max  font-semibold rounded-[5px] mt-10 md:mt-0`}>
                  {van.type}
                </p>
                <h2 className="text-[32px] font-bold mt-3">{van.name}</h2>

                <p className="font-medium text-xl mt-1">
                  <span className="font-bold text-2xl">${van.price}</span>/day
                </p>
                <p className="font-medium mt-3">{van.description}</p>
                <section className="flex mt-4 justify-between items-center gap-4">
                  <button
                    className="bg-white text-red-600 border-red-600 border rounded-md py-1 w-full hover:bg-red-600 hover:text-white transition-all "
                    onClick={onCancel}>
                    Cancel
                  </button>
                  <button
                    className=" border-[#FF8C38] border rounded-md py-1 w-full  bg-[#FF8C38] hover:scale-105 text-white transition-all "
                    onClick={() => setConfirmed(true)}>
                    Confirm
                  </button>
                </section>
              </section>
            </section>
          </>
        )}

        {confirmed && (
          <AnimationWrapper>
            <section className="md:px-[5vw] text-center px-[3vw] pb-10">
              <p className="text-3xl font-bold ">
                Your van will be shortly delivered to your address and you will
                be notified by email
              </p>
              <img
                src={VanImg}
                alt="van"
                className=" w-full sm:max-w-md mx-auto"
              />
              <Link
                to={"/vans"}
                className="bg-[#FF8C38] block text-center font-bold text-lg text-white w-full max-w-sm mx-auto mt-6 rounded-[5px] py-1.5">
                Explore other vans
              </Link>
            </section>
          </AnimationWrapper>
        )}
      </section>
    </AnimationWrapper>
  );
}

export default RentVan;
