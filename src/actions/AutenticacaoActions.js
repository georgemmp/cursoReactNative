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

const cadastrarUsuario = ({ nome, email, senha }) => ({
    type: 'teste'
});

export { modificaEmail, modificaSenha, modificaNome, cadastrarUsuario };
