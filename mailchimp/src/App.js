import "./App.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import AllRoutes from "./Routes/Allroutes";
import CallToActionWithIllustration from "./Features/features";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  let locs = location.pathname;
  return locs === "/dashboard" ? (
    <div style={{ display: "flex", flexDirection: "column", gap: "120px" }}>
      <Navbar />
      <AllRoutes />
    </div>
  ) : (
    <div style={{ display: "flex", flexDirection: "column", gap: "120px" }}>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}
export default App;
