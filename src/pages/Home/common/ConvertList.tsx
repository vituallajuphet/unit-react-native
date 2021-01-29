import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Button,
    StatusBar,
    Alert,
} from 'react-native';



interface Props {
    navigation?: any
}

const ConvertList = (props: Props) => {

    const convertlist = [
        { id: 1, route: "ConvertCurrency", name: 'Currency Converter' },
        { id: 2, route: "TemperatureConverter", name: 'Temperature Converter' },
        { id: 3, route: "PowerConverter", name: 'Power Converter' },
        { id: 4, route: "Pressure_Converter", name: 'Pressure Converter' },
        { id: 5, route: "Length_Converter", name: 'Length Converter' },
        { id: 6, route: "Volume_Converter'", name: 'Volume Converter' },
        { id: 7, route: "Velocity_Converter", name: 'Velocity Converter' },
        { id: 8, route: "Area_Converter", name: 'Area Converter' },
        { id: 9, route: "Weight_Converter", name: 'Weight Converter' },
        { id: 10, route: "Time_Converter", name: 'Time Converter' },
    ]

    const List = () => {

        const navigation = useNavigation();

        return (
            <>
                {convertlist.map(lst => (
                    <View
                        style={styles.listStyle}
                        key={lst.id}
                    >
                        <TouchableOpacity onPress={() => navigation.navigate(lst.route)}>
                            <Text style={styles.listText}>{lst.name}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </>
        )
    }

    return (
        <>
            <View style={{ marginTop: 10, padding: 3 }}>
                <List />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    listStyle: {
        padding: 15,
        borderColor: '#888',
        borderWidth: 1,
        marginBottom: 5,
        borderRadius: 5,
    },
    listText: {
        fontSize: 17
    }
});

export default ConvertList;
