import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { ActivityIndicator, Button, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { GifContext } from '../contexts/GifContext'
import { useGif } from '../hooks/useGif'
import { RootStackParams } from '../navigation/StackNav'
import { appTheme } from '../theme/appTheme'

interface Props extends StackScreenProps<RootStackParams, 'GifScreen'>{};

export const GifScreen = ({navigation}: Props) => {
    const {gifState} = useContext(GifContext);
    const {nameGif} = gifState

    const {isLoading, gifs} = useGif(nameGif)
    
    return (
        <View style={appTheme.globalContainer}>
        <Text>Gif</Text>
            <Text>{nameGif}</Text>
            <Button title='Search' onPress={() => navigation.navigate('SearchScreen')}/>
            {
                isLoading ? 
                    <ActivityIndicator size={'large'} color="#0000ff" /> 
                    :
                    <ScrollView>
                        {
                            gifs.map(gif => {
                                return <Image key={gif.id} style={appTheme.gifStyle} source={{uri: `${gif.images.original.url}`}}/>
                            })
                        }
                    </ScrollView>
            }

        </View>
    )
}
