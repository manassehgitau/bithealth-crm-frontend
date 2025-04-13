import React, { useState, useEffect, useContext } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import { ThemeContext } from "../context/ThemeContextProvider";

function VectorMap() {
  const [coordinates, setCoordinates] = useState([]);
  const [customerLocations, setCustomerLocations] = useState([]);
  const locations = [];
  const { theme } = useContext(ThemeContext);

  const textStyle = {
    fontSize: "7px",
    color: "white",
  };

  // Fetch data from backend API
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/admin/customers`,
          {
            headers: {
              Authorization: `bearer ${authToken}`,
            },
          }
        );
        const data = await response.json();

        data.map((customerData) => {
          locations.push(customerData.location);
        });
        setCustomerLocations(locations);
      } catch (error) {
        console.error("Error fetching Customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const results = [];
      for (let location of customerLocations) {
        try {
          const apiKey = import.meta.env.VITE_GEOCODE_API_KEY;
          const response = await fetch(
            `${import.meta.env.VITE_GEOCODE_BASE_URL}?text=${encodeURIComponent(
              location
            )}&lang=en&limit=1&type=city&apiKey=${apiKey}`
          );
          const data = await response.json();
          //   console.log(data)
          if (data.features && data.features.length > 0) {
            // console.log("I am here")
            const coords = data.features[0].geometry.coordinates;
            results.push({
              markerOffset: 25,
              name: location,
              coords: [coords[0], coords[1]],
            });
          } else {
            results.push({ location, error: "No coordinates found" });
          }
        } catch (error) {
          results.push({ location, error: error.message });
        }
      }
      setCoordinates(results);
    };
    fetchCoordinates();
  }, [customerLocations]);

  // console.log(coordinates);
  return (
    <div>
      <ComposableMap projection="geoMercator" style={{ width: "100%", height: "400" }}>
        <ZoomableGroup center={[0, 0]} zoom={1.5}>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={theme == "light" ? "#1551ff" : "#1551ff"}
                />
              ))
            }
          </Geographies>
          console.log(coordinates)
          {coordinates.map(({ name, coords }, index) => (
            <Marker key={`${name}-${index}`} coordinates={coords}>
              <circle r={7} fill="#F00" stroke="#fff" strokeWidth={1} />
              <text textAnchor="middle" y={-15} style={textStyle}>
                {name}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}

export default VectorMap;
