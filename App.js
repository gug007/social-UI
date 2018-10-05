import { createStackNavigator } from "react-navigation";
import MessagesScreen from "./src/mobile/components/messages";
import LoginScreen from "./src/mobile/components/login";
import ChatsScreen from "./src/mobile/components/chats";

const App = createStackNavigator(
  {
    Messages: { screen: MessagesScreen },
    Login: { screen: LoginScreen },
    Chats: { screen: ChatsScreen }
  },
  {
    initialRouteName: "Chats"
  }
);

export default App;
