import { Dimensions, StyleSheet } from "react-native";

const {height} = Dimensions.get('screen')

export const appTheme = StyleSheet.create({
    globalContainer: {
        marginHorizontal: 20,
        marginVertical: 10
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
        borderColor: 'rgba(255, 255, 255, 0.5)',
        marginBottom: 15,
        color: 'white',
    },
    activityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },  
    linearGradient: {
        height,
        justifyContent: 'center'
    },
    backArrow: {
        position: 'absolute',
        zIndex: 100,
        top: 50,
        left: 20
    },
    gifGrid: {
        marginTop: 40
    }
})
