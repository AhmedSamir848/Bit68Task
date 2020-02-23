/* Libraries That Needed */
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AntDesign } from '@expo/vector-icons';
import { Platform, View } from 'react-native';

// Screens And Custom Components 
import { Home, Filters, Intro, Search, Cart, Products, ProductDetails } from '../screens/';
import CustomeHeaderButton from '../components/UI/CustomeHeaderButton';

import COLORS from '../constants/colors';
/***************************/

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
    },
    headerTintColor: 'grey',
};

const homeNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: () => <CustomeHeaderButton
                    title="Menu"
                    name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                />,
                headerTitle: '',
                headerRight: () => <View style={{ flexDirection: 'row' }}><CustomeHeaderButton
                    title="Search"
                    name={Platform.OS === 'android' ? 'md-search' : 'ios-search'}
                    onPress={() => {
                        navigation.navigate('Search');
                    }}
                    anotherItem={{
                        title: "Cart",
                        name: Platform.OS === 'android' ? 'md-cart' : 'ios-cart',
                        onPress: () => {
                            navigation.navigate('Cart');
                        }
                    }}
                />
                </View>
            }
        },
    },
    Products: {
        screen: Products,
        navigationOptions: {
            headerShown: false
        }
    },
    ProductDetails,
    Search,
    Cart
}, {
    defaultNavigationOptions: defaultNavOptions,
});

const MenueNavigator = createDrawerNavigator({
    Home: {
        screen: homeNavigator,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: drawerConfig => (
                <AntDesign
                    name='home'
                    size={25}
                    color={drawerConfig.tintColor}
                />
            )
        }
    },
    Filter: {
        screen: Filters,
        navigationOptions: {
            drawerLabel: 'Filters',
            drawerIcon: drawerConfig => (
                <AntDesign
                    name='filter'
                    size={25}
                    color={drawerConfig.tintColor}
                />
            )
        }
    },
}, {
    drawerBackgroundColor: COLORS.primary,
    contentOptions: {
        activeTintColor: COLORS.accent,
        activeBackgroundColor: COLORS.primary,
        inactiveTintColor: 'black'
    }
});

const RootNavigator = createSwitchNavigator({
    startup: Intro,
    main: MenueNavigator,
});

export default createAppContainer(RootNavigator);