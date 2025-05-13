import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout: React.FC = () => (
  <div>
    <Navbar />
    <main>
      <Outlet /> {/* Nested routes render here */}
    </main>
  </div>
);

export default MainLayout;
