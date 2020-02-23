import { StyleSheet, Platform } from 'react-native';
import COLORS from '../../../constants/colors';

export default StyleSheet.create({
    screen: {
        flex: 1,
    },
    imageSliderCont: {
        width: '100%',
        height: 300,
    },
    detailsCont: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    tabsContainerStyle: Platform.OS == 'android' ? {
        borderWidth: 0,
        height: 'auto',
        width: '100%',
        backgroundColor: COLORS.primary
    } : {},
    tabStyle: Platform.OS == 'android' ? {
        backgroundColor: COLORS.primary,
        paddingTop: 10,
        paddingBottom: 5,
    } : {},
    activeTextStyle: Platform.OS == 'android' ? {
        color: COLORS.accent,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.accent,
        paddingBottom: 10
    } : {},
    textStyle: Platform.OS == 'android' ? {
        color: 'black',
        paddingBottom: 10
    } : {},

    titleCont: {
        marginBottom: 20
    },
    price: {
        fontFamily: 'open-sans-bold',
        fontSize: 20
    },
    priceSub: {
        fontSize: 14,
        color: 'grey'
    },
    featuresCont: {
        flexDirection: 'row'
    },
    featureTitleCont: {
        marginHorizontal: 15
    },
    footerCont: {
        backgroundColor: COLORS.accent,
    },
    footerTitle: {
        color: COLORS.primary
    },

});