import Header from "./components/Header"
import ExerciseBankSection from "./components/ExerciseBankSection"
import Footer from "./components/Footer"

function App() {

  // Display components for header (with Övningsbank as prop for title), section with exercise cards and footer
  return (
    <>
      <Header title="Övningsbank" />
      <ExerciseBankSection />
      <Footer />

    </>
  )
}

export default App
