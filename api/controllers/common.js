/**
 * Common Controller Module
 * @module api/controllers/common
 */

/**
 * Finds a list of documents given a model
 * @param {Mongoose.Model} model - document model to search with
 * @param {Object} params - any search requirments, empty if none
 * @return {Promise} the results from a database call or an error
 */
exports.find = (model, params) => {
    return new Promise((resolve, reject) => {
        model
            .find(params)
            .then(docs => resolve(docs))
            .catch(() => reject(new Error('failed to find documents')));
    });
};

/**
 * Finds a single document given a set of paramaters
 * @param {Mongoose.Model} model - document model to search with
 * @param {Object} params - search requirments
 * @return {Promise} the result of a search or the first in a list of found documents
 */
exports.findOne = (model, params) => {
    return new Promise((resolve, reject) => {
        model
            .findOne(params)
            .then(doc => resolve(doc))
            .catch(() => reject(new Error('failed to find document')));
    });
};

/**
 * Creates or updates a document in a provided collection
 * and sends a response to the front end
 * @param {Mongoose.Document} document - a document to save
 * @param {Object} res - the routes response object
 */
exports.save = (document, res) => {
    document
        .save()
        .then(() => res.status(201).send(true))
        .catch(() => {
            console.log(new Error('failed to save'));
            res.status(400).send(false);
        });
};

/**
 * Deletes a single document given parameters
 * @param {Mongoose.Model} model - the collection to delete from
 * @param {Object} params - parameters to find a document1
 * @param {Object} res - the route response object
 */
exports.remove = (model, params, res) => {
    model
        .deleteOne(params)
        .then(() => res.send(true))
        .catch(() => {
            console.log(new Error('failed to delete document'));
            res.status(404).send(false);
        });
};

/**
 * Updates a document given a model
 * @param {Mongoose.Model} model - the collection to update
 * @param {Object} params - the parameters to find a document
 * @param {Object} modifier - object of updated properties
 * @param {Object} res - the route response object
 */
exports.update = (model, params, modifier, res) => {
    model
        .updateOne(params, modifier)
        .then(() => res.status(200))
        .catch(err => {
            console.log(err);
            res.status(204);
        });
};
