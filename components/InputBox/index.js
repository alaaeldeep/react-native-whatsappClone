import { TextInput, View, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import {
    MaterialCommunityIcons,
    Entypo,
    Fontisto,
    FontAwesome5,
    MaterialIcons,
} from "@expo/vector-icons";

const InputBox = () => {
    const [message, setMessage] = useState("");

    const onMicrophonePress = () => {
        console.warn(`microphone`);
    };
    const onSendPress = () => {
        console.warn(`sending: ${message}`);
        setMessage("");
    };

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="gray" />
                <TextInput
                    placeholder="Type a message"
                    style={styles.textInput}
                    multiline
                    onChangeText={setMessage}
                />
                <Entypo
                    name="attachment"
                    size={24}
                    color="gray"
                    style={styles.icon}
                />
                {!message && (
                    <Fontisto
                        name="camera"
                        size={24}
                        color="gray"
                        style={styles.icon}
                    />
                )}
            </View>
            <Pressable onPress={onPress}>
                <View style={styles.btnContainer}>
                    {!message ? (
                        <MaterialCommunityIcons
                            name="microphone"
                            size={28}
                            color="white"
                        />
                    ) : (
                        <MaterialIcons name="send" size={28} color="white" />
                    )}
                </View>
            </Pressable>
        </View>
    );
};

export default InputBox;
