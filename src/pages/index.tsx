import TagSEO from "@/components/TagSEO"
import { Inter } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import TaxCalculator from "../components/TaxCalculator"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  useState
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-14 lg:p-24 ${inter.className}`}
    >
      <TagSEO
        title={`LHDN Tax Calculator - How to Calculate (CP502) Increase in Tax If the Amended Estimated Tax`}
        canonicalSlug="home"
        keywords="lhdn calculate cp502 increase in tax"
        description="This is an open-source, tool to help calculate CP502 increase in tax for amended estimated tax payments under LHDN in Malaysia"
      />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link
          href="https://github.com/kovoor/tax-tools"
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 underline"
        >
          Tax Tools (Open-Source)
        </Link>
        <div className="lg:flex flex-row gap-2 justify-center align-middle items-center mt-10 sm:mt-0 hidden">
          Built in public by{" "}
          <a
            href="https://twitter.com/jakekovoor"
            target="_blank"
            className="flex justify-center bg-white font-bold p-2 rounded-2xl items-center gap-1 border-b border-gray-300 bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200  lg:dark:bg-zinc-800/30"
          >
            <Image
              src="/profile-pic.jpg"
              width={30}
              height={10}
              alt="Picture of the developer"
              className="rounded-full"
            />
            @jakekovoor
          </a>
        </div>
      </div>
      <h1 className=" mt-10 text-lg font-bold font-mono underline max-w-xl text-center">
        LHDN Tax Calculator - How to Calculate (CP502) Increase in Tax If the Amended Estimated Tax
        Is Lower
      </h1>

      <TaxCalculator />
      <div className="border-b border-gray-300 backdrop-blur-2xl dark:border-neutral-800" />

      <div className="grid text-center lg:max-w-2xl lg:w-full lg:mb-0  lg:text-left">
        <a
          href="https://phl.hasil.gov.my/pdf/pdfam/CP502_NOTA_PENERANGAN_2.pdf"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Official Source{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>CP502 Explanation (PDF) - LHDN</p>
        </a>

        {/* <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
      </div>
      <div className="flex flex-row gap-2 justify-center align-middle items-center mt-10 sm:mt-0 lg:hidden font-mono text-xs">
        Built in public by{" "}
        <a
          href="https://twitter.com/jakekovoor"
          target="_blank"
          className="flex justify-center bg-white font-bold p-2 rounded-2xl items-center gap-1 border-b border-gray-300     backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200  lg:dark:bg-zinc-800/30"
        >
          <Image
            src="/profile-pic.jpg"
            width={30}
            height={10}
            alt="Picture of the developer"
            className="rounded-full"
          />
          @jakekovoor
        </a>
      </div>
    </main>
  )
}
