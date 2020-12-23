import React, { useState } from 'react';
import { Image, Button, View, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';
import Constant from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Minicard from './Minicard';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddDiet from './AddDiet';


const Stack = createStackNavigator();

const SearchD = ({ navigation }) => {

    const [d, setD] = useState([]);
    const [result, setResult] = useState('');
    const [r2, setR2] = useState('');
    const [miniCard, setMiniCard] = useState([]);
    const [show1, setShow1] = useState('false');
    const [disp1, setDisp1] = useState('false');

    const [show2, setShow2] = useState('false');
    const [disp2, setDisp2] = useState('false');


    const [show3, setShow3] = useState('false');
    const [disp3, setDisp3] = useState('false');


    const [show4, setShow4] = useState('false');
    const [disp4, setDisp4] = useState('false');



    const [check, setCheck] = useState('false');


    const [title, setTitle] = useState('');




    const link = 'http://localhost:3030/api-gateway/current-user/nutritionfact/';
    const link1 = 'https://jsonplaceholder.typicode.com/photos?q=' + result;
    const link2 = link1 + '&title=' + title;


    function Check() {

        if (disp1 == 'false') {
            setDisp1('true');
            setShow1('true');

        }

        else if (disp1 == 'true') {
            setDisp1('false');
            setShow1('false');

        }
    }

    function fetchData() {

        // fetch(link, {credentials: "include"}).then((e) => e.json().then((f) => console.log(f)));    
        // if(show1=='true'){
        fetch(link)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMiniCard(data)
                setD(data.nutrition)
                console.log(miniCard)
                console.log(d)
            }).catch((error) => {
                console.log(error)
            });


        // }
        // else if(show1=='false'){

        // fetch(link1)
        //     .then(response => response.json())
        //     .then(data => {
        //         // console.log(data)
        //         setMiniCard(data)
        //         console.log(miniCard)

        //     }).catch((error) => {
        //         console.log(error)
        //     });


        // }

    }

    return (
        <View style={{ marginTop: Constant.statusBarHeight }}>
            <View style={{ flexDirection: 'row' }}>
                <Ionicons name="arrow-back" size={24} color="black"
                    onPress={() => navigation.goBack()}
                />
                <TextInput
                    value={result}
                    style={{ backgroundColor: 'silver', width: 280, height: 29, marginLeft: 9, marginTop: 5 }}
                    placeholder={'Search Here'}
                    onChangeText={(text) => setResult(text)}
                />
                <MaterialCommunityIcons name="send" size={24} style={{ marginTop: 6, marginLeft: 12 }} color="black" onPress={fetchData} />
            </View>

            <View style={{ marginTop: 9, marginLeft: 8, flexDirection: 'row' }}>
                <Text>Dairy</Text>
                <TouchableOpacity onPress={Check}>
                    <MaterialIcons name={disp1 == 'false' ? 'radio-button-unchecked' : 'radio-button-checked'} size={26} />
                </TouchableOpacity>

                <Text style={{ marginLeft: 8 }}>Vegetable</Text>
                <TouchableOpacity onPress={Check}>
                    <MaterialIcons name={disp2 == 'false' ? 'radio-button-unchecked' : 'radio-button-checked'} size={26} />
                </TouchableOpacity>

                <Text style={{ marginLeft: 8 }}>Fruit</Text>
                <TouchableOpacity onPress={Check}>
                    <MaterialIcons name={disp3 == 'false' ? 'radio-button-unchecked' : 'radio-button-checked'} size={26} />
                </TouchableOpacity>

                <Text style={{ marginLeft: 8 }}>Nuts</Text>
                <TouchableOpacity onPress={Check}>
                    <MaterialIcons name={disp4 == 'false' ? 'radio-button-unchecked' : 'radio-button-checked'} size={26} />
                </TouchableOpacity>

                <Text style={{ marginLeft: 8 }}>Meat</Text>
                <TouchableOpacity onPress={Check}>
                    <MaterialIcons name={disp4 == 'false' ? 'radio-button-unchecked' : 'radio-button-checked'} size={26} />
                </TouchableOpacity>

            </View>

            {/* <Minicard/>
            <Minicard/>
            <Minicard/> */}
            {/* <Text>{show}</Text> */}

            {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
            <FlatList

                data={d}
                renderItem={({ item }) => (
                    <Minicard>
                        <Image source={{ uri: item.photos.mainPhoto }} style={{ width: 100, height: 80, marginLeft: 7 }} />

                        <Text style={{ marginLeft: 20 }}>{item.nutritionName}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('AddDiet', item)}
                            style={{ backgroundColor: '#BF243D', marginLeft: 60, width: 48, borderRadius: 20, height: 20 }}>
                            <Text style={{ marginLeft: 10, color: 'white'}}>Add</Text>
                        </TouchableOpacity>
                    </Minicard>
                )}
            />

        </View>

    );
}

export const SearchScreen = ({ navigation }) => {

    return (

        <Stack.Navigator initialRouteName="Search">
            <Stack.Screen
                name="Search"
                component={SearchD}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddDiet"
                component={AddDiet}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
        
    );
}


export default SearchScreen;