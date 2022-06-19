import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';


function RecordsScreen({ route }) {
    const records = route.params || {};

    return (
        <ScrollView>
            {
                Object.keys(records).map(key => {
                    return (
                        <View key={key} style={{ backgroundColor: "white", padding: 20, marginVertical: 6, marginHorizontal: 12 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ letterSpacing: 1 }}>Item ID</Text>
                                    <Text style={{ fontSize: 20, fontWeight: '800' }}>{records[key].itemId}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ letterSpacing: 1 }}>Order Price</Text>
                                    <Text style={{ fontSize: 20, fontWeight: '800' }}>{records[key].orderPrice}</Text>
                                </View>
                            </View>
                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ letterSpacing: 1 }}>Food Item</Text>
                                <Text style={{ fontSize: 20, fontWeight: '800' }}>{records[key].foodItem}</Text>
                            </View>
                            <View>
                                <Text style={{ letterSpacing: 1 }}>Address</Text>
                                <Text style={{ fontSize: 20, fontWeight: '800' }}>{records[key].address}</Text>
                            </View>
                        </View>
                    );
                })
            }
        </ScrollView>
    );
}

export default RecordsScreen;