import { cards } from "../../constants/cards";
import Card from "../card";

const LandingPage = () => {
  return (
    <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
        <div className=" flex-1">
          <h1 className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl   md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full">
            Shortify Your Links, Simplify Your Sharing
          </h1>
          <p className="text-slate-700 text-sm my-5">
            Turn lengthy URLs into compact, shareable links with Shortify. Boost
            your link-sharing experience with quick shortening, detailed
            analytics, and seamless management—all in one powerful platform.
          </p>

          <div className="flex items-center gap-3">
            <button className="bg-custom-gradient  w-40 text-white rounded-md  py-2">
              Manage Links
            </button>
            <button className="border-btnColor border w-40 text-btnColor rounded-md  py-2 ">
              Create Short Link
            </button>
          </div>
        </div>

        <div className="   flex-1 flex   justify-center w-full">
          <img
            className="sm:w-[480px] w-[400px] object-cover rounded-md"
            src="/images/logo-transparent.png"
            alt=""
          />
        </div>
      </div>

      <div className="sm:pt-12 pt-7">
        <p className="text-slate-800 font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center">
          Trusted by professionals and teams at leading global organizations.{" "}
        </p>
        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} desc={card.desc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
