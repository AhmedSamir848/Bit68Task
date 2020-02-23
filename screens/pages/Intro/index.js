/* Libraries That Needed */
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import AppIntroSlider from 'react-native-app-intro-slider';

/************************/
const slides = [
    {
        key: '1',
        image: require('../../../assets/imgs/1.jpg'),
        backgroundColor: '#59b2ab',
    },
    {
        key: '2',
        image: require('../../../assets/imgs/2.jpg'),
        backgroundColor: '#febe29',
    },
    {
        key: '3',
        image: require('../../../assets/imgs/3.jpg'),
        backgroundColor: '#22bcb5',
    }
];

const Intro = ({navigation}) => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.screen}>
                <Image style={styles.image} source={item.image} />
            </View>
        );
    };

    const onDone = () => {
        navigation.navigate('main');
    }

    const renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name="md-arrow-round-forward"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    style={{ backgroundColor: 'transparent' }}
                />
            </View>
        );
    };
    
    const renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name="md-checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    style={{ backgroundColor: 'transparent' }}
                />
            </View>
        );
    };

    // View 
    return (
        // SafeAreaView Used To Fix Design In Notch Screen Phones
        <View style={styles.screen}>
            <AppIntroSlider
                renderItem={renderItem}
                slides={slides}
                onDone={onDone}
                renderDoneButton={renderDoneButton}
                renderNextButton={renderNextButton}
            />
        </View>
    );
};

export { Intro };
