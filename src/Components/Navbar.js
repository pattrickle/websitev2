import React, {Component} from "react"
import {Link} from "react-scroll"

class Navbar extends Component{
    state={}
    render(){
        return (
            <div className ="navbar">
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={false}
                        offset={0}
                        duration={700}>Home
                    </Link>
                    <Link
                        activeClass="active"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={700}>Portfolio
                    </Link>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={700}>About
                    </Link>
                </div>
        )
    }
}

export default Navbar

