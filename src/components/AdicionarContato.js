import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions';

const adicionarContato = props => (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput 
                placeholder='E-mail' style={{ fontSize: 20, height: 45 }} onChangeText={(text) => props.modificaAdicionaContatoEmail(text)} 
                value={props.adicionar_contato_email}
            />
        </View>

        <View style={{ flex: 1 }}>
            <Button title='Adicionar' color='#115E54' onPress={() => props.adicionaContato(props.adicionar_contato_email)} />
            <Text style={{ color: 'red', fontSize: 20 }}>
                { props.cadastro_resultado_txt_erro }
            </Text>
        </View>
        
    </View>
);

const mapStateToProps = state => (
    {
        adicionar_contato_email: state.AppReducer.adicionar_contato_email,
        cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro
    }
);

export default connect(
    mapStateToProps, 
    { modificaAdicionaContatoEmail, adicionaContato }
)(adicionarContato);
