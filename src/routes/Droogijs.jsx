import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Nav"
import Koeling from "../components/Koeling"
import Alert from "../components/Alert"

function Droogijs() {
    return (
      <div>
        <Alert />
        <Navbar />
        <Header title="Droogijs" />
        <Koeling />
        <Footer />
      </div>
    )
  }
  
  export default Droogijs