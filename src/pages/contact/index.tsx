import LayoutPage from "@/components/LayoutPage";
import Head from "next/head";
import Image from "next/image";
import MapImage from "../../../public/img/contact-map.png";

export default function Page() {
  return (
    <>
      <Head>
        <title>Contact | Rollup</title>
      </Head>
      <LayoutPage>
        <main className="w-full font-blender text-[#1B283B] my-20 ">
          <div className="w-full max-w-4xl px-4 flex gap-4 mx-auto flex-col items-center justify-center">
            <span className="uppercase text-base font-berkeley text-[#2D72D2]">
              Contact Us
            </span>
            <h1 className="text-5xl text-center font-bold ">
              Something great
              <br />
              together
            </h1>
          </div>

          {/*  */}
          <div className="max-w-7xl px-4 mx-auto mt-32 font-blender flex gap-6">
            <div className="w-8/12 bg-white">
              <div className="w-full py-16 px-28 flex flex-col gap-8">
                <h3 className="text-4xl font-semibold">Contact Form</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="w-full flex flex-col gap-4"
                >
                  {/*  */}
                  <div className="w-full text-xl flex gap-2 flex-col">
                    <label htmlFor="fullName" className="text-black">
                      Full name <span className="text-[#2D72D2]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      className="rounded-sm py-2 px-4 border outline-none border-[#D3D8DE] focus:text-[#191C22] focus:bg-[#E4F0FF] transition-colors focus:border-[#2D72D2] "
                    />
                  </div>

                  <div className="w-full text-xl flex gap-2 flex-col">
                    <label htmlFor="email" className="text-black">
                      Email <span className="text-[#2D72D2]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="rounded-sm py-2 px-4 border outline-none border-[#D3D8DE] focus:text-[#191C22] focus:bg-[#E4F0FF] transition-colors focus:border-[#2D72D2] "
                    />
                  </div>

                  <div className="w-full text-xl flex gap-2 flex-col">
                    <label htmlFor="phone" className="text-black">
                      Phone <span className="text-[#2D72D2]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="phone"
                      name="phone"
                      className="rounded-sm py-2 px-4 border outline-none border-[#D3D8DE] focus:text-[#191C22] focus:bg-[#E4F0FF] transition-colors focus:border-[#2D72D2] "
                    />
                  </div>

                  <div className="w-full text-xl flex gap-2 flex-col">
                    <label htmlFor="message" className="text-black">
                      What can we help you with?
                    </label>
                    <textarea
                      rows={5}
                      id="message"
                      name="message"
                      className="rounded-sm py-2 px-4 border outline-none border-[#D3D8DE] focus:text-[#191C22] focus:bg-[#E4F0FF] transition-colors focus:border-[#2D72D2] "
                    />
                  </div>

                  <button
                    type="submit"
                    className="py-3 mt-6 font-berkeley px-6 border-2 border-[#1B283B] rounded-sm flex justify-between items-center w-max gap-10 text-base bg-[#EDEFF2] hover:shadow-none transition-shadow shadow-[3px_3px_0_0_#3B3F44]"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="w-4/12 bg-white">
              <div className="w-full py-16 px-28 flex flex-col gap-8">
                <h3 className="text-4xl font-semibold">Get in touch</h3>
                <div className="flex flex-col gap-2 leading-tight">
                  <h4 className="text-xl font-bold">Headquarters Address</h4>
                  <p className="text-lg">
                    Rollup HQ 10250 Constellation Blvd Suite 100 Los Angeles, CA
                    90067
                  </p>
                </div>
                <div className="flex flex-col gap-2 leading-tight">
                  <h4 className="text-xl font-bold">Rollup London</h4>
                  <p className="text-lg">United Kingdom</p>
                </div>
                <div className="flex flex-col gap-2 leading-tight">
                  <h4 className="text-xl font-bold">Contact Email</h4>
                  <p className="text-lg">
                    For info: info@rollup.ai
                    <br />
                    Legal: legal@rollup.ai
                    <br />
                    Support: support@rollup.ai
                    <br />
                    Sales: sales@rollup.ai
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl px-4 mx-auto mt-6 font-blender flex gap-6">
            <Image quality={100} src={MapImage} alt="map" className="w-full" />
          </div>
        </main>
      </LayoutPage>
    </>
  );
}
