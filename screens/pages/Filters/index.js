/* Libraries That Needed */
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import HeaderSearch from '../../../components/UI/HeaderSearch';
import {Ionicons} from '@expo/vector-icons'
import styles from './styles';
/*****************************/

const Filters = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.headerCont}>
                <Ionicons
                    name='md-menu'
                    style={styles.backBtn}
                    onPress={()=>navigation.openDrawer()}
                />
                <HeaderSearch
                    placeholder="Type location"
                />
            </View>
            <View style={styles.pageCont}>
                <Text>Hi From Filters @ahmedsamir</Text>
            </View>
        </SafeAreaView>
    );
};

export { Filters };
