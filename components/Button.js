import { View, Text, StyleSheet } from "react-native";

function Button({ children }) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{children}</Text>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 2,
        borderColor: "#000000",
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: "#8bd450",
    },
    title: {
        color: "#3f6d4e",
        textTransform: "uppercase",
    },
});
