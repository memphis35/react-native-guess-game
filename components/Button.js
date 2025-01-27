import { View, Text, Pressable, StyleSheet } from "react-native";

function Button(props) {
    return (
        <View>
            <Pressable onPress={props.onPress} style={({ pressed }) => (pressed ? styles.pressed : styles.wrapper)}>
                <Text style={styles.title}>{props.children}</Text>
            </Pressable>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 2,
        borderColor: "#1d1a2f",
        borderRadius: 4,
        backgroundColor: "#8bd450",
    },
    title: {
        color: "#3f6d4e",
        textTransform: "uppercase",
        textAlign: "center",
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    pressed: {
        backgroundColor: "#d3290f",
        borderWidth: 2,
        borderColor: "#1d1a2f",
        borderRadius: 4,
        transform: [
            {
                rotateY: "180deg",
            },
        ],
    },
});
