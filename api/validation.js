const { check, validationResult } = require('express-validator');
let lengthReq = { min: 1, max: 30 };

exports.articleParams = [
    check('name')
        .isLength(lengthReq)
        .escape(),
    check('content').escape()
];

exports.pageParams = [
    check('name')
        .isLength(lengthReq)
        .escape(),
    check('content').escape()
];

exports.checkValidationErrors = req => {
    if (validationResult(req)) return true;
    return false;
};
