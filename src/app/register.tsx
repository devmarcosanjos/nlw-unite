import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { colors } from '@/styles/colors';
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, StatusBar, View } from 'react-native';

export default function Register() {
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
                    <FontAwesome6 name='user-circle' size={20} color={colors.green[200]} />
                    <Input.Field
                        placeholder='Nome completo'
                        keyboardType='default'
                    />
                </Input>
                <Input>
                    <MaterialIcons name='alternate-email' size={20} color={colors.green[200]} />
                    <Input.Field
                        placeholder='E-mail'
                        keyboardType='email-address'
                    />
                </Input>


                <Button
                    title='Validar ingresso'
                    isLoading={false}
                />

                <Link
                    href='/'
                    className='mt-8 text-base font-bold text-center text-gray-100'
                >
                    Já possui ingresso
                </Link>
            </View>
        </View>
    )
}