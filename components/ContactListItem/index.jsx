import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import styles from "./style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

const ContactListItem = (props) => {
    const { chatRoom } = props;
    const { user } = props;

    const navigation = useNavigation();

    /*   const onPressHandler = () => {
        navigation.navigate("ChatRoom", {
            id: chatRoom.id,
            name: user.name,
            img: user.imageUri,
        });
    }; */
    return (
        <Pressable /*  onPress={onPressHandler} */>
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
                        <Text style={styles.status}>{user.status}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default ContactListItem;
