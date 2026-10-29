import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

// Ex1: User-defined component Movie with properties title and year
const Boat = ({name, description, image}) => {
    return (
        <View>
            <Text></Text>
            <Text>
                <FontAwesome6 name="ship" size={30} color="grey" />
                <Text style={{
                    fontSize: 30,
                    fontWeight: '500',
                    color: '#666666',
                    textTransform: 'uppercase',
                    letterSpacing: -3
                }}>
                    {name}
                </Text>
            </Text>
            <Text>{description}</Text>
            <Image source = {image} style={{width:400, height:300}}/>
        </View>
    );
};

export default Boat;