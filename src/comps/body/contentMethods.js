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
        title: data.name,
        content: data.description,
        single: true
    };
};

export default { searchFaction, singleFaction };
