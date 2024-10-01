import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/header";
import Footer from "../Components/footer";
import { FaChevronLeft, FaChevronRight, FaEye, FaTimes } from "react-icons/fa";

const acceptedData = [
  // Sample data for accepted tab
  {
    number: 1,
    discordname: "User#1234",
    age: 25,
    realname: "John Doe",
    status: "Accepted",
    steamLink: "https://steamcommunity.com/id/user",
    question1: "Answer 1",
    question2: "Answer 2",
    question3: "Answer 3",
    question4: "Answer 4",
  },
  // Add more data as needed
];

const pendingData = [
  // Sample data for pending tab
  {
    number: 2,
    discordname: "User#5678",
    age: 22,
    realname: "Jane Doe",
    status: "Pending",
    steamLink: "https://steamcommunity.com/id/user2",
    question1: "Pending Answer 1",
    question2: "Pending Answer 2",
    question3: "Pending Answer 3",
    question4: "Pending Answer 4",
  },
  // Add more data as needed
];

const rejectedData = [
  // Sample data for rejected tab
  {
    number: 3,
    discordname: "User#91011",
    age: 30,
    realname: "Sam Smith",
    status: "Rejected",
    steamLink: "https://steamcommunity.com/id/user3",
    question1: "Rejected Answer 1",
    question2: "Rejected Answer 2",
    question3: "Rejected Answer 3",
    question4: "Rejected Answer 4",
  },
  // Add more data as needed
];

function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(3); // Define total pages
  const [activeTab, setActiveTab] = useState("Accepted"); // Manage tabs
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal
  const [selectedEntry, setSelectedEntry] = useState(null); // Track selected entry

  // Helper function to paginate data
  const paginateData = (data) => {
    const itemsPerPage = 5;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  // Pagination component
  const renderPagination = (data) => {
    return (
      <div className="flex items-center justify-center mt-4">
        <button
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-600 text-white hover:bg-gray-700 shadow-lg transition-shadow duration-200 ease-in-out ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaChevronLeft size={16} />
        </button>

        <div className="mx-2"></div>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`px-4 py-2 rounded-full transition-colors duration-200 ease-in-out shadow-lg ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="mx-2"></div>

        <button
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-600 text-white hover:bg-gray-700 shadow-lg transition-shadow duration-200 ease-in-out ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaChevronRight size={16} />
        </button>
      </div>
    );
  };

  // Render a table for the provided data
  const renderTable = (data) => {
    return (
      <>
        <table className="min-w-full bg-gray-800 text-gray-200 rounded-lg overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-gray-700 text-left text-sm uppercase tracking-wider">
              <th className="py-3 px-6">#</th>
              <th className="py-3 px-6">Discord Name</th>
              <th className="py-3 px-6">Age</th>
              <th className="py-3 px-6">Real Name</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginateData(data).map((item) => (
              <tr
                key={item.number}
                className="hover:bg-gray-700 transition-colors"
              >
                <td className="py-3 px-6">{item.number}</td>
                <td className="py-3 px-6">{item.discordname}</td>
                <td className="py-3 px-6">{item.age}</td>
                <td className="py-3 px-6">{item.realname}</td>
                <td className="py-3 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "Accepted"
                        ? "bg-green-500"
                        : item.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-6">
                  <FaEye
                    className="text-blue-500 cursor-pointer hover:underline mr-2"
                    onClick={() => {
                      setSelectedEntry(item);
                      setIsModalOpen(true);
                    }}
                    size={20}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Render pagination controls */}
        {renderPagination(data)}

        {/* Modal for additional details */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-3/4 md:w-1/2 relative transform scale-100 transition-transform duration-300 ease-in-out">
              <button
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200"
                onClick={() => setIsModalOpen(false)}
              >
                <FaTimes size={24} className="text-gray-600" />
              </button>
              <h2 className="text-xl font-bold mb-4">Additional Details</h2>
              {selectedEntry && (
                <div>
                  <p className="mb-2">
                    <strong>Discord Name:</strong> {selectedEntry.discordname}
                  </p>
                  <p className="mb-2">
                    <strong>Real Name:</strong> {selectedEntry.realname}
                  </p>
                  <p className="mb-2">
                    <strong>Age:</strong> {selectedEntry.age}
                  </p>
                  <p className="mb-2">
                    <strong>Status:</strong> {selectedEntry.status}
                  </p>
                  <p className="mb-2">
                    <strong>Steam Link:</strong>{" "}
                    <a
                      href={selectedEntry.steamLink}
                      className="text-blue-500 hover:underline"
                    >
                      {selectedEntry.steamLink}
                    </a>
                  </p>
                  <p className="mb-2">
                    <strong>Question 1:</strong> {selectedEntry.question1}
                  </p>
                  <p className="mb-2">
                    <strong>Question 2:</strong> {selectedEntry.question2}
                  </p>
                  <p className="mb-2">
                    <strong>Question 3:</strong> {selectedEntry.question3}
                  </p>
                  <p className="mb-2">
                    <strong>Question 4:</strong> {selectedEntry.question4}
                  </p>
                </div>
              )}
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded shadow-lg hover:bg-green-600 transition duration-200 ease-in-out mr-2"
                  onClick={() => {
                    console.log("Accepted:", selectedEntry);
                    setIsModalOpen(false);
                  }}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded shadow-lg hover:bg-red-600 transition duration-200 ease-in-out"
                  onClick={() => {
                    console.log("Rejected:", selectedEntry);
                    setIsModalOpen(false);
                  }}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-1 bg-gray-100 p-4">
          {/* Tab buttons */}
          <div className="flex space-x-4 mb-4">
            <button
              className={`flex-1 py-2 rounded ${
                activeTab === "Accepted"
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
              onClick={() => setActiveTab("Accepted")}
            >
              Accepted
            </button>
            <button
              className={`flex-1 py-2 rounded ${
                activeTab === "Pending"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
              onClick={() => setActiveTab("Pending")}
            >
              Pending
            </button>
            <button
              className={`flex-1 py-2 rounded ${
                activeTab === "Rejected"
                  ? "bg-red-500 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
              onClick={() => setActiveTab("Rejected")}
            >
              Rejected
            </button>
          </div>

          {/* Table based on the active tab */}
          {activeTab === "Accepted" && renderTable(acceptedData)}
          {activeTab === "Pending" && renderTable(pendingData)}
          {activeTab === "Rejected" && renderTable(rejectedData)}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
