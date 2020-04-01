import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Pulverizacao() {
    const navigation = useNavigation();

    function navigateToOperacao() {
        navigation.navigate('OperacaoPulverizacao');
    };

    function navigateToNovaOperacao() {
        navigation.navigate('NovaOperacaoPulverizacao');
    };

    return(
        <View>
            <View>
                <TouchableOpacity onPress={() => navigateToOperacao()}>
                    <Text>Operação de Pulverização</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigateToNovaOperacao()}>
                    <Text>Nova Operação de Pulverização</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}