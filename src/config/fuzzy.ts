import * as fuzzy from 'fuzzy';
const data = require('../models/dataset.json')
const options = { extract: (el: any) => { return el.name } };

export const search = async (term: any) => {
    const results = fuzzy.filter(term, data.drugs, options);
    const matches = results.map((el) => { return el });
    return matches;
}