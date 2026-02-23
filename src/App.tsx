import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './presentation/layouts/MainLayout'
import HomePage from './presentation/pages/HomePage'
import DashboardPage from './presentation/pages/DashboardPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
