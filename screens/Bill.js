import * as React from 'react';
import { View, Text } from 'react-native';


function BillScreen({ route }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>Your Bill is</Text>
            <Text style={{ fontSize: 40, fontWeight: '800' }}>Rs. {route.params.orderPrice}</Text>
        </View>
    );
}

export default BillScreen;