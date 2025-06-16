import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-blue text-white mt-10">
      <h1 className="flex justify-center text-heading py-3">
        <span className="font-bold">Event</span>
        <span className="text-primary font-bold"> Hive</span>
      </h1>
      <form className="flex justify-center gap-4">
        <input
          className="bg-white rounded-md text-black px-4"
          type="email"
          placeholder="Enter your mail"
          name="email"
        />
        <button className="bg-primary rounded-md py-2 px-4" type="submit">
          Subscribe
        </button>
      </form>
      <div className="text-center space-x-6 py-8 px-4">
        <span>Home</span>
        <span>About</span>
        <span>Service</span>
        <span>Get in Touch</span>
        <span>FAQs</span>
      </div>
      <hr className="w-[94%] mx-auto" />
      <div className="flex flex-row place-content-between py-4 px-10">
        <div className="space-x-4 ">
          <button className="hover:bg-[#7848F4] hover:rounded-sm hover:px-2 hover:py-1">
            English
          </button>
          <button className="hover:bg-[#7848F4] hover:rounded-sm hover:px-2 hover:py-1">
            French
          </button>
          <button className="hover:bg-[#7848F4] hover:rounded-sm hover:px-2 hover:py-1">
            Hindi
          </button>
        </div>
        <div className="flex flex-row space-x-3 pl-30 space-y-3 ">
          <Linkedin />
          <Instagram />
          <Facebook />
        </div>
        <p className="">Non Copyrighted &copy;2025 Upload by EventHive</p>
      </div>
    </footer>
  );
}
