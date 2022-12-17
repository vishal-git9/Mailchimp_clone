import './App.css';
import Navbar from "./Components/navbar"
import Footer from './Components/footer';
import AllRoutes from './Routes/Allroutes';
import CallToActionWithIllustration from "./Features/features"
function App() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"120px"}}>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}
export default App;
