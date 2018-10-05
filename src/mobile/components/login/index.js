import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            navigation.replace("Chats");
          }}
          title="Login"
        />
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
