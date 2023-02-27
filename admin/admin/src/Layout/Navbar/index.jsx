import React from 'react'
import PagesLayout from '../../Components/PagesLayout'
import './index.scss'

function Navbar() {
    return (
        <>
            <nav>
                <div className="navDiv">
                    <div className="NavLogo">
                        <img src="http://miini.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2019/01/miini-logo.png" alt="LOGO" />
                        <h2>ADMIN DASHBOARD</h2>
                    </div>
                    <div className="adminProfileDiv">
                        <img src="https://lh3.googleusercontent.com/a/AGNmyxYweh2Wjg1Z4eeBdbSIigVQew5hEGdYtLMYTwoP=s360" alt="ADMIN" />
                        <h3>ADMIN</h3>
                    </div>
                </div>


            </nav>
            <PagesLayout />
        </>


    )
}

export default Navbar