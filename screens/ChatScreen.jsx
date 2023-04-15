import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import ChatListItem from "../components/ChatListItem";
import ChatRooms from "../data/ChatRooms";

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: "100%" }}
                data={ChatRooms}
                renderItem={({ item }) => <ChatListItem chatRoom={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
