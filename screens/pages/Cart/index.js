import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Button,
    ActivityIndicator,
    Alert
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import COLORS from '../../../constants/colors';
import CartItem from '../../../components/CartItem';
import Card from '../../../components/UI/Card';
import { removeFromCart, addToCart, reduceFromCart, resetCart } from '../../../store/actions/cart';

import styles from './styles';
const Cart = props => {
    const [isLoading, setIsLoading] = useState(false);

    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            });
        }
        return transformedCartItems.sort((a, b) =>
            a.productId > b.productId ? 1 : -1
        );
    });
    const dispatch = useDispatch();

    const sendOrderHandler = async () => {
        setIsLoading(true);
        await dispatch(resetCart());
        Alert.alert('Bit68', 'Ordered Successfuly');
        setIsLoading(false);
    };

    return (
        <View style={styles.screen}>
            <Card style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total:{' '}
                    <Text style={styles.amount}>
                        {Math.round(cartTotalAmount.toFixed(2) * 100) / 100} LE
                    </Text>
                </Text>
                {
                    isLoading ? (
                        <ActivityIndicator size="small" color={COLORS.primary} />
                    ) : (
                            <Button
                                color={COLORS.accent}
                                title="Order Now"
                                disabled={cartItems.length === 0}
                                onPress={sendOrderHandler}
                            />
                        )
                }
            </Card>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData => (
                    <CartItem
                        quantity={itemData.item.quantity}
                        title={itemData.item.productTitle}
                        amount={itemData.item.sum}
                        deletable
                        onRemove={() => {
                            dispatch(removeFromCart(itemData.item.productId));
                        }}
                        onMinus={() => dispatch(reduceFromCart(itemData.item.productId))}
                        onAdd={() => {
                            dispatch(addToCart({
                                id: itemData.item.productId,
                                name: itemData.item.productTitle,
                                price: itemData.item.productPrice + "LE",
                            }));
                        }}
                    />
                )}
            />
        </View>
    );
};

Cart.navigationOptions = {
    headerTitle: 'Your Cart'
};


export { Cart };
