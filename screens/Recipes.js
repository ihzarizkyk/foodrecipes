import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';

const Recipes = ({navigation}) => {
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getRecipes = async() => {
		try{
			const response = await fetch("https://masak-apa-tomorisakura.vercel.app/api/recipes");
			const json = await response.json();
			setData(json.results);
		}catch(error)
		{
			console.log(error);
		}finally{
			setLoading(false);
		}
	};

	const renderItem = ({item}) => {
		return (
			<TouchableOpacity onPress = {() => navigation.navigate("Detail")}>
				<Image source={{uri : item.thumb}} style={{width:300, height:250}} />
				<Text>{{uri : item.title}}</Text>
			</TouchableOpacity>
			);
	};
} 

export default Recipes;