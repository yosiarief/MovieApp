import React, {Component} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
	StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {imgUrl} from './Utils/api';
import styles from './style/CardOne';

const iconStar = (<Icon name='star' size={16} color="#F5B642"></Icon>);

const CardOne = ({ info }) => (
	// console.log(`${imgUrl}/w185${info.poster_path}`, 'image');
    <View>
        <Image source={{uri: `${imgUrl}/w780/${(info.backdrop_path || info.poster_path)}` }} style={styles.imageBackdrop} />
        <LinearGradient colors={['rgba(0, 0, 0, 0.5)', 'rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.8)']} style={styles.linearGradient} />
		<View style={styles.cardContainer}>
			<Image source={{ uri: `${imgUrl}/w185${info.poster_path}` }} style={styles.cardImage} />
			<View style={styles.cardDetails}>
				<Text style={styles.cardTitle} numberOfLines={2}>
					{info.original_title}
				</Text>
				<View style={styles.cardGenre}>
					<Text style={styles.cardGenreItem}>Action</Text>
				</View>
				<View style={styles.cardNumbers}>
					<View style={styles.cardStar}>
						{iconStar}
						<Text style={styles.cardStarRatings}>8.9</Text>
					</View>
					<Text style={styles.cardRunningHours} />
				</View>
				<Text style={styles.cardDescription} numberOfLines={3}>
					{info.overview}
				</Text>
				<TouchableOpacity activeOpacity={0.9}>
					<View style={styles.viewButton}>
						<Text style={styles.viewButtonText}>View Details</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
    </View>
);

export default CardOne;




