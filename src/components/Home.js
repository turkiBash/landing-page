import React from 'react'



const Home = (props) => {
   const { apiCall, locations } = props

    return(

        <div className="container">
            <div className="weather-search">
                <form onSubmit={apiCall} className="weather-search-form">
                    <input name='locations' type="text" autoComplete="off" className="weather-search-input"/>
                    <button className="search-btn">
                        Search
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Home