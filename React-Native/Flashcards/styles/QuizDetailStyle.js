import { StyleSheet } from 'react-native'
import { pastelYellow, red, green, summerBlue, white } from '../utils/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 80
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 150
    },
    text: {
        fontSize: 32,
        textAlign: 'center'
    },
    answerBtnText: {
        fontSize: 22,
        textAlign: 'center',
        color: red,
        marginBottom: 20,
    },
    correctBtn: {
        backgroundColor: green,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        width: 200,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: summerBlue,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    incorrectBtn: {
        backgroundColor: red,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        width: 200,
        margin: 10,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: pastelYellow,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    deckButton: {
        backgroundColor: pastelYellow,
        height: 50,
        width: 200,
        margin: 10,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: summerBlue,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    startButton: {
        backgroundColor: summerBlue,
        height: 50,
        width: 200,
        margin: 10,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: pastelYellow,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
})

export default styles