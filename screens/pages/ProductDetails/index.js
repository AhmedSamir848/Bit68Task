/* Libraries That Needed */
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './styles';
/*****************************/

const ProductDetails = ({ navigation }) => {
    const { name } = navigation.getParam('product');
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.pageCont}>
                <Text>Product Name is {name}</Text>
            </View>
        </SafeAreaView>
    );
};

ProductDetails.navigationOptions = ({ navigation }) => {
    const { name } = navigation.getParam('product');
    return {
        headerTitle: name
    };
};

export { ProductDetails };
