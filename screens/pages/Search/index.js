/* Libraries That Needed */
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, ActivityIndicator, FlatList, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import COLORS from '../../../constants/colors';
import ProductItem from '../../../components/ProductItem';
import styles from './styles';
import { filterProducts } from '../../../store/actions/products';
/************************/

const Search = props => {
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const allProducts = useSelector(state => state.products.products);
    const filteredProducts = useSelector(state => state.products.filteredProducts);
    const [error, setError] = useState('');

    const updateSearch = async searchTerm => {
        setLoading(true);
        setSearchText(searchTerm);
        dispatch(filterProducts(searchTerm));
        setLoading(false);
    };

    useEffect(() => {
        if (filteredProducts != undefined) {
            if (filteredProducts.length == 0) {
                setError('No Products Found , Try Another Name!');
            } else {
                setError('');
            }
        }
    }, [updateSearch, dispatch]);

    return <View style={styles.screen}>
        <SearchBar
            lightTheme
            round
            showLoading={loading}
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={searchText}
            inputContainerStyle={styles.searchInputContainer}
            inputStyle={styles.searchInput}
        />
        {
            loading ?
                <View style={styles.centered}>
                    <ActivityIndicator size="large" color={COLORS.primary} />
                </View>
                : error != "" ?
                    <View style={styles.centered}>
                        <Text style={styles.errorMessage}>{error}!</Text>
                    </View>
                    : <FlatList
                        numColumns={2}
                        keyExtractor={(item, index) => `list-item-${index}`}
                        data={filteredProducts != undefined ? filteredProducts : allProducts}
                        renderItem={({ index, item }) => <ProductItem onPress={() => navigation.navigate('ProductDetails', { product: item })} index={index} item={item} />}
                    />
        }
    </View>
};

export { Search };
