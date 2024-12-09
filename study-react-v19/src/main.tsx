import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ActionPage } from './pages/action-page/index.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path="action" element={<ActionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
)