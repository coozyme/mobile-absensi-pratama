import { NavigationContainer } from '@react-navigation/native';
import HomePages from '../Pages/HomePages';
import CutiPages from '../Pages/CutiPages';
import LaporanCutiPages from '../Pages/LaporanCutiPages';
import DetailLaporanCutiPages from '../Pages/DetailLaporanCutiPages';
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
            <Stack.Screen
               name='AbsensiPage'
               component={AbsensiPages}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name='CutiPage'
               component={CutiPages}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name='LaporanCutiPage'
               component={LaporanCutiPages}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name='DetailLaporanCutiPage'
               component={DetailLaporanCutiPages}
               options={{ headerShown: false }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
export default Index;