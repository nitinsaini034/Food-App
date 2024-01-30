import React from 'react'

function Footer() {
    return (
    
            <footer  className='footer'>
                <ul className="nav justify-content-center">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>                 
                </ul>   
                <div className="icons">
                    <img src='facebook.png'></img>             
                    <img src='instagram.png'></img>             
                    <img src='google.png'></img>             
                    <img src='youtube.png'></img>             

                 </div>           
            </footer>

    )
}

export default Footer