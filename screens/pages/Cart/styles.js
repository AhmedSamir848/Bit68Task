import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors';

export default StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0

    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    amount: {
        color: COLORS.accent
    }
});
