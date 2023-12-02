module.exports = function(value) {
    res = { type: 'success' };

    if (value == 1) {
        res.message = 'Cliente Cadastrado com Sucesso!'
    }
    
    if (value == 2) {
        res.type = 'danger'
        res.message = 'Não foi possível cadastrar o Cliente!'
    }

    if (value == 3) {
        res.message = 'Cliente Alterado com Sucesso!'
    }

    if (value == 4) {
        res.type = 'danger'
        res.message = 'Não foi possível alterar o Cliente!'
    }

    if (value == 5) {
        res.message = 'Cliente removido com Sucesso!'
    }

    if (value == 6) {
        res.type = 'danger'
        res.message = 'Não foi possível remover o Cliente!'
    }

    return res;
}