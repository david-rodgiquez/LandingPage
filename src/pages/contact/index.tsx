import LayoutPage from "@/components/LayoutPage";
import axios from "axios";
import Head from "next/head";
import type { FormEvent } from "react";

export default function Page() {
  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as {
      fullName: string;
      email: string;
      phone: string;
      message?: string;
    };

    try {
      await axios.post("/api/contact", data);
    } catch (error) {}
  };
  return (
    <>
      <Head>
        <title>Contact | Rollup</title>
      </Head>
      <LayoutPage>
        <main className="w-full font-blender text-[#1B283B] my-20 ">
          <div className="w-full max-w-4xl px-4 flex gap-4 mx-auto flex-col items-center justify-center">
            <span className="uppercase text-base font-berkeley text-[#2D72D2] dark:text-[#4C90F0]">
              Contact Us
            </span>
            <h1 className="text-5xl text-center font-bold dark:text-white">
              Let&apos;s do something great together.
            </h1>
          </div>
          <div className="max-w-7xl px-4 mx-auto mt-32 font-blender flex gap-6">
            <div className="w-8/12 bg-white dark:bg-[#1C2127] text-black dark:text-white">
              <div className="w-full py-16 px-28 flex flex-col gap-8">
                <h3 className="text-4xl font-semibold">Contact Form</h3>
                <form
                  onSubmit={onSubmitForm}
                  className="w-full flex flex-col gap-4"
                >
                  {/*  */}
                  <div className="w-full text-xl flex gap-2 flex-col">
                    <label htmlFor="fullName">
                      Full name <span className="text-[#2D72D2]">*</span>
                    </label>
                    <input
                      required
                      id="fullName"
                      type="text"
                      name="fullName"
                      className="rounded-sm dark:text-white dark:focus:text-white py-2 px-4 border outline-none border-[#D3D8DE dark:border-[#252A31] focus:text-[#191C22] bg-white dark:bg-[#111418] focus:bg-[#E4F0FF] transition-colors focus:border-[#2D72D2] dark:focus:border-[#4C90F0]"
                    />
                  </div>

                  <div className="w-full text-xl flex gap-2 flex-col">
                    <label htmlFor="email">
                      Email <span className="text-[#2D72D2]">*</span>
                    </label>
                    <input
                      required
                      id="email"
                      type="email"
                      name="email"
                      className="rounded-sm dark:text-white dark:focus:text-white py-2 px-4 border outline-none border-[#D3D8DE dark:border-[#252A31] focus:text-[#191C22] bg-white dark:bg-[#111418] focus:bg-[#E4F0FF] transition-colors focus:border-[#2D72D2] dark:focus:border-[#4C90F0]"
                    />
                  </div>

                  <div className="w-full text-xl flex gap-2 flex-col">
                    <label htmlFor="phone">
                      Phone <span className="text-[#2D72D2]">*</span>
                    </label>
                    <input
                      required
                      id="phone"
                      type="phone"
                      name="phone"
                      className="rounded-sm dark:text-white dark:focus:text-white py-2 px-4 border outline-none border-[#D3D8DE dark:border-[#252A31] focus:text-[#191C22] bg-white dark:bg-[#111418] focus:bg-[#E4F0FF] transition-colors focus:border-[#2D72D2] dark:focus:border-[#4C90F0]"
                    />
                  </div>
                  <div className="w-full text-xl flex gap-2 flex-col">
                    <label htmlFor="message">What can we help you with?</label>
                    <textarea
                      rows={5}
                      id="message"
                      name="message"
                      className="rounded-sm dark:text-white dark:focus:text-white py-2 px-4 border outline-none border-[#D3D8DE dark:border-[#252A31] focus:text-[#191C22] bg-white dark:bg-[#111418] focus:bg-[#E4F0FF] transition-colors focus:border-[#2D72D2] dark:focus:border-[#4C90F0]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="dark:bg-[#252A31] dark:border-[#ABB3BF] dark:shadow-[3px_3px_0_0_#ffffff] py-3 mt-6 font-berkeley px-6 border-2 border-[#1B283B] rounded-sm flex justify-between items-center w-max gap-10 text-base bg-[#EDEFF2] hover:shadow-none dark:hover:shadow-none transition-shadow shadow-[3px_3px_0_0_#3B3F44]"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="w-4/12 bg-white dark:bg-[#1C2127] text-black dark:text-white">
              <div className="w-full py-16 px-28 flex flex-col gap-8">
                <h3 className="text-4xl font-semibold">Get in touch</h3>
                <div className="flex flex-col gap-2 leading-tight">
                  <h4 className="text-xl font-bold">Headquarters Address</h4>
                  <p className="text-lg dark:text-[#ABB3BF]">
                    Rollup HQ 10250 Constellation Blvd Suite 100 Los Angeles, CA
                    90067
                  </p>
                </div>
                <div className="flex flex-col gap-2 leading-tight">
                  <h4 className="text-xl font-bold">Rollup London</h4>
                  <p className="text-lg dark:text-[#ABB3BF]">United Kingdom</p>
                </div>
                <div className="flex flex-col gap-2 leading-tight">
                  <h4 className="text-xl font-bold">Contact Email</h4>
                  <p className="text-lg dark:text-[#ABB3BF]">
                    Info: info@rollup.ai
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

          <div className="px-4 max-w-7xl mx-auto">
            <div className="mt-6 font-blender flex gap-6 w-full h-[596px] bg-cover bg-no-repeat bg-center bg-[url(/img/map-light.svg)] dark:bg-[url(/img/map-dark.svg)]"></div>
          </div>
        </main>
      </LayoutPage>
    </>
  );
}
