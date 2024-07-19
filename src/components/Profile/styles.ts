import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    label: {
        marginBottom: 0,
        fontSize: 16,
        color: '#333',
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
});

export default styles