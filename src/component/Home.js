import React, { Component } from 'react';
import {connect} from 'react-redux';
import { 
    Text,
    View,
 } from 'react-native';
 import retrievePopularMovies from '../action/movies.action.js'
 

 class Home extends Component {

    componentWillMount(){
        this.props.retrievePopularMovies();
        console.log(this.props.retrievePopularMovies(), 'cobaa')
    }

    render(){
        console.log(this.state, 'state')
        console.log(this.props, 'props')
        return(
           <Text>Home</Text> 
        );
    }
 }

 function mapStateToProps(state){
     return{
        movies: state.movies
        
     }
 }
 
 export default connect(mapStateToProps, {retrievePopularMovies})(Home)
 