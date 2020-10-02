import React, { Component } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
class Home extends Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.whole}>
        <View style={{ alignSelf: "flex-start", margin: 20 }}>
          <Feather name="settings" size={24} color="#1E90FF" />
        </View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          containerStyle={{
            borderRadius: 10,
            margin: 20,
            backgroundColor: "#fff",
            height: 50,
          }}
          inputContainerStyle={{
            borderRadius: 10,
            backgroundColor: "#fff",
            height: 30,
          }}
        />
        <View>
          <Text style={styles.text}>Categories</Text>
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("TabS");
            }}
          >
            <Image style={styles.image} source={require("../Images/cpu.png")} />
          </TouchableOpacity>
          <Image
            style={styles.image}
            source={require("../Images/fitness.png")}
          />
        </View>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../Images/mortarboard.png")}
          />
          <Image
            style={styles.image}
            source={require("../Images/suitcase.png")}
          />
        </View>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../Images/clouds.png")}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  whole: {
    width: "100%",
    height: "100%",

    backgroundColor: "#000",
    marginTop: Constants.statusBarHeight,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },

  image: {
    height: 120,
    width: 120,
    margin: 30,
    borderWidth: 2,
    borderColor: "#1E90FF",
  },
  text: {
    color: "#fff",
    fontSize: 40,
    marginTop: 60,
    alignSelf: "center",
  },
});
export default Home;
