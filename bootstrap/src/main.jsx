import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

let senddata = createContext()
let name= "Global data"

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <senddata.Provider>
    <App />
    </senddata.Provider>
   
  </StrictMode>,
)
export {senddata}
