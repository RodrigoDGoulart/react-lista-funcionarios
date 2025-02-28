import './index.scss'

import Funcionarios from './pages/Funcionarios/index.tsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Funcionarios />
  </StrictMode>,
)
