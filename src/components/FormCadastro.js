import React, { Component } from 'react';
import { View, TextInput, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { 
    modificaEmail, 
    modificaSenha, 
    modificaNome, 
    cadastrarUsuario 
} from '../actions/AutenticacaoActions';

class FormCadastro extends Component {
    cadastraUsuario() {
        const { nome, email, senha } = this.props;
        
        this.props.cadastrarUsuario({
            nome,
            email,
            senha
        });
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../img/bg.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 2, justifyContent: 'center', color: '#fff' }}>
                        <TextInput
                            placeholderTextColor='#fff'
                            value={this.props.nome} 
                            placeholder="Nome" 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaNome(texto)}
                        />
                        <TextInput
                            placeholderTextColor='#fff'
                            value={this.props.email} 
                            placeholder="Email" 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaEmail(texto)}
                        />
                        <TextInput
                            placeholderTextColor='#fff'
                            value={this.props.senha} 
                            placeholder="Senha" 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaSenha(texto)} 
                            secureTextEntry
                        />
                    </View>

                    <View style={{ flex: 1 }}>
                        <Button 
                            title="Cadastrar" 
                            onPress={() => this.cadastraUsuario()} 
                            color="#115e54" 
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        nome: state.AutenticaoReducer.nome,
        email: state.AutenticaoReducer.email,
        senha: state.AutenticaoReducer.senha
    }
);

export default connect(
    mapStateToProps, 
    { 
        modificaEmail, 
        modificaSenha, 
        modificaNome,
        cadastrarUsuario
    }
)(FormCadastro);
