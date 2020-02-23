/* Libraries That Needed */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, ImageBackground, ActivityIndicator, AsyncStorage, TouchableOpacity, FlatList, Text } from 'react-native';
import COLORS from '../../../constants/colors';
import { fetchCategories } from '../../../store/actions/categories';
import ImageSlider from 'react-native-image-slider';
import styles from './styles';
import Data from '../../../Data/items';
import { setCart } from '../../../store/actions/cart';
/********************************/

const Home = ({ navigation }) => {
    const dispatch = useDispatch();

    // Get Categories Records From Redux 
    const categories = useSelector(state => state.categories.categories);

    // Fetch categories After Loading Component
    useEffect(() => {
        dispatch(fetchCategories());
        AsyncStorage.getItem('userCart', (err, cart) => {
            const savedCart = JSON.parse(cart);
            dispatch(setCart(savedCart));
        });
    }, [dispatch]);

    //Show  Spinner Untill Flats Array Loading
    if (categories.length == 0) {
        return <View style={styles.centered}>
            <ActivityIndicator size="large" color={COLORS.accent} />
        </View>;
    }

    // Main View    
    return (
        <View style={styles.screen}>
            <View style={styles.imageSliderCont}>
                <ImageSlider
                    images={Data[0].images}
                />
            </View>
            <View style={styles.pageCont}>
                <FlatList
                    numColumns={2}
                    data={categories}
                    renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('Products', { item })} style={[styles.rowImg, { marginRight: 0 }]}>
                        <ImageBackground source={{ uri: item.category_img }} style={styles.catImg}>
                            <Text style={styles.catName}>{item.name}</Text>
                        </ImageBackground>
                    </TouchableOpacity>}
                />
            </View>
        </View>
    );
};

export { Home };
