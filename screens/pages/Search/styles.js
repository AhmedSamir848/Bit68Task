import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/colors';

export default StyleSheet.create({
    screen: {
        flex: 1,
    },
    searchInput: {
        color: 'black'
    },
    searchInputContainer: {
        backgroundColor: 'white'
    },
    centered: {
        flex: 1,
        marginTop:30
    },
    errorMessage: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        margin: 15,
        color: COLORS.danger,
        textAlign: 'center'
    },
});