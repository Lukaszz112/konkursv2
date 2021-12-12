//     apiKey: 'AIzaSyBHsUYeJ9gYAE6CsPOePRbYnQz_8zpfxTo'

import {
    GoogleMap,
    useLoadScript,
    Marker,
} from '@react-google-maps/api';
import mapStyles from './mapStyles';
import { useRef } from 'react';

const libraries = ["places"];

const MapStyled = {
    width: "80vw",
    height: "400px",
    margin: "auto",
    position: "relative",
    top: "20px",
    borderRadius: "20px",
};

const markerApteki = [
    {lat: 51.917225874698104, lng: 22.37610306253429},
    {lat: 51.92088818375342, lng: 22.377504333924783},
    {lat: 51.929517831449076,lng: 22.38203870508904},
    {lat: 51.93518597336654, lng: 22.3872410915974},
    {lat: 51.93044622925959, lng: 22.383554805089037},
    {lat: 51.924458893922164, lng: 22.37835650508885},
    {lat: 51.932234825041135, lng: 22.38598571858098},
    {lat: 51.930023830255756, lng: 22.37984793392516},
    {lat: 51.93955896498595, lng: 22.38617782043365},
    {lat: 51.92297768055078, lng: 22.38010326276094},
    {lat: 51.92482999180765, lng: 22.37827300508892},
    {lat: 51.936490400290296, lng: 22.38669946090895},
    {lat: 51.92158770088751, lng: 22.377211718580586},
    {lat: 51.93153688035933, lng: 22.382521933925126},
    {lat: 51.93437029514833, lng: 22.379532178105617},
    {lat: 51.93515689271306, lng: 22.387695505089248},
    {lat: 51.93221567112254, lng: 22.385909518580938},
    {lat: 51.93530918801584, lng: 22.382674691597423},
    {lat: 51.9295460999093, lng: 22.381802718580868},
    {lat: 51.93536019208383, lng: 22.382551418581045}];

// const elektro = [{lat: 51.90195215408399, lng: 22.361682015571308}];

const center = {
    lat: 51.92792824183875, 
    lng: 22.38082861485856
}

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

export default function Map({trash,town}){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyBHsUYeJ9gYAE6CsPOePRbYnQz_8zpfxTo',
        libraries,
    });

    const marker = useRef([]);

    const elektro = [{lat: 51.90195215408399, lng: 22.361682015571308}];
//  const err = [{lat: 0, lng: 0}];

    if(loadError) return "Error loading maps..";
    if(!isLoaded) return "Loading maps..";

        if(trash === "elektro" && town === "Łuków"){
            marker.current = elektro;
        }else if(trash === "leki" && town === "Łuków"){
            marker.current = markerApteki;
        }

    return (<div>
        <GoogleMap
            mapContainerStyle = {MapStyled}
            zoom = {12}
            center = {center}
            options = {options}
        >
        
        {marker.current.map((marker) => (
            <Marker 
                position={{lat: marker.lat, lng: marker.lng}}
                key={marker}
            />
        ))}

        </GoogleMap>
    </div>
    );}