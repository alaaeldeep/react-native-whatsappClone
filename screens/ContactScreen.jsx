import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import Users from "../data/Users";
import NewMessageBtn from "../components/NewMessageBtn";
import ContactListItem from "../components/ContactListItem";
const ContactScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: "100%" }}
                data={Users}
                renderItem={({ item }) => <ContactListItem user={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default ContactScreen;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
