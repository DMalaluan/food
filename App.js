import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import { Provider } from './src/context/FavoritesContext';

const navigator = createStackNavigator({
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
    Favorites: FavoritesScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

const App = createAppContainer(navigator);

export default () => {
  return (
  <Provider>
    <App />
    </Provider>
  )
}