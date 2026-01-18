// app/_layout.tsx
import { Tabs } from "expo-router";
import { AntDesign, Feather, EvilIcons, Ionicons, FontAwesome } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#34967C",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(home)/search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(home)/saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color }) => <EvilIcons name="heart" size={27} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(home)/inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ color }) => <Ionicons name="chatbubbles-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(home)/profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
