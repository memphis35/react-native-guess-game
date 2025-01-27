import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
    return (
        <View style={styles.wrapper}>
            <StartGameScreen />
            <StatusBar barStyle="light-content" />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#1d1a2f",
    },
});
