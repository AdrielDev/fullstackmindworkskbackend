const mongoose = require('mongoose');
const User = mongoose.model('User');
const axios = require('axios');

module.exports = {
    //login
    async login(req, res) {
        const username = await req.params.username;
        const validation = await User.find({ login: username });
        if (validation.length === 0) {
            res.json({ 'msg': 0 });
        } else {
            res.json({ 'msg': 1 });
        }
    },

    async showUserById (req, res) {
        const userId = await req.params.id;
        const result = await User.findById(userId);
        res.json(result);
        //console.log(userId);
    },

    async persistUser(req, res) {
        const { userGit, sexo, linguagem, experiencia} = req.body;
        const response = await axios.get(`https://api.github.com/users/${userGit}`)
        const { login, name, avatar_url, company, public_repos, followers, bio } = response.data;
        const payload = await User.create({
            login,
            name,
            avatar_url,
            company,
            public_repos,
            followers,
            bio,
            sexo,
            linguagem,
            experiencia
        })
        res.json(payload);
    },

    async listUsers(req, res) {
        const response = await User.find();
        res.json(response);
    },

    async getUserGit(req, res, next) {
        const response = await axios.get("https://api.github.com/users/adrieldev");
        /*const {login, avatar_url, company, public_repos, followers, bio:biografia, created_at} = response.data;
        const obJson = {login, avatar_url, company, public_repos, followers, biografia};
        const aux = "Só é permitido usuários com data de criação anterior à 2020";
        const yearCreate = created_at.substring(0,4)
        req.body = obJson;
        yearCreate < 2020 ? await User.create(req.body) : aux;
        console.log(obJson);*/
        res.json(response.data);
    },

    async gitUser2020(req, res) {
        const response = await axios.get('https://api.github.com/users/leonardogandrade');
        const { login, created_at } = response.data;
        const created_at_date = new Date(Date.parse(created_at));

        if (created_at_date.getFullYear() < 2020) {
            res.json({
                "msg": "usuário antigo"
            })
        } else {
            res.json({
                "msg": "usuário muito novo"
            })
        }

    }

    //Persisitr no banco usuários do Git;

    //Persistir no banco usuário do Git se criado antes de 2020;

    //Novo backend 1: [latitude e longitude] 2: [latitude, longitude] => distancia;
}