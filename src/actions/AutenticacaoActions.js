import firebase from 'firebase';

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
    firebase.auth().createUserWithEmailAndPassword(email, senha);
    return {
        type: 'teste'
    };
};

export { modificaEmail, modificaSenha, modificaNome, cadastrarUsuario };
