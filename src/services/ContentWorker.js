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

let postArticle = (
    title,
    content,
    tags,
    categories,
    key,
    updating,
    newTitle
) => {
    let document = {
        name: title,
        content: content,
        tags: tags,
        categories: categories,
        key: key
    };
    if (updating) {
        if (newTitle) document.newTitle = newTitle;
        axios.put(document);
    } else {
        axios
            .post('/api/article', document)
            .catch(() => new Error('Failed to save article'));
    }
};

let postPage = (title, content, key, updating, newTitle) => {
    let document = {
        title: title,
        content: content,
        key: key
    };
    if (updating) {
        if (newTitle) document.newTitle = newTitle;
        axios.put('/api/page', document);
    } else {
        axios
            .post('/api/page', document)
            .catch(() => console.log(new Error('Failed to save page')));
    }
};

export { getLink, postArticle, postPage };
