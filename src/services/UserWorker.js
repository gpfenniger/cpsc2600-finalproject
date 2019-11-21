import axios from 'axios';

let login = (username, password) => {
    return new Promise((resolve, reject) => {
        axios
            .post('/login', {
                username: username,
                password: password
            })
            .then(result => {
                if (result.data.key != undefined) resolve(result.data.key);
                else reject(new Error('login failed'));
            });
    });
};

export { login };
