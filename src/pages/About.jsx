import { Link } from "react-router-dom";
import AnimationWrapper from "../AnimationWrapper";
import img from "../assets/image55.png";

function About() {
  return (
    <AnimationWrapper>
      <section>
        <img
          src={img}
          alt="vanlife"
          className="h-60 md:h-96 w-screen object-cover object-top"
        />
        <section className="py-10 px-12">
          <h2 className="text-[32px] font-bold">
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
          <p className="mt-6">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="mt-4 mb-8">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <article className="bg-[#FFCC8D] px-10 py-8 ">
            <h3 className="text-2xl font-black">
              Your destination is waiting. Your van is ready.
            </h3>
            <Link
              className="bg-[#161616] text-white font-bold mt-6 py-3 px-5 rounded-lg block w-fit"
              to={"/vans"}>
              Explore Our Vans
            </Link>
          </article>
        </section>
      </section>
    </AnimationWrapper>
  );
}

export default About;
