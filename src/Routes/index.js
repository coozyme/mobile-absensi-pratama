import { NavigationContainer } from '@react-navigation/native';
import HomePages from '../Pages/HomePages';
import AbsensiPages from '../Pages/AbsensiPages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function Index() {
   // const isDarkMode = useColorScheme() === 'dark';

   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName='HomePages'>
            <Stack.Screen
               name='HomePage'
               component={HomePages}
               options={{ headerShown: false }}
            />
            {/* <Stack.Screen
               name='AbsensiPage'
               component={AbsensiPages}
               options={{ headerShown: false }}
            /> */}
         </Stack.Navigator>
      </NavigationContainer>
   );
}
export default Index;