

// components/PropertyDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

// Example property data (this could be fetched from an API in real-world apps)
const propertyData = [
  { id: 1, name: "Modern Villa", price: 500000, location: "California", description: "A luxurious villa with modern amenities." },
  { id: 2, name: "Luxury Apartment", price: 350000, location: "New York", description: "A premium apartment in the heart of the city." },
  { id: 3, name: "Beach House", price: 800000, location: "Florida", description: "A beautiful beach house with ocean views." },
  { id: 4, name: "City Condo", price: 200000, location: "Chicago", description: "A cozy condo in the downtown area." },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertyData.find(p => p.id === parseInt(id));

  if (!property) {
    return <h2>Property not found</h2>;
  }

  return (
    <div>
      <h1>{property.name}</h1>
      <p><strong>Price:</strong> ${property.price}</p>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Description:</strong> {property.description}</p>
    </div>
  );
};

export default PropertyDetails;
