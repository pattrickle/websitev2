import React,{Component} from "react"
import Navbar from "./Components/Navbar"
import About from "./Sections/About"
import Home from "./Sections/Home"
import Portfolio from "./Sections/Portfolio"
import "./App.css"

class App extends Component{
    render(){
        return(
<div className="App">
            <Navbar/>
                
            <Home />
            <Portfolio/>
            <About />
            </div>
        )
    }
}
export default App