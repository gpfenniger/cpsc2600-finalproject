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

let getPages = () => {
    return new Promise((resolve, reject) => {
        axios
            .get('/api/page')
            .then(result => {
                resolve(
                    result.data.map(page => ({
                        value: page.name,
                        href: `/api/page/${page.slug}`
                    }))
                );
            })
            .catch(err => reject(err));
    });
};

let postArticle = (title, content, tags, categories, key, updating, slug) => {
    let document = {
        name: title,
        content: content,
        tags: tags,
        categories: categories,
        key: key
    };
    if (updating) {
        if (slug) document.slug = slug;
        axios.put('/api/article', document);
    } else {
        axios
            .post('/api/article', document)
            .catch(() => new Error('Failed to save article'));
    }
};

let postPage = (title, content, key, updating, slug) => {
    let document = {
        name: title,
        content: content,
        key: key
    };
    if (updating) {
        console.log(`UPDATING: ${slug}`);
        if (slug) document.slug = slug;
        axios.put('/api/page', document);
    } else {
        axios
            .post('/api/page', document)
            .catch(() => console.log(new Error('Failed to save page')));
    }
};

export { getLink, postArticle, postPage, getPages };
