function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome
    this.telefoneCelular = telefoneCelular
    this.email = email
    this.endereco = endereco

    Object.defineProperty(this, 'descricao', {
    get: function () {
        return (
            " \n" +
            "Informações do cliente:\n" +
            this.nome + "\n" +
            "------------------------\n" +
            "------------------------\n" +
            this.telefoneCelular.descricao +
            "----------------------\n" +
            this.endereco.descricao +
            "-----------------------\n"
            );
        }
    });

    Object.defineProperty(this, 'getName', {
        get: function () {
            return this.nome
        }
    });

    Object.defineProperty(this, 'setName', {
        set: function (value) {
            this.nome = value.toLowerCase()
        }
    });

    Object.defineProperty(this, 'setMail', {
        set: function (value) {
            this.email = value.toLowerCase()
        }
    });
}

function Telefone(ddd, numero) {
    this.ddd = ddd
    this.numero = numero

    Object.defineProperty(this, 'descricao', {
        get: function () {
            return 'DDD: ' + this.ddd + '\nNumero: ' + this.numero + '\n'
        }
    });

    Object.defineProperty(this, 'setDDD', {
        set: function (value) {
            this.ddd = value
        }
    });

    Object.defineProperty(this, 'setNum', {
        set: function (value) {
            this.numero = value
        }
    });
}

function Endereco(uf, cidade, rua, num) {
    this.uf = uf
    this.cidade = cidade
    this.rua = rua
    this.num = num

    Object.defineProperty(this, 'setRua', {
        set: function (value) {
            this.rua = value.toLowerCase()
        }
    });

    Object.defineProperty(this, 'setNum', {
        set: function (value) {
            this.num = value
        }
    });

    Object.defineProperty(this, 'setCidade', {
        set: function (value) {
            this.cidade = value.toLowerCase()
        }
    });

    Object.defineProperty(this, 'setEstado', {
        set: function (value) {
            this.uf = value.toUpperCase()
        }
    });

    Object.defineProperty(this, 'descricao', {
    get: function () {
        return (
            "Endereço:\n" +
            "Rua: " + this.rua + "\n" +
            "Número: " + this.num + "\n" +
            "Cidade: " + this.cidade + "\n" +
            "Estado: " + this.uf + "\n\n"
        );
    }
});
}

let telefone1 = new Telefone('11', '999999999')
let telefone2 = new Telefone('21', '998877665')
let telefone3 = new Telefone('31', '987654321')
let telefone4 = new Telefone('51', '965432187')

let endereco1 = new Endereco('SP', 'São Paulo', 'Av. Paulista', 987)
let endereco2 = new Endereco('RJ', 'Rio de Janeiro', 'Rua das Laranjeiras', 500)
let endereco3 = new Endereco('MG', 'Belo Horizonte', 'Av. Afonso Pena', 1234)
let endereco4 = new Endereco('RS', 'Porto Alegre', 'Rua da Praia', 45)

let cli1 = new Cliente('Carlos Conrado Heinz', telefone1, 'carlos.conrado@app.com', endereco1)
let cli2 = new Cliente('Mariana Silva Costa', telefone2, 'marisilva123@gmail.com', endereco2)
let cli3 = new Cliente('Yuri Cardoso Lopes', telefone3, 'yuriclopess@gmail.com', endereco3)
let cli4 = new Cliente('Bruno Oliveira Ramos', telefone4, 'oliveirabruno42@gmail.com', endereco4)

let lista = [cli1, cli2, cli3, cli4]

function order(lista) {
    return lista.sort(function (a, b) {
        return a.nome.toLowerCase().localeCompare(b.nome.toLowerCase())
    })
}

let cliOrdem = order(lista)

cliOrdem.forEach(cliente => {
    console.log(cliente.descricao)
})
