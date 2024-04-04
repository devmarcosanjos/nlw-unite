import { FontAwesome } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"
import { Redirect } from "expo-router"
import { MotiView } from "moti"
import { useState } from "react"
import {
    Alert,
    Modal,
    ScrollView,
    Share,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native"

import { useBadgeStore } from "@/store/badge-store"

import { colors } from "@/styles/colors"

import { Button } from "@/components/button"
import { Credential } from "@/components/credential"
import { Header } from "@/components/header"
import { QRCode } from "@/components/qrcode"

export default function Ticket() {
    const [expandQRCode, setExpandQRCode] = useState(false)

    const badgeStore = useBadgeStore()

    async function handleShare() {
        try {
            if (badgeStore.data?.checkInURL) {
                await Share.share({
                    message: badgeStore.data.checkInURL,
                })
            }
        } catch (error) {
            console.log(error)
            Alert.alert("Compartilhar", "Não foi possível compartilhar.")
        }
    }

    async function handleSelectImage() {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
            })

            if (result.assets) {
                badgeStore.updateAvatar(result.assets[0].uri)
            }
        } catch (error) {
            console.log(error)
            Alert.alert("Foto", "Não foi possível selecionar a imagem.")
        }
    }

    if (!badgeStore.data?.checkInURL) {
        return <Redirect href="/" />
    }

    return (
        <View className="flex-1 bg-green-500">
            <StatusBar barStyle="light-content" />
            <Header title="Minha Credencial" />

            <ScrollView
                className="-mt-28 -z-10"
                contentContainerClassName="px-8 pb-8"
                showsVerticalScrollIndicator={false}
            >
                <Credential
                    data={badgeStore.data}
                    onChangeAvatar={handleSelectImage}
                    onExpandQRCode={() => setExpandQRCode(true)}
                />

                <MotiView
                    from={{
                        translateY: 0,
                    }}
                    animate={{
                        translateY: 10,
                    }}
                    transition={{
                        loop: true,
                        type: "timing",
                        duration: 700,
                    }}
                >
                    <FontAwesome
                        name="angle-double-down"
                        color={colors.gray[300]}
                        size={24}
                        className="self-center my-6"
                    />
                </MotiView>

                <Text className="mt-4 text-2xl font-bold text-white">
                    Compartilhar credencial
                </Text>

                <Text className="mt-1 mb-6 text-base text-white font-regular">
                    Mostre ao mundo que você vai participar do evento{" "}
                    {badgeStore.data.eventTitle}!
                </Text>

                <Button title="Compartilhar" onPress={handleShare} />

                <TouchableOpacity
                    className="mt-10"
                    activeOpacity={0.7}
                    onPress={() => badgeStore.remove()}
                >
                    <Text className="text-base font-bold text-center text-white">
                        Remover Ingresso
                    </Text>
                </TouchableOpacity>
            </ScrollView>

            <Modal visible={expandQRCode} statusBarTranslucent>
                <View className="items-center justify-center flex-1 bg-green-500">
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setExpandQRCode(false)}
                    >
                        <QRCode value="teste" size={300} />
                        <Text className="mt-10 text-sm text-center text-orange-500 font-body">
                            Fechar QRCode
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}