import Head from "next/head";
import LayoutPage from "@/components/LayoutPage";

export default function About() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <LayoutPage>
        <main className="w-full mx-auto max-w-3xl mt-12 font-blender mb-28">
          <div className="flex justify-center items-center flex-col gap-4 mb-14">
            <h1 className="font-bold text-4xl text-[#1B283B]">
              Privacy Policy
            </h1>
            <div className="text-lg text-[#404854]">
              Last updated:{" "}
              {new Date().toLocaleDateString(undefined, { dateStyle: "long" })}
            </div>
          </div>
          <div className="space-y-10 w-full">
            <div className="w-full text-xl space-y-2">
              <h2 className="text-2xl font-bold">Subtitle</h2>
              <ol className="list-decimal pl-4 space-y-4">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ullamcorper arcu vel felis lobortis, eu tempor dolor iaculis.
                  Etiam sed hendrerit odio, et sagittis lectus. Pellentesque nec
                  sodales metus. Morbi blandit non ligula eget viverra. Nam ac
                  risus viverra, pulvinar ipsum sit amet, dignissim erat. Nullam
                  rutrum lobortis tristique. Phasellus mattis, turpis in tempor
                  consectetur, leo enim luctus risus, nec vestibulum nunc ipsum
                  non odio. Nulla facilisi. Donec commodo facilisis augue. Ut ac
                  massa sit amet leo vestibulum viverra.
                </li>
                <li>
                  Nullam vel enim posuere, blandit risus sed, accumsan ligula.
                  Nulla scelerisque ullamcorper enim, et condimentum orci
                  accumsan sit amet. Sed viverra tortor non maximus semper.
                  Vivamus malesuada magna ut quam faucibus facilisis. Proin
                  ornare dolor non quam venenatis sollicitudin. Suspendisse
                  congue odio ac justo dictum, sit amet venenatis ex pretium.
                  Vivamus blandit dui at turpis dignissim pulvinar. Vestibulum
                  posuere orci at lacus porta congue. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nullam sollicitudin dolor ac libero fermentum
                  ullamcorper. Nullam ac nisi pulvinar est mattis venenatis.
                  Fusce vitae malesuada tellus. Duis ut cursus nunc.
                </li>
                <li>
                  Proin et lobortis sem. Vivamus molestie odio quis arcu
                  eleifend fringilla. Etiam dolor quam, iaculis id quam eget,
                  fermentum pharetra urna. Integer bibendum non velit vitae
                  imperdiet. Suspendisse a turpis in turpis fringilla mattis.
                  Suspendisse id ligula nec est bibendum egestas eget id libero.
                  Nam augue massa, interdum non nunc eu, viverra pulvinar justo.
                  In lobortis mollis ante ac scelerisque. Aliquam dolor augue,
                  aliquam id fringilla vel, aliquam pulvinar sem. Morbi euismod
                  pretium ipsum a efficitur. Proin ultricies nisl dui, non
                  accumsan mauris imperdiet sed. Curabitur dignissim turpis ut
                  pretium luctus.
                </li>
              </ol>
            </div>
            <div className="w-full text-xl space-y-2">
              <h2 className="text-2xl font-bold">Subtitle</h2>
              <ol className="list-decimal pl-4 space-y-4">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ullamcorper arcu vel felis lobortis, eu tempor dolor iaculis.
                  Etiam sed hendrerit odio, et sagittis lectus. Pellentesque nec
                  sodales metus. Morbi blandit non ligula eget viverra. Nam ac
                  risus viverra, pulvinar ipsum sit amet, dignissim erat. Nullam
                  rutrum lobortis tristique. Phasellus mattis, turpis in tempor
                  consectetur, leo enim luctus risus, nec vestibulum nunc ipsum
                  non odio. Nulla facilisi. Donec commodo facilisis augue. Ut ac
                  massa sit amet leo vestibulum viverra.
                </li>
                <li>
                  Nullam vel enim posuere, blandit risus sed, accumsan ligula.
                  Nulla scelerisque ullamcorper enim, et condimentum orci
                  accumsan sit amet. Sed viverra tortor non maximus semper.
                  Vivamus malesuada magna ut quam faucibus facilisis. Proin
                  ornare dolor non quam venenatis sollicitudin. Suspendisse
                  congue odio ac justo dictum, sit amet venenatis ex pretium.
                  Vivamus blandit dui at turpis dignissim pulvinar. Vestibulum
                  posuere orci at lacus porta congue. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nullam sollicitudin dolor ac libero fermentum
                  ullamcorper. Nullam ac nisi pulvinar est mattis venenatis.
                  Fusce vitae malesuada tellus. Duis ut cursus nunc.
                </li>
                <li>
                  Proin et lobortis sem. Vivamus molestie odio quis arcu
                  eleifend fringilla. Etiam dolor quam, iaculis id quam eget,
                  fermentum pharetra urna. Integer bibendum non velit vitae
                  imperdiet. Suspendisse a turpis in turpis fringilla mattis.
                  Suspendisse id ligula nec est bibendum egestas eget id libero.
                  Nam augue massa, interdum non nunc eu, viverra pulvinar justo.
                  In lobortis mollis ante ac scelerisque. Aliquam dolor augue,
                  aliquam id fringilla vel, aliquam pulvinar sem. Morbi euismod
                  pretium ipsum a efficitur. Proin ultricies nisl dui, non
                  accumsan mauris imperdiet sed. Curabitur dignissim turpis ut
                  pretium luctus.
                </li>
              </ol>
            </div>
          </div>
        </main>
      </LayoutPage>
    </>
  );
}
