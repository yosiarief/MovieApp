import React, { Component } from 'react';
import {connect} from 'react-redux';
import { 
    Text,
    View,
    StyleSheet,
    ScrollView,
    RefreshControl,
    Platform
 } from 'react-native';
 import retrievePopularMovies from '../action/movies.action.js'
 import ProgressBar from '../ProgressBar'
 import Swiper from 'react-native-swiper';
 import CardOne from '../CardOne';
 

 class Home extends Component {
    constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			isRefreshing: false
		};

		
	}

    componentWillMount(){
        this._retrieveMovies();
        // this.props.retrievePopularMovies();
        // console.log(this.props.movies, 'bobo')
        console.log(this.props, 'wllmount')
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps.crypto, 'willreceiveprops')
	// 	if (nextProps.popularMovies) {
	// 		this.setState({ isLoading: false });
	// 	}
	// }
    _retrieveMovies(isRefreshed){
        console.log(this.props, 'retrivemovie')
        this.props.retrievePopularMovies();
        if (isRefreshed && this.setState({ isRefreshing: false }));
    }

    // _onRefresh() {
	// 	this.setState({ isRefreshing: true });
	// 	this._retrieveMovies('isRefreshed');
    // }
    
    renderCoinCards(){
        const {crypto} = this.props;
        return crypto.results.map((coin) =>
            <CoinCard
                // key={coin.name}
                coin_name={coin.name}
                // symbol={coin.symbol}
                // price_usd={coin.price_usd}
                // percent_change_24h={coin.percent_change_24h}
                // percent_change_7d={coin.percent_change_7d}
            />
        )   
    }

    render(){
        // console.log(this.state, 'state')
        console.log(this.props, 'props')
        console.log(typeof this.props.isFetching === false, 'true or false')
        const {crypto} = this.props;
        console.log(this.props.isFetching, 'true')

        
        //     // <Text>
        //     //     {crypto.results.map((number) =>
        //     //         <li>{number.id}</li>
        //     //     )}
        //     // </Text>
        //     <Text>Home</Text>
        //    this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> : 
           if (this.props.isFetching === false){
            
           
               return(
                <View style={styles.progressBar}><ProgressBar /></View>
               );
            }
           
           return(
            //    <Text>Bisa</Text>
            <ScrollView        
       
            style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={this.state.isRefreshing}
                    // onRefresh={this._onRefresh}
                    colors={['#EA0000']}
                    tintColor="white"
                    title="loading..."
                    titleColor="white"
                    progressBackgroundColor="white"
                />
            }>
            <Swiper
                autoplay
                autoplayTimeout={4}
                showsPagination={false}
                height={248}>
                {crypto.results.map((info) => 
                    <CardOne key={info.id} info={info} />
                )}
            </Swiper>
        </ScrollView>
    );
    }
 }


 function mapStateToProps(state){
     return{
        crypto: state.popularMovies,
        isFetching: state.isFetching
        
     }
 }

 const styles = StyleSheet.create({
    container: {
		backgroundColor: 'black',
		...Platform.select({
			ios: {
				paddingTop: 64
			}
		})
	},
    progressBar: {
		backgroundColor: '#0a0a0a',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
 })
 
 export default connect(mapStateToProps, {retrievePopularMovies})(Home)
 