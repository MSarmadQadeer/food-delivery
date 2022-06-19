import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { ref, onValue, push } from 'firebase/database';
import { db } from '../firebase-config.js';

const HomeScreen = ({ navigation }) => {
    const [itemId, setItemId] = React.useState('');
    const [orderPrice, setOrderPrice] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [foodItem, setFoodItem] = React.useState('');
    return (
        <ScrollView>
            <View style={{ padding: 12 }}>
                <Image
                    style={{ width: "100%", height: 200, borderRadius: 14 }}
                    source={require("../assets/images/foodpanda.png")}
                />
                <View style={{ width: "100%" }}>
                    <View style={{ flexDirection: 'row', marginVertical: 12 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ paddingLeft: 10, letterSpacing: 1 }}>Item ID</Text>
                            <TextInput
                                placeholder="Enter Item ID"
                                style={{ borderBottomWidth: 1, paddingHorizontal: 10 }}
                                value={itemId}
                                onChangeText={setItemId}
                                keyboardType="numeric"
                            ></TextInput>
                        </View>
                        <View style={{ width: 25 }}></View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ paddingLeft: 10, letterSpacing: 1 }}>Order Price</Text>
                            <TextInput
                                placeholder="Enter Order Price"
                                style={{ borderBottomWidth: 1, paddingHorizontal: 10 }}
                                value={orderPrice}
                                onChangeText={setOrderPrice}
                                keyboardType="numeric"
                            ></TextInput>
                        </View>
                    </View>

                    <View style={{ marginVertical: 12 }}>
                        <Text style={{ paddingLeft: 10, letterSpacing: 1 }}>Address</Text>
                        <TextInput
                            placeholder="Enter Address"
                            style={{ borderBottomWidth: 1, paddingHorizontal: 10 }}
                            value={address}
                            onChangeText={setAddress}
                        ></TextInput>
                    </View>

                    <View style={{ marginVertical: 12 }}>
                        <Text style={{ paddingLeft: 10, letterSpacing: 1 }}>Food Item</Text>
                        <TextInput
                            placeholder="Enter Food Item"
                            style={{ borderBottomWidth: 1, paddingHorizontal: 10 }}
                            value={foodItem}
                            onChangeText={setFoodItem}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={{
                    backgroundColor: '#181c3f',
                    width: "100%",
                    alignItems: 'center',
                    padding: 12,
                    borderRadius: 7,
                    marginVertical: 12
                }}
                    onPress={() => {
                        if (itemId === '' || orderPrice === '' || address === '' || foodItem === '') {
                            Alert.alert('Note', 'Please fill all the fields');
                        }
                        else {
                            push(ref(db, '/ItemDetails'), {
                                itemId,
                                orderPrice,
                                address,
                                foodItem
                            });

                            navigation.navigate('Bill', {
                                orderPrice
                            })

                            setItemId('');
                            setOrderPrice('');
                            setAddress('');
                            setFoodItem('');
                        }
                    }}>
                    <Text style={{ color: "white", fontWeight: '500', fontSize: 16, letterSpacing: 1 }}>Order Now</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    backgroundColor: '#181c3f',
                    width: "100%",
                    alignItems: 'center',
                    padding: 12,
                    borderRadius: 7,
                    marginVertical: 12
                }}
                    onPress={() => {
                        onValue(ref(db, '/ItemDetails'), querySnapShot => {
                            const data = querySnapShot.val() || {};
                            navigation.navigate('Records', data);
                        });
                    }}>
                    <Text style={{ color: "white", fontWeight: '500', fontSize: 16, letterSpacing: 1 }}>View Records</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default HomeScreen;