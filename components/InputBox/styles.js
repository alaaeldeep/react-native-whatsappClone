import { StyleSheet } from "react-native";
import Colors from "../../constant/Colors";

const styles = StyleSheet.create({
    container: { flexDirection: "row", alignItems: "flex-end", margin: 10 },
    mainContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        marginRight: 10,
        borderRadius: 25,
        flex: 1,
        alignItems: "flex-end",
    },
    textInput: { flex: 1, marginHorizontal: 10 },
    icon: { marginHorizontal: 5 },
    btnContainer: {
        backgroundColor: Colors.light.tint,
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
});
export default styles;
