import React, { useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import DetailsItem from "../../components/DetailsItem";
import { useSelector } from "react-redux";
import IsNotAuth from "../../components/IsNotAuth";
import { toast } from "react-toastify";
import { locBaseUrl } from "../../App";

function Dashboard() {
  const { user, isAuthenticated } = useSelector(state => state.user);

  if (!isAuthenticated) {
    return (<IsNotAuth message={'You are not authenticated. Please log in to view User Dashboard.'} />);
  }

  const showCurrentAddress = () => {
    // Ensure `user` and `user.currentAddress` exist
    if (!user || !user.currentAddress) {
      alert('No address information available.');
      return;
    }
  
    const { currentAddress } = user;
  
    // Construct the address details from the `currentAddress` object
    const addressDetails = `
      ${currentAddress.label},\n
      ${currentAddress.street ? currentAddress.street + ', ' : ''}
      ${currentAddress.housenumber ? currentAddress.housenumber + ', ' : ''}
      ${currentAddress.county ? currentAddress.county + ', ' : ''}
      ${currentAddress.region ? currentAddress.region + ', ' : ''}
      ${currentAddress.postalcode ? currentAddress.postalcode + ', ' : ''}
      ${currentAddress.country ? currentAddress.country : ''}
    `;
  
    toast.info(<div dangerouslySetInnerHTML={{ __html: addressDetails }} />);
  };
  

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">User Dashboard</h2>
          <Link to="/dashboard" className="text-indigo-600 hover:text-indigo-800">
            <FaUserEdit size={24} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <DetailsItem label="Name" value={user.name} />
          <DetailsItem label="Email" value={user.email} />
          <div className="md:col-span-2">
            <DetailsItem label="Address" value={user.address} />
          </div>
          <DetailsItem label="Latitude" value={user.latitude} />
          <DetailsItem label="Longitude" value={user.longitude} />
        </div>

        <div className="flex justify-between mb-6">
          <button
            onClick={showCurrentAddress}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
          Current Address
          </button>

          <a
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
            href={`${locBaseUrl}/c/?lat=${user.latitude}&long=${user.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Current Location
          </a>
        </div>

        <div className="flex justify-center">
          <Link
            to="/products"
            className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Show Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
