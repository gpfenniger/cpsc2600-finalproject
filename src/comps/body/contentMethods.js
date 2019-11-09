let decideContent = (data, link) => {
    if (data.length > 1) {
        if (link.linktype == 'faction') return searchFaction(data, link);
    } else if (link.linktype == 'article') return singleFaction(data);
};

let searchFaction = (data, link) => {
    return {
        title: link.title,
        single: false,
        content: data.map(block => ({
            name: block.name,
            desc: block.description
        }))
    };
};

let singleFaction = data => {
    return {
        title: data[0].name,
        content: data[0].description,
        single: true
    };
};

export { decideContent, searchFaction, singleFaction };
