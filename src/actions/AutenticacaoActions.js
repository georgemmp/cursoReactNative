import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

const modificaEmail = (texto) => ({
    type: 'modifica_email',
    payload: texto
});

const modificaSenha = (texto) => ({
    type: 'modifica_senha',
    payload: texto
});

const modificaNome = (texto) => ({
    type: 'modifica_nome',
    payload: texto
});

const cadastrarUsuario = ({ nome, email, senha }) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                const emailB64 = b64.encode(email);
                firebase.database().ref(`/contatos/${emailB64}`)
                    .push({ nome })
                    .then(value => cadastraUsuarioSucesso(dispatch));
            })
            .catch(error => cadastraUsuarioErro(error, dispatch));
    };
};

const cadastraUsuarioSucesso = (dispatch) => {
    dispatch({
        type: 'cadastroUsuarioSucesso'
    });

    Actions.formBoasVindas();
};

const cadastraUsuarioErro = (error, dispatch) => {
    dispatch({
        type: 'cadastroUsuarioErro',
        payload: error.message
    });
};

const autenticarUsuario = (email, senha) => ({
    type: 'type'
});

export { 
    modificaEmail, 
    modificaSenha, 
    modificaNome, 
    cadastrarUsuario,
    autenticarUsuario
};
