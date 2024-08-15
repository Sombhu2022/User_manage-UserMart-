import React, { useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import DetailsItem from "../../components/DetailsItem";
import { useSelector } from "react-redux";
import IsNotAuth from "../../components/IsNotAuth";

function Dashboard() {
  const {user , isAuthenticated } = useSelector(state => state.user)

  if(!isAuthenticated){
    return(<IsNotAuth/>)
  }

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
