import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useState } from 'react'
import { ActivityIndicator, Image, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { GifContext } from '../contexts/GifContext'
import { useGif } from '../hooks/useGif'
import { RootStackParams } from '../navigation/StackNav'
import { appTheme } from '../theme/appTheme'

interface Props extends StackScreenProps<RootStackParams, 'GifScreen'>{};

export const GifScreen = ({navigation}: Props) => {
    const {gifState} = useContext(GifContext);
    const {nameGif} = gifState

    const {isLoading, gifs} = useGif(nameGif);

    return (
        <View style={{flex: 1}}>
            <TouchableOpacity style={appTheme.backArrow} onPress={() => navigation.navigate('SearchScreen')}>
              <Icon name="return-up-back-outline" size={30} color="#fff" />
            </TouchableOpacity>

            {
                isLoading ? 
                    <ActivityIndicator style={appTheme.activityIndicatorStyle} size={'large'} color="#0000ff" /> 
                    :
                    <ScrollView style={appTheme.gifGrid}>
                        {
                            gifs.map(gif => {
                                return (
                                    <Image key={gif.id} style={appTheme.gifStyle} source={{uri: `${gif.images.original.url}`}}/>
                                )
                            })
                        }
                    </ScrollView>
            }
        </View>
    )
}
