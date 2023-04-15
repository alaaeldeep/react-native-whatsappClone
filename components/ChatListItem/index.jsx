import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import styles from "./style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

const ChatListItem = (props) => {
    const { chatRoom } = props;
    const user = chatRoom.users[1];

    const navigation = useNavigation();

    const onPressHandler = () => {
        navigation.navigate("ChatRoom", {
            id: chatRoom.id,
            name: user.name,
            img: user.imageUri,
        });
    };
    return (
        <Pressable onPress={onPressHandler}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    {/* <Image
                    style={styles.avatar}
                    source={{
                        uri: user.imageUri,
                    }}
                /> */}
                    <Image style={styles.avatar} source={user.imageUri} />

                    <View style={styles.middleContainer}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text style={styles.lastMessage}>
                            {chatRoom.lastMessage.content}
                        </Text>
                    </View>
                </View>

                <Text style={styles.time}>
                    {moment(chatRoom.lastMessage.createdAt).format(
                        "DD/MM/YYYY"
                    )}
                </Text>
            </View>
        </Pressable>
    );
};

export default ChatListItem;
