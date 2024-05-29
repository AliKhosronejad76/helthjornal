import { useState } from "react"
import Layout from "./components/layout/Layout"
import Router from "./components/router/Router"
import { BrowserRouter } from "react-router-dom"




export default function App(){
  const [drawer  , setDrawer ] = useState(false)
    
    return(
      <div className={`${drawer ? "fixed lg:static" : "static" }`}>
        <BrowserRouter>
          <Layout drawer={drawer} setDrawer={setDrawer}>
            <div className="px-1 md:px-4 lg:px-16">
              <Router />
            </div>
          </Layout>
        </BrowserRouter>
    </div>
    )
} 




