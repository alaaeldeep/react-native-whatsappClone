import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useColorScheme } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Colors from "../constant/Colors";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    const colorScheme = useColorScheme();
    return (
        <Tab.Navigator
            initialRouteName="chats"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].background,
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme].tint,
                    width: "auto",
                    paddingHorizontal: 0,
                },
                tabBarIndicatorStyle: {
                    backgroundColor: Colors[colorScheme].background,
                    height: 4,
                },
                tabBarLabelStyle: { fontWeight: "bold" },
                /*  tabBarScrollEnabled: true, */
            }}
        >
            <Tab.Screen
                name="Camera"
                component={HomeScreen}
                tabBarItemStyle={{ width: 20 }}
                options={{
                    tabBarIcon: () => (
                        <Fontisto name="camera" color="white" size={18} />
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen name="Chats" component={HomeScreen} />
            <Tab.Screen name="Status" component={SettingsScreen} />
            <Tab.Screen name="Calls" component={SettingsScreen} />
        </Tab.Navigator>
    );
}
export default MyTabs;
