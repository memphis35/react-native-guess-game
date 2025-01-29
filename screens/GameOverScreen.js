import { View, Text, StyleSheet } from "react-native";

function GameOverScreen() {
    return (
        <View style={styles.wrapper}>
            <Text>Game over.</Text>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    wrapper: {},
});
