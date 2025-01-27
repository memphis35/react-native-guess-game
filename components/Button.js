import { View, Text, StyleSheet } from "react-native";

function Button({ children }) {
    return (
        <View style={styles.wrapper}>
            <Text>{children}</Text>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 2,
        borderColor: "#000000",
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
});
