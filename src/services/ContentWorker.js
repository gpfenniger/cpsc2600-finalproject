import axios from 'axios';

let getLink = link => {
    return new Promise((resolve, reject) => {
        axios
            .get(link)
            .then(result => {
                resolve(result);
            })
            .catch(() => reject(new Error(`Failed to get '${link}'`)));
    });
};

export { getLink };
