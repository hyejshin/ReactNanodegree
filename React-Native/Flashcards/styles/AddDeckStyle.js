import { StyleSheet } from 'react-native'
import { summerBlue, white } from '../utils/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    text: {
        fontSize: 32,
        textAlign: 'center'
    },
    textField: {
        marginTop: 50,
        marginBottom: 100,
        borderColor: summerBlue,
        borderWidth: 1,
        borderRadius: 2,
        padding: 4,
        width: 300,
        fontSize: 24
    },
    submitBtn: {
        backgroundColor: summerBlue,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        width: 200,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    }
})

export default styles