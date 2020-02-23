import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors';

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    card: {
        width: 250,
        height: 300,
        overflow: 'hidden',
        borderRadius: 10,
        marginHorizontal: 10
    },
    cardImage: {
        width: '100%',
        height: '100%',

    },
    cardContainer: {
        flex: 1,
    },
    sectionTitle: {
        padding: 15,
        marginLeft: 10,
        paddingLeft: 0,
        color: '#c1c1c1',
    },
    footer: {
        padding: 10,
        flex: 1,
        justifyContent: 'flex-end'
    },
    footerText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 16
    },
    footerPrice: {
        fontFamily: 'open-sans-bold',
        marginVertical: 5,
        fontSize: 20
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageSliderCont: {
        width: '100%',
        height:250,
    },
    pageCont:{
        flex:1,
    },
    rowImgCont:{
        width:'100%',
        flexDirection:'row',
    },
    rowImg:{
        flex:1,
        height:200,
        margin:5
    },
    FullWidthImg:{
        flex:1,
        height:100,
        margin:5,
        marginTop:0
    },
    catImg:{
        flex:1,
        justifyContent:'flex-end'
    },
    catName:{
        fontFamily:'open-sans-bold',
        fontSize:18,
        textAlign:'center',
        padding:10,
        color: COLORS.primary,
        backgroundColor: "rgba(0, 0, 0, .30)"
    }
});