import { StyleSheet } from 'react-native'
import { pastelYellow, blue, white } from '../utils/colors'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 30
    },
    deck: {
        backgroundColor: '#177CB0',
        borderColor: blue,
        borderRadius: 2,
        padding: 10,
        margin: 10,
        width: 300,
        alignSelf: 'center'
    },
    deckTitle: {
        fontSize: 36,
        color: pastelYellow,
        paddingTop: 10,
        paddingBottom: 10
    },
    deckInfo: {
        fontSize: 24,
        color: white,
        paddingBottom: 30
    }
})

export default styles