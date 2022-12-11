import { Provider, useSelector } from 'react-redux';
import store from "./redux/store";
import { Search } from './components/search';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Homepage } from './components/homepage';
import { About } from './components/about';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Homepage" component={Homepage}/>
          <Stack.Screen name="Search" component={Search}/>
          <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


