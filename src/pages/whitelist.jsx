import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function Whitelist() {
  const [activeTab, setActiveTab] = useState("Accepted"); // Manage active tab
  const [currentPage, setCurrentPage] = useState(1); // State for pagination
  const [selectedEntry, setSelectedEntry] = useState(null); // State to store selected entry for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const rowsPerPage = 10; // Number of rows per page

  // Example data for each table with additional fields
  const acceptedData = [
    {
      number: 1,
      discordname: "John Doe",
      age: 22,
      realname: "Mahdi",
      status: "Accepted",
      steamLink: "https://steamcommunity.com/id/johndoe/",
      question1: "Answer 1",
      question2: "Answer 2",
      question3: "Answer 3",
      question4: "Answer 4",
    },
    {
      number: 2,
      discordname: "Jane Smith",
      age: 25,
      realname: "Jane",
      status: "Accepted",
      steamLink: "https://steamcommunity.com/id/janesmith/",
      question1: "Answer A",
      question2: "Answer B",
      question3: "Answer C",
      question4: "Answer D",
    },
    {
      number: 1,
      discordname: "John Doe",
      age: 22,
      realname: "Mahdi",
      status: "Accepted",
      steamLink: "https://steamcommunity.com/id/johndoe/",
      question1: "Answer 1",
      question2: "Answer 2",
      question3: "Answer 3",
      question4: "Answer 4",
    },
    {
      number: 1,
      discordname: "John Doe",
      age: 22,
      realname: "Mahdi",
      status: "Accepted",
      steamLink: "https://steamcommunity.com/id/johndoe/",
      question1: "Answer 1",
      question2: "Answer 2",
      question3: "Answer 3",
      question4: "Answer 4",
    },
    {
      number: 1,
      discordname: "John Doe",
      age: 22,
      realname: "Mahdi",
      status: "Accepted",
      steamLink: "https://steamcommunity.com/id/johndoe/",
      question1: "Answer 1",
      question2: "Answer 2",
      question3: "Answer 3",
      question4: "Answer 4",
    },
    {
      number: 1,
      discordname: "John Doe",
      age: 22,
      realname: "Mahdi",
      status: "Accepted",
      steamLink: "https://steamcommunity.com/id/johndoe/",
      question1: "Answer 1",
      question2: "Answer 2",
      question3: "Answer 3",
      question4: "Answer 4",
    },
    {
      number: 1,
      discordname: "John Doe",
      age: 22,
      realname: "Mahdi",
      status: "Accepted",
      steamLink: "https://steamcommunity.com/id/johndoe/",
      question1: "Answer 1",
      question2: "Answer 2",
      question3: "Answer 3",
      question4: "Answer 4",
    },
    {
      number: 1,
      discordname: "John Doe",
      age: 22,
      realname: "Mahdi",
      status: "Accepted",
      steamLink: "https://steamcommunity.com/id/johndoe/",
      question1: "Answer 1",
      question2: "Answer 2",
      question3: "Answer 3",
      question4: "Answer 4",
    },
    {
      number: 1,
      discordname: "John Doe",
      age: 22,
      realname: "Mahdi",
      status: "Accepted",
      steamLink: "https://steamcommunity.com/id/johndoe/",
      question1: "Answer 1",
      question2: "Answer 2",
      question3: "Answer 3",
      question4: "Answer 4",
    },
    {
      number: 1,
      discordname: "John Doe",
      age: 22,
      realname: "Mahdi",
      status: "Accepted",
      steamLink: "https://steamcommunity.com/id/johndoe/",
      question1: "Answer 1",
      question2: "Answer 2",
      question3: "Answer 3",
      question4: "Answer 4",
    },
    {
      number: 1,
      discordname: "John Doe",
      age: 22,
      realname: "Mahdi",
      status: "Accepted",
      steamLink: "https://steamcommunity.com/id/johndoe/",
      question1: "Answer 1",
      question2: "Answer 2",
      question3: "Answer 3",
      question4: "Answer 4",
    },
    // Add more entries as needed
  ];

  const pendingData = [
    {
      number: 1,
      discordname: "John Doe",
      age: 22,
      realname: "Mahdi",
      status: "Pending",
      steamLink: "https://steamcommunity.com/id/johndoe/",
      question1: "Answer 1",
      question2: "Answer 2",
      question3: "Answer 3",
      question4: "Answer 4",
    },
    // Add pending data entries if needed
  ];

  const rejectedData = [
    // Add rejected data entries if needed
  ];

  // Paginate the data based on the active page and rows per page
  const paginateData = (data) => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // Calculate total pages based on data length
  const getTotalPages = (data) => Math.ceil(data.length / rowsPerPage);

  // Render pagination controls
  const renderPagination = (data) => {
    const totalPages = getTotalPages(data);

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
                  <td className="py-3 px-6">
                    <FaEye
                      className="text-blue-500 cursor-pointer hover:underline mr-2"
                      onClick={() => {
                        setSelectedEntry(item);
                        setIsModalOpen(true);
                      }}
                      size={20} // Adjust the size as needed
                    />
                  </td>
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
                    // Handle accept logic here
                    console.log("Accepted:", selectedEntry);
                    setIsModalOpen(false);
                  }}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded shadow-lg hover:bg-red-600 transition duration-200 ease-in-out"
                  onClick={() => {
                    // Handle reject logic here
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

  // Render the component
  return (
    <div className="p-6">
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

      {activeTab === "Accepted" && renderTable(acceptedData)}
      {activeTab === "Pending" && renderTable(pendingData)}
      {activeTab === "Rejected" && renderTable(rejectedData)}
    </div>
  );
}

export default Whitelist;
