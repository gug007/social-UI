import React, { Component } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableHighlight
} from "react-native";
import moment from "moment";

const list = new Array(5).fill().map((v, i) => ({
  key: `${i}`,
  date: new Date()
}));

const pic = {
  uri:
    "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/18622637_1977746912453788_5051464430201665273_n.jpg?_nc_cat=106&oh=25e4908e64466a1580bb9925bf1f53f8&oe=5C62CAB0"
};

class Chats extends Component {
  static navigationOptions = {
    title: "Chats"
  };

  onPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Messages");
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.scrollView}
          data={list}
          renderItem={({ item }) => (
            <TouchableHighlight underlayColor="#f1f1f1" onPress={this.onPress}>
              <View style={styles.chat}>
                <View style={styles.chatImage}>
                  <Image source={pic} style={styles.image} />
                </View>
                <View style={styles.chatInfo}>
                  <Text>Gurgen Abagyan</Text>
                  <Text>{moment(item.date).format("LT")}</Text>
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  chat: {
    flex: 1,
    flexDirection: "row"
  },
  chatInfo: {
    flex: 1,
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "#d5d5d5"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2
  },
  chatImage: {
    padding: 7
  }
});
