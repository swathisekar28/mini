import React from 'react';
import { Link } from 'react-router-dom';

// Example property data
const propertyData = [
  { id: 1, name: "Modern Villa", price: 500000, location: "California" },
  { id: 2, name: "Luxury Apartment", price: 350000, location: "New York" },
  { id: 3, name: "Beach House", price: 800000, location: "Florida" },
  { id: 4, name: "City Condo", price: 200000, location: "Chicago" },
];

const ListingsPage = () => {
  return (
    <div>
      <h1>Real Estate Listings</h1>
      <ul>
        {propertyData.map(property => (
          <li key={property.id}>
            <h2>{property.name}</h2>
            <p>Price: ${property.price}</p>
            <p>Location: {property.location}</p>
            <Link to={`/property/${property.id}`}>
              <button>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingsPage;
