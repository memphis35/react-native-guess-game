import { View, ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Colors from "./constants/colors";
import GameHeader from "./screens/GameHeader";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [gameStats, setGameStats] = useState({
        stage: "pre",
        number: null,
        count: 0,
    });

    const [fontsLoaded] = useFonts({
        gemunu: require("./assets/fonts/GemunuLibre-Regular.ttf"),
        "gemunu-bold": require("./assets/fonts/GemunuLibre-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const onSwitchStage = () => {
        if (gameStats.stage === "pre") {
            setGameStats((currentStats) => {
                return { ...currentStats, stage: "during" };
            });
        } else if (gameStats.stage === "during") {
            setGameStats((currentStats) => {
                return { ...currentStats, stage: "post" };
            });
        } else {
            setGameStats((currentStats) => {
                return { ...currentStats, stage: "post", number: null };
            });
        }
    };

    const stages = {
        pre: <StartGameScreen gameStats={gameStats} setGameStats={setGameStats} />,
        during: <GameScreen gameStats={gameStats} setGameStats={setGameStats} />,
        post: <GameOverScreen gameStats={gameStats} setGameStats={setGameStats} />,
    };

    return (
        <View style={styles.wrapper}>
            <ImageBackground
                source={require("./assets/background.png")}
                resizeMode="cover"
                style={styles.wrapper}
                imageStyle={styles.image}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <GameHeader />
                    {stages[gameStats.stage]}
                </SafeAreaView>
            </ImageBackground>
            <StatusBar barStyle="light-content" />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: Colors.dark,
    },
    image: {
        opacity: 0.12,
    },
});
