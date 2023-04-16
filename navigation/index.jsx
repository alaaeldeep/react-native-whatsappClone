import * as React from "react";
import {
    NavigationContainer,
    useNavigation,
    useRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constant/Colors";

import { View, Image, Text, Pressable } from "react-native";
import {
    Octicons,
    MaterialCommunityIcons,
    AntDesign,
    MaterialIcons,
    FontAwesome5,
} from "@expo/vector-icons";

import MainTabNavigator from "./MainTabNavigator";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import ContactScreen from "../screens/ContactScreen";

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}

const Stack = createStackNavigator();

function MyStack() {
    const navigate = useNavigation();
    const goBack = () => {
        navigate.goBack();
    };
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.light.tint,
                    shadowOpacity: 0 /* for ios */,
                    elevation: 0 /* for android */,
                },
                headerTintColor: Colors.light.background,
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen
                name="Home"
                options={{
                    title: "WhatsApp",
                    headerRight: () => (
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: 60,
                                marginRight: 10,
                            }}
                        >
                            <Octicons name="search" size={22} color={"white"} />
                            <MaterialCommunityIcons
                                name="dots-vertical"
                                size={22}
                                color={"white"}
                            />
                        </View>
                    ),
                }}
                component={MainTabNavigator}
            />
            <Stack.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={({ route }) => ({
                    title: route.params.name,
                    headerLeft: () => (
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Pressable
                                style={{ marginHorizontal: 15 }}
                                onPress={goBack}
                            >
                                <AntDesign
                                    name="arrowleft"
                                    size={22}
                                    color="white"
                                />
                            </Pressable>

                            <Image
                                style={{
                                    width: 45,
                                    height: 45,
                                    borderRadius: 45,
                                }}
                                source={route.params.img}
                            />
                        </View>
                    ),
                    headerRight: () => (
                        <View
                            style={{
                                flexDirection: "row",
                                width: 100,
                                justifyContent: "space-between",
                                marginRight: 7,
                            }}
                        >
                            <MaterialIcons
                                name="call"
                                size={22}
                                color={"white"}
                            />
                            <FontAwesome5
                                name="video"
                                size={22}
                                color={"white"}
                            />
                            <MaterialCommunityIcons
                                name="dots-vertical"
                                size={22}
                                color={"white"}
                            />
                        </View>
                    ),
                })}
            />
            <Stack.Screen name="contact" component={ContactScreen} />
        </Stack.Navigator>
    );
}
