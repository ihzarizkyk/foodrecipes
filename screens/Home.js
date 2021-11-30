import React from 'react';
import {StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';

const Home = ({navigation}) => {
	return (
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.header}>Food Recipes App</Text>
					<Text style={styles.p}>Nama: Mochammad Ihza Rizky Karim</Text>
					<Text style={styles.p}>NIM: 1204190054</Text>
					<Text style={styles.p}>Prodi: Sistem Informasi</Text>
					<Text style={styles.p}>Angkatan: 2019</Text>
					<Text style={styles.p}>Kampus: ITTelkom Surabaya</Text>
					<Button title="Lihat Resep Makanan" onPress={() => navigation.navigate('Recipes')}/>
				</View>
			</ScrollView>
		);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		margin: "auto",
		justifyContent: "center",
		padding: 40,
		width: "75%"
	},
	header: {
		fontSize: 120,
		fontWeight: "bold"
	},
	p: {
		fontSize: 55,
		fontWeight: "bold"
	}
});