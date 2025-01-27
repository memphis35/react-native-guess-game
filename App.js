import { View, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
    return (
        <View style={styles.wrapper}>
            <StartGameScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
});
