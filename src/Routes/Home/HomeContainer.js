import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api";


export default class extends React.Component{
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    };

    //here, include get apis, etc. 
    async componentDidMount(){
        //call api methods here. can either make diff functions outside then include, or in here
        try{
            //await => makes javascript wait until data is returned. 
            const {data: {results: nowPlaying}
            } = await moviesApi.nowPlaying(); 

            const {data: {results: upcoming}
            } = await moviesApi.upcoming();

            const {data: {results: popular}
            } = await moviesApi.popular();
         
            this.setState({
                nowPlaying: nowPlaying,
                upcoming: upcoming,
                popular: popular
            })

        } catch {
            this.state({
                error: "Can't find movie information."
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const{ nowPlaying, upcoming, popular, error, loading } = this.state;
       
        return (
            <HomePresenter
                nowPlaying = {nowPlaying}
                upcoming = {upcoming}
                popular = {popular}
                error = {error} 
                loading = {loading}
            />
        );
    }
}