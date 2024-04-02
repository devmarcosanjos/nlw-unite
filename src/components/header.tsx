import { Text, View } from "react-native";

type Props = {
    title: string
}

export default function Header({ title }: Props) {
    return (
        <View className="flex-row items-end w-full px-8 pb-4 border-b border-white/10 bg-black/20 h-28">
            <Text className="flex-1 text-lg font-medium text-center text-white">{title}</Text>
        </View>
    )
}