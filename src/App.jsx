import Layout from "./components/layout/Layout"
import Router from "./components/router/Router"
import { BrowserRouter } from "react-router-dom"


function App() {
    return (
      <>
        <BrowserRouter>
          <Layout>
            <div className="px-1 md:px-4 lg:px-16">
             <Router />
            </div>
          </Layout>
        </BrowserRouter>
      
      </>
      
          
  )
}

export default App
