import { View, Text, Image, SafeAreaView, TextInput } from "react-native";
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, AdjustmentIcon } from 'react-native-heroicons/outline'

const HomeScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
      <SafeAreaView className="bg-white pt-5">
        {/**HEADER**/}
        <View className="flex-row pb-3 items-center mx-2 space-x-2">
            <Image
                source={{
                    uri: "https://links.papareact.com/wru",
                }}
                className="h-7 w-7 bg-gray-400 p-5 rounded-full"
            />

            <View>
                <Text className="font-bold text-xs text-gray-400">Deliver Now!</Text>
                <Text className="font-bold text-xl">
                    Current Location
                    <ChevronDownIcon size={20} color="#00CCBB" />
                </Text>
            </View>

            <UserIcon size={35} color="#00CCBB" />
        </View>
        {/**SEARCH**/}
        <View className="">
            <View className="">
                <SearchIcon />
                <TextInput
                    placeholder="Restaurants and cuisines"
                    keyboardType="default"
                />
            </View>

            <AdjustmentIcon color="#00CCBB" />
        </View>
      </SafeAreaView>
    );
}

export default HomeScreen