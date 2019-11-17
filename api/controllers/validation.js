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
    if (validationResult(req).errors.length > 0) {
        console.log(validationResult(req).errors);
        return true;
    }
    return false;
};
