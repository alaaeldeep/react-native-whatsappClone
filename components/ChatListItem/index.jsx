import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./style";
import moment from "moment";

const ChatListItem = (props) => {
    const { chatRoom } = props;
    const user = chatRoom.users[1];

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                {/* <Image
                    style={styles.avatar}
                    source={{
                        uri: user.imageUri,
                    }}
                /> */}
                <Image
                    style={styles.avatar}
                    source={require("../../data/amr.png")}
                />

                <View style={styles.middleContainer}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.lastMessage}>
                        {chatRoom.lastMessage.content}
                    </Text>
                </View>
            </View>

            <Text style={styles.time}>
                {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
        </View>
    );
};

export default ChatListItem;
