import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ImageBackground,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/ChatMessage";
import ChatRoomData from "../data/Chats";
import bgImage from "../assets/BG.png";
import InputBox from "../components/InputBox";
const ChatRoomScreen = () => {
    const route = useRoute();

    return (
        <ImageBackground style={{ height: "100%" }} source={bgImage}>
            <FlatList
                data={ChatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />
            <InputBox />
        </ImageBackground>
    );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({});
