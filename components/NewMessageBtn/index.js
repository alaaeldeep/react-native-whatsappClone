import { StyleSheet, Pressable, View } from "react-native";
import React from "react";
import {
    MaterialCommunityIcons,
    Entypo,
    Fontisto,
    FontAwesome5,
    MaterialIcons,
} from "@expo/vector-icons";
import Colors from "../../constant/Colors";
import { useNavigation } from "@react-navigation/native";
const NewMessageBtn = () => {
    const navigate = useNavigation();

    const onPress = () => {
        navigate.navigate("contact");
    };
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="message-reply-text"
                    size={28}
                    color="white"
                />
            </View>
        </Pressable>
    );
};

export default NewMessageBtn;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.tint,
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 20,
        left: 130,
    },
});
