'use client';

import Map, {
  Marker,
  GeolocateControl,
  FullscreenControl,
  NavigationControl,
  ScaleControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { BiSolidMap } from 'react-icons/bi';
import { SiGooglemaps } from 'react-icons/si';

type LocationMapProps = {
  latitude: number;
  longitude: number;
};

export default function LocationMap({ latitude, longitude }: LocationMapProps) {
  return (
    <div
      className="mx-container-sm aspect-square xs:aspect-[3/2] sm:aspect-[5/2]"
      style={{ height: '100%' }}
    >
      <Map
        initialViewState={{
          latitude: latitude,
          longitude: longitude,
          zoom: 15,
          bearing: 0,
          pitch: 0,
        }}
        scrollZoom={false}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken="pk.eyJ1IjoibWFoYWRpYWJ1c3VmeWFuIiwiYSI6ImNsZnR3bmhtcjA1NzgzbXBpeWl4c3dheDUifQ.K2UIkclQkaSJo-fk2VLXFw"
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        {/* <ScaleControl /> */}

        <Marker longitude={longitude} latitude={latitude} anchor="bottom">
          <SiGooglemaps size={40} color="#131526" />
        </Marker>
      </Map>
    </div>
  );
}
