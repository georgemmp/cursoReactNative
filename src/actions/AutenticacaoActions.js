const modificaEmail = (texto) => ({
    type: 'modifica_email',
    payload: texto
});

const modificaSenha = (texto) => ({
    type: 'modifica_senha',
    payload: texto
});

export { modificaEmail, modificaSenha };
