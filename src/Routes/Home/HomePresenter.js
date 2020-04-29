import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Helmet} from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
    padding: 0px 20px;
    padding-top: 20px;
`;

const HomePresenter = ({nowPlaying, 
    upcoming, 
    popular, 
    error, 
    loading}) => loading? (
    <Loader />
    ) : (
    <Container>
        <Helmet>
            <title>Movies | Netflix</title>
        </Helmet>
    {nowPlaying && 
    nowPlaying.length > 0 && 
    (<Section title="Now Playing">
        {nowPlaying.map(movie => 
        <Poster id={movie.id} 
        imageUrl={movie.poster_path} 
        title={movie.original_title} 
        rating={movie.vote_average}
        year={movie.release_date && movie.release_date.substring(0,4)}
        isMovie={true}/>
        )}
    </Section>
    )}
    {upcoming && 
    upcoming.length > 0 && 
    (<Section title="Upcoming Movies">
        {upcoming.map(movie => 
        <Poster id={movie.id} 
        imageUrl={movie.poster_path} 
        title={movie.original_title} 
        rating={movie.vote_average}
        year={movie.release_date && movie.release_date.substring(0,4)}
        isMovie={true}/>
        )}
    </Section>
    )}

    {popular && 
    popular.length > 0 && 
    (<Section title="Popular Movies">
        {popular.map(movie => 
        <Poster id={movie.id} 
        imageUrl={movie.poster_path} 
        title={movie.original_title} 
        rating={movie.vote_average}
        year={movie.release_date && movie.release_date.substring(0,4)}
        isMovie={true}/>
        )}
    </Section>
    )}
    {error && <Error text = {error} color = "#e74c3c" />}
    </Container>
    );

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
};

export default HomePresenter;