import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useState } from 'react'
import { Button, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { GifContext } from '../contexts/GifContext'
import { RootStackParams } from '../navigation/StackNav'
import { appTheme } from '../theme/appTheme'

interface Props extends StackScreenProps<RootStackParams, 'SearchScreen'>{};

export const SearchScreen = ({navigation}: Props) => {
    const {setGifName} = useContext(GifContext)

    const [gif, setGif] = useState('');

    const handleSubmit = () => {
        setGifName(gif)
        navigation.navigate('GifScreen')
    }

    return (
        <View style={appTheme.globalContainer}>
            <Text>Search</Text>
            <TextInput value={gif} onChangeText={setGif}/>

            <Button title='Gif' onPress={handleSubmit}/>
        </View>
    )
}
