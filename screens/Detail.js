import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';

const Detail = ({ Route	}) => {

	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useEffect(true);

	const urlresep = "https://masak-apa-tomorisakura.vercel.app/api/recipes/"+Route.params.data+"";

	const getDetailRecipes = async() => {
		try{
			const response = await fetch(urlresep);
			const json = await response.json();
			setData(json.results);
		}catch(error)
		{
			console.log(error);
		}finally{
			setLoading(false);
		}
	};

	useEffect(() => {
		getDetailRecipes();
	},[]);

	return (
		<View>
			{
				isLoading ? (
					<ActivityIndicator size="large" color="red" />
					) : <View style={styles.container}>
						<Text style={{fontsize: 100, fontweight: "bold", marginTop: 10, marginBottom: 5}}>{route.params.data}</Text>
						<Image source={{ uri : data.thumb}} style={{width: 250, height: 300}} />
						<Text>{data.author.user}</Text>
						<Text style={styles.judul}>{data.title}</Text>
						<Text style={{fontsize: 50, fontweight: "bold"}}>{data.servings}</Text>
						<Text style={{fontsize: 50, fontweight: "bold"}}>{data.times}</Text>
						<Text style={{fontsize: 50, fontweight: "bold"}}>{data.portion}</Text>
						<Text style={{fontsize: 50, fontweight: "bold"}}>{data.dificulty}</Text>
						</View>
			}
		</View>
		)
}

export default Detail;

const styles = StyleSheet.create({
	container: {
		margin: "auto",
		justifyContent: "center",
		padding: 40,
		width: "75%"
	},
	judul: {
		fontsize: 70,
		fontweight: "bold"
	},
})