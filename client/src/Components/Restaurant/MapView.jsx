import React from 'react'
import { MdContentCopy } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//import { useSelector } from 'react-redux';
//import { useState } from 'react';

const Mapview = (props) => {
    const position = props.mapLocation
    return (
        <>
            <div >
                <h4 className="text-xl font-normal">Call</h4>
                <h5 className="text-zomato-400 font-small">+91 {props.phno}</h5>
            </div>
            <div>
                <h4 className="text-xl font-normal">Address</h4>
                <h6 className="text-zomato-400 font-small">{props.address}</h6>
            </div>
            <div>
                <h4 className="text-xl font-normal">Direction</h4>
                <div className="w-full h-48">
                    <MapContainer
                        center={position}
                        zoom={13}
                        scrollWheelZoom={false}
                        className="h-full"
                    >
                        <TileLayer
                            attribution='<a href="https://www.openstreetmap.org/copyright">OSM</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                        />
                        <Marker position={position}>
                            <Popup>{props.title}</Popup>
                        </Marker>
                    </MapContainer>
                    {/* <MapContainer center={props.mapLocation} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={props.mapLocation}>
                            <Popup>
                                {props.title}
                            </Popup>
                        </Marker>
                    </MapContainer> */}
                </div>
            </div>
            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg">
                    <MdContentCopy /> Copy
                </button>
                <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${props.mapLocation}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg"
                >
                    <span className="text-zomato-400">
                        <FaDirections />
                    </span>{" "}
                    Direction
                </a>
            </div>
        </>
    )
}

export default Mapview