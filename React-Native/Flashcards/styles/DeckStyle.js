import { StyleSheet } from 'react-native'
import { pastelYellow, red, summerBlue, white } from '../utils/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    deckTitle: {
        fontSize: 36,
        textAlign: 'center',
        paddingTop: 100,
        paddingBottom: 10,
    },
    deckInfo: {
        fontSize: 24,
        textAlign: 'center',
        paddingBottom: 150
    },
    addButton: {
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
    addBtnText: {
        fontSize: 22,
        textAlign: 'center',
    },
    startBtnText: {
        fontSize: 22,
        textAlign: 'center',
        color: white
    },
    deleteBtnText: {
        fontSize: 22,
        textAlign: 'center',
        color: red,
        marginTop: 20,
    },
})

export default styles