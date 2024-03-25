import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapView = ({coordinates , propertyPage}) => {
    const defaultCoordinates = [12.8912831, 77.5799345];
    return (
      <div id="map" className="map" style={propertyPage ? {height: "300px", minWidth: "300px", maxWidth: "100%"} : {height: "400px", width: "600px"}}>
      <MapContainer center={coordinates? coordinates: defaultCoordinates} zoom={13} style={{height: "100%", width: "100%"}} scrollWheelZoom={false}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={coordinates? coordinates: defaultCoordinates}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
    )
  }


export default MapView;