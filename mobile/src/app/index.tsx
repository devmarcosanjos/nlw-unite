import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Link, Redirect } from "expo-router"
import { useState } from "react"
import { Alert, Image, StatusBar, View } from "react-native"

import { api } from "@/server/api"
import { useBadgeStore } from "@/store/badge-store"

import { colors } from "@/styles/colors"

import { Button } from "@/components/button"
import { Input } from "@/components/input"

export default function Home() {
    const [code, setCode] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const badgeStore = useBadgeStore()

    async function handleAccessCredential() {
        try {
            if (!code.trim()) {
                return Alert.alert("Ingresso", "Informe o código do ingresso!")
            }

            setIsLoading(true)

            const { data } = await api.get(`/attendees/${code}/badge`)
            badgeStore.save(data.badge)
        } catch (error) {
            console.log(error)
            setIsLoading(false)

            Alert.alert("Ingresso", "Ingresso não encontrado!")
        }
    }

    if (badgeStore.data?.checkInURL) {
        return <Redirect href="/ticket" />
    }

    return (
        <View className="items-center justify-center flex-1 p-8 bg-green-500">
            <StatusBar barStyle="light-content" />

            <Image
                source={require("@/assets/logo.png")}
                className="h-16"
                resizeMode="contain"
            />

            <View className="w-full gap-3 mt-12">
                <Input>
                    <MaterialCommunityIcons
                        name="ticket-confirmation-outline"
                        color={colors.green[200]}
                        size={20}
                    />
                    <Input.Field
                        placeholder="Código do ingresso"
                        onChangeText={setCode}
                    />
                </Input>

                <Button
                    title="Acessar credencial"
                    onPress={handleAccessCredential}
                    isLoading={isLoading}
                />

                <Link
                    href="/register"
                    className="mt-8 text-base font-bold text-center text-gray-100"
                >
                    Ainda não possui ingresso?
                </Link>
            </View>
        </View>
    )
}