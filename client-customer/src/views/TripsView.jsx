import { useEffect, useState } from "react";
import TripCard from "../components/TripCard";

export default function Trips() {
  

  function filterLodging() {
    return "GG";
  }

  function searchLodging() {
    return "GG";
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container mx-auto my-40 px-10">
        <div class="flex gap-8 m-10">
          <select
            onChange={filterLodging}
            class="relative cursor-pointer pb-1 border-b border-gray-400 text-sm font-medium transition hover:border-gray-600 "
          >
            <option selected disabled>
              Filter berdasarkan kategori
            </option>
            <option value="type.id">GG</option>
            <option value="type.id">GG</option>
            <option value="type.id">GG</option>
            <option value="type.id">GG</option>
          </select>

          <div class="flex gap-4">
            <input
              type="search"
              class="w-auto rounded-lg border border-gray-300 text-sm shadow-sm px-4"
              placeholder="Cari trip"
            />
            <button
              onClick={searchLodging}
              class="block rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Cari
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <TripCard></TripCard>
          <TripCard></TripCard>
          <TripCard></TripCard>
          <TripCard></TripCard>
          <TripCard></TripCard>
          <TripCard></TripCard>
          <TripCard></TripCard>
          <TripCard></TripCard>
          <TripCard></TripCard>
          <TripCard></TripCard>
        </div>

      </div>
    </>
  );
}
