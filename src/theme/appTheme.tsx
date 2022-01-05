import { StyleSheet } from "react-native";

export const appTheme = StyleSheet.create({
    globalContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    stackStyle: {
        backgroundColor: 'white',
    },
    gifStyle: {
        width: '95%',
        height: 350,
        alignSelf: 'center',
        marginBottom: 15
    },
    inputStyle: {
        borderBottomWidth: 1,
        marginBottom: 15
    },
    activityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
