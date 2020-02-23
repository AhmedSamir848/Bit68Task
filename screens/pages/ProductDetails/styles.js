import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0

    },
    pageCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
