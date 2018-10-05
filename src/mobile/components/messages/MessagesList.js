import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import moment from "moment";

const MessagesList = ({ list }) => (
  <FlatList
    style={styles.scrollView}
    data={list}
    renderItem={({ item }) => (
      <View
        style={[
          styles.container,
          {
            alignSelf: "flex-start"
          }
        ]}
      >
        <View style={styles.message}>
          <Text>{item.message}</Text>
          <Text style={styles.messageDate}>
            {moment(item.date).format("LT")}
          </Text>
        </View>
      </View>
    )}
    inverted
  />
);

export default MessagesList;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#f1f1f1",
    width: "100%"
  },
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 7,
    marginBottom: 7,
    marginLeft: 7,
    marginRight: 7
  },
  message: {
    maxWidth: "80%",
    padding: 7
  },
  messageDate: {
    width: "100%",
    color: "#999",
    textAlign: "right",
    fontSize: 10
  }
});
