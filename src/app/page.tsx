import Header from "@/components/header";
import PlaygroundSection from "@/components/playground-section";
import prisma from "@/prisma";

export default async function Home() {
  const templateOptions = await prisma.template.findMany();

  return (
    <main className="container justify-between min-h-screen mx-auto">
      <Header />
      {/* hero section  */}
      <div className="text-center relative">
        <h1 className="text-neutral-100 text-7xl font-bold text-center mb-5">
          <span className="block">AI Support</span>
          <span className="text-nowrap text-gradient"> for your writing</span>
        </h1>
        <p className="text-center text-neutral-100">
          Unlock Your Writing Magic. Effortlessly refine your messages
          <br />
          , creating compelling content that bewitches.
          <br />
          Perfect your expression effortlessly
        </p>
        <div className="absolute liner-gradient-hero h-[35vh] w-full top-0 -z-[5]" />
      </div>

      <PlaygroundSection templateOptions={templateOptions} />

      <div className="absolute image-hero-dots w-full h-full top-0 left-0 -z-10 opacity-55" />
      <div className="liner-gradient-blue absolute w-28 h-64 top-[30%] left-[65%]" />
    </main>
  );
}
