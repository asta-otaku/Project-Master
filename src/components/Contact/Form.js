import React from "react";

export default function Form() {
  return (
    <>
      <div className="mt-24 py-8 w-[612px] mx-auto">
        <form className="flex flex-col w-[360px] mx-auto">
          <label name="fullName">Full Name</label>
          <input
            name="fullName"
            placeholder="Akowonjo Natalie"
            className="py-2 pl-2 border rounded-lg border-grey mt-2"
          />
          <label name="email" className="mt-6">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="yours@company.com"
            className="py-2 pl-2 border rounded-lg border-grey mt-2"
          />
          <label name="message" className="mt-6">
            Message
          </label>
          <textarea
            name="message"
            placeholder="I think I need..."
            className="py-2 pl-2 h-36 border rounded-lg border-grey mt-2"
          />
          <button className="mt-8 w-[200px] bg-green text-white hover:bg-grey hover:text-green font-medium py-4 px-10 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
      <div className="bg-green w-[80%] py-16 mt-60 rounded-xl flex flex-col items-center mx-auto">
        <h2 className="font-grotesk font-bold text-white text-[48px] text-center w-[900px]">
          Build Products people love. Together with your team.
        </h2>
        <button className="mt-10 bg-[#D0DEDE] hover:bg-white rounded-md font-medium text-green py-[15px] px-[45px]">
          Get Started for free
        </button>
      </div>
    </>
  );
}
