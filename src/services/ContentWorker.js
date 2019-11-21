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

let postArticle = (title, content, tags, categories, key) => {
    axios
        .post('/api/article', {
            title: title,
            content: content,
            tags: tags,
            categories: categories,
            key: key
        })
        .catch(() => console.log(new Error('Failed to save article')));
};

let postPage = (title, content, key) => {
    axios
        .post('/api/page', {
            title: title,
            content: content,
            key: key
        })
        .catch(() => console.log(new Error('Failed to save page')));
};

export { getLink, postArticle, postPage };
