import React, { Component } from 'react'
// axios
import axios from "axios"

export default class Home extends Component {

    state = { movies: [], tv: [] }
    getTrending = async (mediaType) => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=52bbcddeda849047525b51d6f8a12361
`)
        this.setState({ [mediaType]: data.results })
    }
    componentDidMount() {
        this.getTrending('movies')
        this.getTrending('tv')
    }

    render() {
        console.log("from Render");
        return (
            <>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="brdr w-25 oneLeft"></div>
                            <div className="item about">
                                <h2>Trendding <br /> Movies <br /> To Watch Now</h2>
                                <p className="secFColor">Most Watched Movies By Day</p>
                            </div>
                            <div className="brdr w-100 twoLeft"></div>
                        </div>
                        {this.state.movies.slice(0, 10).map((value, index) => {
                            return (

                                <div key={index} className="col-md-2 my-3">
                                    <div className="item">
                                        <img className="w-100" src={"https://image.tmdb.org/t/p/original" + value.poster_path} alt="" />
                                        <h5>{value.name}{value.title}</h5>
                                        <span className="vote">{value.vote_average}</span>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    {/*  */}
                    <div className="row my-2">
                        <div className="col-md-4">
                            <div className="brdr w-25"></div>
                            <div className="item">
                                <h2>Trendding <br /> Tv <br /> To Watch Now</h2>
                                <p className="secFColor">Most Watched Tv By Day</p>
                            </div>
                            <div className="brdr w-100"></div>
                        </div>
                        {this.state.tv.slice(10, 20).map((value, index) => {
                            return (

                                <div key={index} className="col-md-2 my-3">
                                    <div className="item">
                                        <img className="w-100" src={"https://image.tmdb.org/t/p/original" + value.poster_path} alt="" />
                                        <h5>{value.name}</h5>
                                        <span className="vote">{value.vote_average}</span>
                                        <span className="desc">{value.first_air_date.slice(0,4)}</span>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </>
        )
    }
}
