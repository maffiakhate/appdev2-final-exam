import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import TodoScreen from "./screens/TodoScreen";

import { useState } from "react";
import { Id } from "./convex/_generated/dataModel";

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Todos: { userId: Id<"users"> };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [userId, setUserId] = useState<Id<"users"> | null>(null);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Login">
          {(props) => (
            <LoginScreen
              {...props}
              onLogin={(id) => {
                setUserId(id);
                props.navigation.replace("Todos", { userId: id });
              }}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Signup" component={SignupScreen} />

        <Stack.Screen name="Todos">
          {(props) => (
            <TodoScreen userId={props.route.params.userId} />
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
