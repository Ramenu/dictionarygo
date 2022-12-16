import { Provider, useSelector } from 'react-redux';
import store from "./redux/store";
import { Search } from './components/search';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Homepage } from './components/homepage';
import { About } from './components/about';
import { Settings } from './components/settings';
import { Dictionary } from './components/dictionary';
import { CoolJoke } from './components/cooljoke';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Homepage" component={Homepage}/>
          <Stack.Screen name="Search" component={Search}/>
          <Stack.Screen name="About" component={About}/>
          <Stack.Screen name="Settings" component={Settings}/>
          <Stack.Screen name="Dictionary" component={Dictionary}/>
          <Stack.Screen name="Cool Joke" component={CoolJoke}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


