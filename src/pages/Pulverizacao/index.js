import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper';
import { FontAwesome } from "@expo/vector-icons";
import data from '../../../json/dados.json';

export default function Pulverizacao() {
    const navigation = useNavigation();

    function navigateToOperacao() {
        navigation.navigate('OperacaoPulverizacao');
    };

    function navigateToNovaOperacao() {
        navigation.navigate('NovaOperacaoPulverizacao');
    };

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View>
                        <List.Section>
                            <List.Accordion
                                title="18-10-2016"
                                style={{ padding: 0 }}
                                left={props => <List.Icon {...props} icon="table-large" />}
                                onPress={() => ("")}
                                theme={{ colors: { primary: 'blue' } }}>
                                <TouchableWithoutFeedback>
                                    <View>
                                        <FlatList
                                            horizontal
                                            data={data.mipmid1}
                                            keyExtractor={item => item.id}
                                            renderItem={({ item }) => {
                                                return (
                                                    <View>
                                                        <Text style={{ fontWeight: 'bold' }}>Safra</Text>
                                                        <Text>{item.Safra}</Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Produtor</Text>
                                                        <Text>{item.Produtor} </Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Identificação</Text>
                                                        <Text>{item.Identificação}</Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Cultivar</Text>
                                                        <Text>{item.Cultivar}</Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Responsável Técnico</Text>
                                                        <Text>{item.ResponsávelTécnico}</Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Município</Text>
                                                        <Text>{item.Município}</Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Ações:</Text>
                                                    </View>
                                                );
                                            }}
                                        />
                                        <View>
                                            <Text style={{ fontWeight: 'bold' }}>Operações de Pulverização/Aplicação</Text>
                                            <TouchableOpacity onPress={() => navigateToOperacao()}>
                                                <FontAwesome name="eye" size={20} />
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <Text style={{ fontWeight: 'bold' }}>Nova Operação de Pulverização</Text>
                                            <TouchableOpacity onPress={() => navigateToNovaOperacao()}>
                                                <FontAwesome name="pagelines" size={20} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </List.Accordion>

                            <List.Accordion
                                title="12-10-2018"
                                style={{ padding: 0 }}
                                left={props => <List.Icon {...props} icon="table-large" />}
                                onPress={() => ("")}
                                theme={{ colors: { primary: 'blue' } }}>
                                <TouchableWithoutFeedback>
                                    <View>
                                        <FlatList
                                            horizontal
                                            data={data.mipmid2}
                                            keyExtractor={item => item.id}
                                            renderItem={({ item }) => {
                                                return (
                                                    <View>
                                                        <Text style={{ fontWeight: 'bold' }}>Safra</Text>
                                                        <Text>{item.Safra}</Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Produtor</Text>
                                                        <Text>{item.Produtor} </Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Identificação</Text>
                                                        <Text>{item.Identificação}</Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Cultivar</Text>
                                                        <Text>{item.Cultivar}</Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Responsável Técnico</Text>
                                                        <Text>{item.ResponsávelTécnico}</Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Município</Text>
                                                        <Text>{item.Município}</Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Ações:</Text>
                                                    </View>
                                                );
                                            }}
                                        />
                                        <View>
                                            <Text style={{ fontWeight: 'bold' }}>Operações de Pulverização/Aplicação</Text>
                                            <TouchableOpacity onPress={() => navigateToOperacao()}>
                                                <FontAwesome name="eye" size={20} />
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <Text style={{ fontWeight: 'bold' }}>Nova Operação de Pulverização</Text>
                                            <TouchableOpacity onPress={() => navigateToNovaOperacao()}>
                                                <FontAwesome name="pagelines" size={20} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </List.Accordion>

                            <List.Accordion
                                title="16-10-2019"
                                style={{ padding: 0 }}
                                left={props => <List.Icon {...props} icon="table-large" />}
                                onPress={() => ("")}
                                theme={{ colors: { primary: 'blue' } }}>
                                <TouchableWithoutFeedback>
                                    <View>
                                        <FlatList
                                            horizontal
                                            data={data.mipmid3}
                                            keyExtractor={item => item.id}
                                            renderItem={({ item }) => {
                                                return (
                                                    <View>
                                                        <Text style={{ fontWeight: 'bold' }}>Safra</Text>
                                                        <Text>{item.Safra}</Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Produtor</Text>
                                                        <Text>{item.Produtor} </Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Identificação</Text>
                                                        <Text>{item.Identificação}</Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Cultivar</Text>
                                                        <Text>{item.Cultivar}</Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Responsável Técnico</Text>
                                                        <Text>{item.ResponsávelTécnico}</Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Município</Text>
                                                        <Text>{item.Município}</Text>
                                                        <Text style={{ fontWeight: 'bold' }}>Ações:</Text>
                                                    </View>
                                                );
                                            }}
                                        />
                                        <View>
                                            <Text style={{ fontWeight: 'bold' }}>Operações de Pulverização/Aplicação</Text>
                                            <TouchableOpacity onPress={() => navigateToOperacao()}>
                                                <FontAwesome name="eye" size={20} />
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <Text style={{ fontWeight: 'bold' }}>Nova Operação de Pulverização</Text>
                                            <TouchableOpacity onPress={() => navigateToNovaOperacao()}>
                                                <FontAwesome name="pagelines" size={20} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </List.Accordion>
                        </List.Section>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}