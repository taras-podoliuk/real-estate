import { useGetPropertyQuery } from "@/state/api";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Compass, MapPin } from "lucide-react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

function PropertyLocation({ propertyId }: PropertyDetailsProps) {
  const mapContainerRef = useRef(null);
  const {
    data: property,
    isError,
    isLoading,
  } = useGetPropertyQuery(propertyId);

  useEffect(() => {
    if (isLoading || isError || !property) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/yukeo/cm8snlfu400g501s9azhlexo3",
      center: [
        property.location.coordinates.longitude,
        property.location.coordinates.latitude,
      ],
      zoom: 14,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([
        property.location.coordinates.longitude,
        property.location.coordinates.latitude,
      ])
      .addTo(map);

    const markerElement = marker.getElement();
    const path = markerElement.querySelector("path[fill='#3FB1CE']");
    if (path) path.setAttribute("fill", "#000000");

    return () => map.remove();
  }, [property, isError, isLoading]);

  if (isLoading) return <>Loading...</>;
  if (isError || !property) return <>Property not found</>;

  return (
    <div className="py-16">
      <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-100">
        Map and Location
      </h3>
      <div className="flex justify-between items-center text-sm text-primary-500 mt-2">
        <div className="flex items-center text-gray-500">
          <MapPin className="size-4 mr-1 text-gray-700" />
          Property Address:
          <span className="font-semibold ml-2 text-gray-700">
            {property.location?.address || "Address not available"}
          </span>
        </div>
        <a
          href={`https://maps.google.com/?=q${encodeURIComponent(
            property.location?.address || ""
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center hover:underline gap-2 text-primary-600"
        >
          <Compass className="size-5" />
          Get Directions
        </a>
      </div>
      <div
        className="relative mt-4 h-[300px] rounded-lg overflow-hidden"
        ref={mapContainerRef}
      />
    </div>
  );
}

export default PropertyLocation;
