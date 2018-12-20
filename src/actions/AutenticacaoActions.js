import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

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
            .then(user => cadastraUsuarioSucesso(dispatch))
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

export { modificaEmail, modificaSenha, modificaNome, cadastrarUsuario };
