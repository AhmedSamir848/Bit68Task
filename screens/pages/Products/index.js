/* Libraries That Needed */
import React from 'react';
import { View, Text, SafeAreaView, Image, FlatList } from 'react-native';

import { Tab, Tabs, ScrollableTab , Footer, FooterTab, Button} from 'native-base';
import Header from '../../../components/UI/Header';
import ProductItem from '../../../components/ProductItem';

import styles from './styles';
/*****************************/

const MeatsComp = ({ navigation, products }) => {
    // console.log(products);
    const renderProducts = ({ index ,item }) => <ProductItem onPress={()=>navigation.navigate('ProductDetails',{product:item})} index={index} item={item} /> ;

    return <FlatList
        numColumns="2"
        data={products}
        renderItem={renderProducts}
        style={styles.productList}
    />
};
const Products = ({ navigation }) => {
    //Get Flat Item That Sent Through Navigation from Home Screen
    const {products , category_img} = navigation.getParam('item');

    //Track Image Slider Index    
    return (
        <SafeAreaView style={styles.screen}>
            <Header parentNavigation={navigation} />
            <View style={styles.imageSliderCont}>
                <Image source={{ uri: category_img }} style={{ flex: 1 }} />
            </View>
            <View style={styles.detailsCont}>
                <Tabs renderTabBar={() => <ScrollableTab style={styles.tabsContainerStyle} />}>
                    <Tab
                        heading="Meats"
                        tabStyle={styles.tabStyle}
                        activeTextStyle={styles.activeTextStyle}
                        textStyle={styles.textStyle}
                        activeTabStyle={styles.tabStyle}>
                        <MeatsComp navigation={navigation} products={products} />
                    </Tab>
                    <Tab
                        heading="Fish"
                        tabStyle={styles.tabStyle}
                        activeTextStyle={styles.activeTextStyle}
                        textStyle={styles.textStyle}
                        activeTabStyle={styles.tabStyle}
                    >
                        <MeatsComp navigation={navigation} products={products} />
                    </Tab>
                </Tabs>
                <Footer >
                    <FooterTab style={styles.footerCont}>
                        <Button>
                            <Text style={styles.footerTitle}>Sort by</Text>
                        </Button>
                        <Button>
                            <Text style={styles.footerTitle}>Filter</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        </SafeAreaView>
    );
};

export { Products };
