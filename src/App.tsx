import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './presentation/layouts/MainLayout'
import HomePage from './presentation/pages/HomePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
