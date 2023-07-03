import React, { useRef, useEffect } from "react";
import Geocode from "react-geocode";
const AutocompleteInput = ({ onPlaceSelected, index }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current
    );
    Geocode.setApiKey("AIzaSyDYy31KeTisiiboB3aVNtsXM8DI6Om9NJg");
    Geocode.setLanguage("en");
    Geocode.setRegion("id");

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      Geocode.fromAddress(place.formatted_address).then(
        (response) => {
          console.log(response);
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          onPlaceSelected(index, lat, lng);
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }, [onPlaceSelected]);

  return (
    <input
      ref={inputRef}
      type="text"
      className="form-control"
      placeholder="Enter a location"
    />
  );
};

export default AutocompleteInput;
