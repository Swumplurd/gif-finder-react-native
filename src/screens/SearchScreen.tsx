import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Button, View } from 'react-native'
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
        <View style={{backgroundColor: 'red'}}>
            <LinearGradient
                colors={['#03EDFD', '#023584', '#FE3E8B' ]}
                style={appTheme.linearGradient}
                start={{ x: 1, y: 0}}
                end={{ x: 0, y: 1 }}
            >
                <View style={appTheme.globalContainer}>
                    <TextInput style={appTheme.inputStyle} value={gif} onChangeText={setGif} placeholder='Search for a gif...' placeholderTextColor={'white'}/>
                    <Button title='Gif' onPress={handleSubmit}/>
                </View>
            </LinearGradient>
        </View>
    )
}
