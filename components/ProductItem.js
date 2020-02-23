/* Libraries That Needed */
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../constants/colors';

import { useDispatch } from 'react-redux';

import { addToCart, removeFromCart } from '../store/actions/cart';

/*****************************/

const ProductItem = ({ index, item, onPress }) => {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCar = () => {
        if (!addedToCart) {
            dispatch(addToCart(item));
            setAddedToCart(true);
        } else {
            dispatch(removeFromCart(item.id));
            setAddedToCart(false);
        }
    }
    return <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
        <View style={styles.productCont}>
            <Image style={styles.productImg} source={{ uri: item.product_img }} />
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.productDetails}>
                <View>
                    <Text style={styles.subtitle}>{item.weight}</Text>
                    <Text style={styles.subtitle}>{item.price}</Text>
                </View>
                <TouchableOpacity onPress={handleAddToCar}>
                    <AntDesign
                        name={addedToCart ? 'checkcircle' : 'pluscircle'}
                        size={20}
                        color={addedToCart ? COLORS.accent : '#d3d3d3'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>;
};

const styles = StyleSheet.create({
    productsList: {
        marginHorizontal: 5
    },
    productImg: {
        height: 130,
        width: '100%'
    },
    productCont: {
        flex: 1,
        padding: 5,
        overflow: 'hidden'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    productDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 18
    },
    subtitle: {
        fontFamily: 'open-sans',
        fontSize: 14,
        color: '#808080'
    },
});

export default ProductItem;