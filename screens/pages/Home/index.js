/* Libraries That Needed */
import React, { Component } from 'react';

import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

import { View, ImageBackground, ActivityIndicator, TouchableOpacity, FlatList, Text } from 'react-native';
import COLORS from '../../../constants/colors';
import ImageSlider from 'react-native-image-slider';
import styles from './styles';
import Data from '../../../Data/items';
/********************************/
@observer
class Home extends Component {
    @observable categories = []

    @action fetchCategories = async () => {
        const response = await fetch(
            `https://5bcce576cf2e850013874767.mockapi.io/task/categories`,
            {
                method: 'GET',
            }
        );

        if (!response.ok) {
            const errorResData = await response.json();
            const errorId = errorResData.error.message;
            let message = 'Something went wrong!';
            if (errorId === 'EMAIL_NOT_FOUND') {
                message = 'This email could not be found!';
            } else if (errorId === 'INVALID_PASSWORD') {
                message = 'This password is not valid!';
            } else {
                message = 'Email Or Password Not Valid';
            }
            throw new Error(message);
        }

        const json = await response.json();
        if (json == undefined) {
            let message = 'No Data Found';
            throw new Error(message);
        } else {
            this.categories = json;

        }
    }

    componentDidMount() {
        this.fetchCategories();
    }

    render() {
        const { navigation } = this.props;

        if (this.categories.length == 0) {
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
                        data={this.categories}
                        renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('Products', { item })} style={[styles.rowImg, { marginRight: 0 }]}>
                            <ImageBackground source={{ uri: item.category_img }} style={styles.catImg}>
                                <Text style={styles.catName}>{item.name}</Text>
                            </ImageBackground>
                        </TouchableOpacity>}
                    />
                </View>
            </View>
        );
    }
}

export { Home };
