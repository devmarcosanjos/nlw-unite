import { QRcode } from "@/components/qrcode";
import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

type Props = {
    image?: string;
    onChangeAvatar: () => void;
    onShowQRCode: () => void;
}

export function Credential({ onChangeAvatar, onShowQRCode, image }: Props) {
    return (
        <View className="items-center self-stretch w-full">
            <Image
                source={require("@/assets/ticket/band.png")}
                className="z-10 w-24 h-52"
            />

            <View
                className="items-center self-stretch pb-6 mx-3 -mt-5 bg-black/20 border-white/10 rounded-2xl">

                <ImageBackground
                    source={require("@/assets/ticket/header.png")}
                    className="items-center self-stretch h-40 px-6 py-8 overflow-hidden border-b border-white/10">
                    <View className="flex-row items-center justify-between w-full">
                        <Text className="text-sm font-bold text-zinc-50">Unite summit</Text>
                        <Text className="text-sm font-bold text-zinc-50">#123</Text>
                    </View>

                    <View className="w-40 h-40 bg-black rounded-full" />
                </ImageBackground>

                {
                    image ? (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={onChangeAvatar}
                        >
                            <Image
                                source={{
                                    uri: image
                                }}
                                className="-mt-24 rounded-full w-36 h-36"
                            />
                        </TouchableOpacity>
                    )
                        :
                        (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                className="items-center justify-center w-40 h-40 -mt-24 bg-gray-400 rounded-full"
                                onPress={onChangeAvatar}
                            >
                                <Feather name="camera" color={colors.green[400]} size={32} />
                            </TouchableOpacity>
                        )
                }

                <Text className="mt-4 text-2xl text-bold text-zinc-50">Marcos Alexandre</Text>
                <Text className="mb-4 text-base font-regular text-zinc-300">marcos@email.com</Text>


                <QRcode value="teste" size={120} />
                <TouchableOpacity activeOpacity={0.7} className="mt-6" onPress={onShowQRCode}>
                    <Text className="mt-10 text-sm text-orange-500 font-body">Ampliar QRcode</Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}