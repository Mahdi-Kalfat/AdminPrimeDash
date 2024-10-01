import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/header";
import Footer from "../Components/footer";

function Dashboard() {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-1 bg-gray-100 p-4">
          <h2>Main Content Here</h2>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
