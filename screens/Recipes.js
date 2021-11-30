import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';


const Recipes = ({navigation}) =>{
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    
    const getResepData = async () => {
        try {
            const response = await fetch("https://masak-apa-tomorisakura.vercel.app/api/recipes");
            const json = await response.json();
            setData(json.results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}
                style={styles.container}
            >
                
                <Image source={{uri: item.thumb }}  style={{width:160, height:160}}/>
                <Text style={styles.Title}>{item.title}</Text>
				<Text style={{fontSize: 15, fontWeight: "bold"}}>{item.servings}</Text>
				<Text style={{fontSize: 15, fontWeight: "bold"}}>{item.times}</Text>
				<Text style={{fontSize: 15, fontWeight: "bold"}}>{item.portion}</Text>
				<Text style={{fontSize: 15, fontWeight: "bold"}}>{item.dificulty}</Text>
            </TouchableOpacity>
        );
    };

    useEffect(()=> {
        getResepData();
    
    }, [])
 
     
    return(
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
    )
}

export default Recipes;

const styles = StyleSheet.create({ 
    container: {
        margin: 1,
        padding: 20,
    },

    Title :{

        margin:5,
        fontWeight:'bold',
        fontSize: 24
    }    

})