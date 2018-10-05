import React from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  Button
} from "react-native";
import Input from "./Input";
import MessagesList from "./MessagesList";

class Messages extends React.Component {
  static navigationOptions = {
    headerTitle: "Room title 1",
    headerRight: <Button onPress={() => alert("in progress")} title="Edit" />
  };

  constructor(props) {
    super(props);
    this.state = {
      value: "a",
      list: new Array(190).fill().map((v, i) => ({
        key: `${i}`,
        message: "hey dude.. how's it going? check out my new messenger app",
        date: new Date()
      }))
    };
  }

  handleChange = value => {
    this.setState({ value });
  };

  handleSubmit = () => {
    this.setState(prevState => ({
      value: "",
      list: [
        ...prevState.list,
        { message: prevState.value, key: "" + Date(), date: new Date() }
      ]
    }));
  };

  render() {
    const { value } = this.state;
    const { isLoading } = this.props;
    const list = this.state.list.slice().reverse();

    if (isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <MessagesList list={list} />
        <Input
          value={value}
          onChangeText={this.handleChange}
          onSubmitEditing={this.handleSubmit}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  button: {
    marginTop: 20
  },
  item: {
    padding: 10
  }
});
