import { Hero } from "@/components";
import Carcard from "@/components/Carcard";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import { fetchcars } from "@/utils";

import Image from "next/image";

export default async function Home() {
  const allcars = await fetchcars();
  const isdataempty = !Array.isArray(allcars) || allcars.length < 1 || !allcars;
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="hero__text-container">
          <h1 className="tex-3xl font-extrabold">Car Catalogue</h1>
          <p>Explore the car</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter  />
            <CustomFilter  />
          </div>
        </div>

        {!isdataempty ? (
          <section>
            <div className="home__cars-wrapper">
              {allcars?.map((car) => (
                <Carcard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Opps! NO CARS</h2>
            <p>{allcars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
