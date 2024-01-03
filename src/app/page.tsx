import Header from "@/components/header";
import PlaygroundSection from "@/components/playground-section";
import prisma from "@/prisma";

export default async function Home() {
  const templateOptions = await prisma.template.findMany({
    orderBy: { id: "asc" },
  });

  return (
    <main className="container fle min-h-screen mx-auto px-5 lg:px-5">
      <Header />
      {/* hero section  */}
      <div className="text-center mt-[10vh]">
        <h1 className="text-neutral-100 text-4xl xs:text-5xl sm:text-6xl font-bold text-center mb-5">
          <span className="block">AI Support</span>
          <span className="text-gradient"> for your writing</span>
        </h1>
        <p className="text-center text-neutral-100 text-[0.60rem] xs:text-sm sm:text-base">
          Unlock Your Writing{" "}
          <span className="underline decoration-wavy underline-offset-8 decoration-secondary">
            Magic.
          </span>{" "}
          Effortlessly refine your messages.
        </p>
        {/* <div className="absolute liner-gradient-hero h-[40vh] w-full top-0 -z-[5]" /> */}
      </div>

      <PlaygroundSection templateOptions={templateOptions} />

      <div className="absolute image-hero-dots w-full h-full top-0 left-0 -z-10 opacity-30" />
      <div className="liner-gradient-blue hidden xl:block absolute w-28 h-64 top-[5%] left-[30%] -z-10" />
      <div className="liner-gradient-blue absolute w-28 h-64 top-[15%] left-[66%] -z-10" />
    </main>
  );
}
