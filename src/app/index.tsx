import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { colors } from '@/styles/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, StatusBar, View } from 'react-native';

export default function Home() {
    return (
        <View className='items-center justify-center flex-1 p-8 bg-green-500'>
            <StatusBar barStyle='light-content' />

            <Image
                source={require("@/assets/logo.png")}
                className='h-16'
                resizeMode='contain'
            />
            <View className='w-full gap-3 mt-12'>
                <Input>
                    <MaterialCommunityIcons name='ticket-confirmation-outline' size={20} color={colors.green[200]} />
                    <Input.Field
                        placeholder='Codigo do ingresso'
                    />
                </Input>


                <Button
                    title='Validar ingresso'
                    isLoading={false}
                />


                <Link
                    href='/register'
                    className='mt-8 text-base font-bold text-center text-gray-100'
                >
                    Ainda não possui ingresso
                </Link>
            </View>
        </View>
    )
}