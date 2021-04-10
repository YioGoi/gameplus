import './App.scss'

// Main Components
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
