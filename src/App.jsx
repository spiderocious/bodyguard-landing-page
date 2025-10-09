import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import DataDeletion from './pages/DataDeletion'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/delete-data" element={<DataDeletion />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
