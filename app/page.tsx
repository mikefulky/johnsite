import Head from "next/head";
import Image from "next/image";
import Navbar from "./navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>John Fulkerson | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="py-12 px-12">
        <div className="grid grid-flow-col">
          <Image
            src="/images/headshot.png"
            alt=""
            className=""
            height={500}
            width={500}
          ></Image>
          <div className="flex justify-center items-center">
            <div className="">
              <h1 className="text-left text-[8vw] leading-none">John</h1>
              <h1 className="text-left text-[8vw] leading-none">Fulkerson</h1>
              <h2 className="text-left text-[1.8vw] pb-3">
                BS Computer Science | University of Delaware ’26
              </h2>
              <div className="grid grid-flow-col">
                <a href="mailto:johnfulky@mac.com">
                  <Image
                    src="/icons/email.svg"
                    alt=""
                    className="pr-2"
                    width={100}
                    height={24}
                    priority
                  ></Image>
                </a>
                <a href="https://github.com/JTFulkerson">
                  <Image
                    src="/icons/github.svg"
                    alt=""
                    className="pr-2"
                    width={100}
                    height={24}
                    priority
                  ></Image>
                </a>
                <a href="https://www.linkedin.com/in/jtfulkerson/">
                  <Image
                    src="/icons/linkedin.svg"
                    alt=""
                    className="pr-2"
                    width={100}
                    height={24}
                    priority
                  ></Image>
                </a>
                <a href="https://www.instagram.com/jt_fulkerson/">
                  <Image
                    src="/icons/instagram.svg"
                    alt=""
                    className="pr-2"
                    width={100}
                    height={24}
                    priority
                  ></Image>
                </a>
                <a href="https://twitter.com/JT_Fulkerson">
                  <Image
                    src="/icons/twitter.svg"
                    alt=""
                    className="pr-2"
                    width={100}
                    height={24}
                    priority
                  ></Image>
                </a>
                <a href="https://www.facebook.com/john.fulkerson.98837/">
                  <Image
                    src="/icons/facebook.svg"
                    alt=""
                    className="pr-2"
                    width={100}
                    height={24}
                    priority
                  ></Image>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
