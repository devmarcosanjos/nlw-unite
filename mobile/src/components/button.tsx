import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
    isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: Props) {
    return (
        <TouchableOpacity
            disabled={isLoading}
            activeOpacity={0.7}
            {...rest}
        >
            <View
                className="items-center justify-center w-full bg-orange-500 rounded-lg h-14"

            >
                {
                    isLoading
                        ? (<ActivityIndicator className="text-green-500" />)
                        : (<Text className="text-base font-bold text-green-500 uppercase t">
                            {title}
                        </Text>)
                }

            </View>
        </TouchableOpacity>
    )
}