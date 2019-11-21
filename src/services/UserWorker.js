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

let checkkey = key => {
    return new Promise((resolve, reject) => {
        axios.post('/admin', { key: key }).then(result => {
            if (result) resolve(result);
            else reject(new Error('Failed to check login status'));
        });
    });
};

let logout = key => {
    axios
        .post('/logout', { key: key })
        .catch(() => console.log(new Error('Failed to Logout')));
};

export { checkkey, login, logout };
