import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './navigation/Index'
import StartQuestionnaire from './components/ArcheTypes/StartQuestionnaire'
import ResultIndex from './navigation/ResultIndex'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/questionnaire" element={<StartQuestionnaire />} />
          <Route path="/result" element={<ResultIndex />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App