import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Nav"
import Veiligheidsadviseur from "../components/Veiligheidsadviseur"
import Alert from "../components/Alert"
import OpslagEnVervoeren from "../components/OpslagEnVervoeren"

function Opleiden() {
    return (
      <div>
        <Alert />
        <Navbar />
        <Header title="Opleiden & Consultancy"  />
        <Veiligheidsadviseur />
        <OpslagEnVervoeren />
        <Footer />
      </div>
    )
  }
  
  export default Opleiden