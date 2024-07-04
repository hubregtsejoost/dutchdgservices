import Documentatie from "../components/Documentatie"
import Footer from "../components/Footer"
import Navbar from "../components/Nav"
import Header from "../components/Header"
import Alert from "../components/Alert"
import AcceptatieChecks from "../components/AcceptatieChecks"

function Verpakken() {
    return (
      <div>
        <Alert />
        <Navbar />
        <Header title="Verpakken & Checken" />
        <Documentatie />
        <AcceptatieChecks />
        <Footer />
      </div>
    )
  }
  
  export default Verpakken