import { Button } from "@/components/button";
import { Credential } from "@/components/credential";
import Header from "@/components/header";
import { QRcode } from "@/components/qrcode";
import { colors } from "@/styles/colors";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert, Modal, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function Ticket() {
    const [image, setImage] = useState("")
    const [showQRCode, setShowQRCode] = useState(false)


    async function handleSelectImage() {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
            })

            if (result.assets) {
                setImage(result.assets[0].uri)
            }

        } catch (error) {
            console.error(error);
            Alert.alert("Foto", "Não foi possível carregar a foto.");
        }
    }

    return (
        <View className="flex-1 bg-green-500">
            <StatusBar barStyle='light-content' />
            <Header title='Minha Credencial' />

            <ScrollView className="-mt-28 -z-10"
                contentContainerClassName="px-8 pb-8"
            >

                <Credential
                    image={image}
                    onShowQRCode={() => setShowQRCode(true)}
                    onChangeAvatar={handleSelectImage} />

                <FontAwesome name="angle-double-down" size={24} color={colors.gray[300]} className="self-center my-6" />

                <Text className="text-2xl font-bold text-white">Compartilhar credencial</Text>
                <Text className="mt-1 mb-6 text-base text-white font-regular">Mostre para o mundo que va participar do Unite summit</Text>

                <Button title="Compartilhar" />

                <TouchableOpacity activeOpacity={0.7} className="mt-10">
                    <Text className="mt-10 text-base font-bold text-center text-white">Remover Ingresso</Text>
                </TouchableOpacity>
            </ScrollView>

            <Modal visible={showQRCode} statusBarTranslucent animationType="slide">
                <View className="items-center justify-center flex-1 bg-green-500">
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setShowQRCode(false)}
                        className=""
                    >
                        <QRcode value="teste" size={300} />
                        <Text className="mt-10 text-sm text-center text-orange-500 font-body">
                            Fechar Qrcode
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}