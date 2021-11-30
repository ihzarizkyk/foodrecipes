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
			<TouchableOpacity onPress = {() => navigation.navigate("Detail")} style={styles.container}>
				<Image source={{uri : item.thumb}} style={{width:300, height:250}} />
				<Text style={styles.RecipesTitle}>{{uri : item.title}}</Text>
			</TouchableOpacity>
			);
	};

    useEffect(()=> {
        getResepData();
    
    }, [])
 
     
    return (
        <View>
            {
                isLoading ? (
                    <ActivityIndicator size="large" color="#2196F3"/>

                ):(
                    <FlatList
                    data={data}
                    keyExtractor={item => item.key}
                    renderItem={renderItem}/>
                )
            }
        
        </View>
    );

} 

export default Recipes;

const styles = StyleSheet.create({ 
    container: {
        margin: 1,
        padding: 20,
    },

    RecipesTitle :{

        margin:5,
        fontWeight:'bold',
        fontSize: 24
    }    

})