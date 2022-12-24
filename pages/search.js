import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Map from "../components/Map";
import { useEffect } from "react";
import LocationCard from "../components/LocationCard";

function Search({ searchResults }) {
  const router = useRouter();
//   useEffect(() => {
//       window.localStorage.setItem('data', JSON.stringify(searchResults));
//   }, []);

  const { location, startDate, endDate, noOfLuggages } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");

  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${noOfLuggages} | ${range} | ${location} luggages`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs font-bold">
            No of Luggage {noOfLuggages} - Date {range}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-2">
            Luggage Storage {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map((searchResults) => (
              <LocationCard
                id={searchResults.id}
                key={searchResults.id}
                img={searchResults.img}
                location={searchResults.location}
                title={searchResults.title}
                description={searchResults.description}
                total={searchResults.total}
              />
            ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[700px] xl:flex-grow ">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/XRE1").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
