import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
    isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: Props) {
    return (
        <TouchableOpacity
            disabled={isLoading}
            activeOpacity={0.7}
            className="items-center justify-center w-full bg-orange-500 rounded-lg h-14"
            {...rest}
        >
            {
                isLoading
                    ? (<ActivityIndicator className="text-green-500" />)
                    : (<Text className="text-base font-bold text-white uppercase t">
                        {title}
                    </Text>)
            }

        </TouchableOpacity>
    )
}