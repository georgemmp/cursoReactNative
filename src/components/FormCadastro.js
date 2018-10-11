import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

const formCadastro = props => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 2, justifyContent: 'center' }}>
            <TextInput value={props.nome} placeholder="Nome" style={{ fontSize: 20, height: 45 }} />
            <TextInput value={props.email} placeholder="Email" style={{ fontSize: 20, height: 45 }} />
            <TextInput value={props.senha} placeholder="Senha" style={{ fontSize: 20, height: 45 }} />
        </View>

        <View style={{ flex: 1 }}>
            <Button title="Cadastrar" onPress={() => false} color="#115e54" />
        </View>
    </View>
);

const mapStateToProps = state => (
    {
        nome: state.AutenticaoReducer.nome,
        email: state.AutenticaoReducer.email,
        senha: state.AutenticaoReducer.senha
    }
);


export default connect(mapStateToProps, null)(formCadastro);
