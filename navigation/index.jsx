import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constant/Colors";

import SettingsScreen from "../screens/SettingsScreen";
import { View } from "react-native";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import MainTabNavigator from "./MainTabNavigator";
export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}

const Stack = createStackNavigator();

function MyStack() {
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
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}
