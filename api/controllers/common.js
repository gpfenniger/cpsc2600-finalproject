/**
 * Common Controller Module
 * This module wraps common Mongoose API calls to
 * avoid code repition
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
 * Processes a search request and sends result as response
 * @param {Mongoose.Model} model - collection to search
 * @param {Object} params - search conditions object
 * @param {Object} res - reponse route object
 * @param {Object} next - next route object
 */
exports.get = (model, params, res, next) => {
    this.find(model, params)
        .then(docs => res.status(200).send(docs))
        .catch(() => {
            res.status(400);
            next(new Error('Failed to Find Documents'));
        });
};

/**
 * Finds a single document based on a set of parameters and sends as response
 * @param {Mongoose.Model} model - collection to search
 * @param {Object} params - search conditions object
 * @param {Object} res - reponse route object
 * @param {Object} next - next route object
 */
exports.getOne = (model, params, res, next) => {
    this.findOne(model, params)
        .then(doc => res.status(200).send(doc))
        .catch(() => {
            res.status(400);
            next(new Error('Failed to Find Document'));
        });
};

/**
 * Creates or updates a document in a provided collection
 * and sends a response to the front end
 * @param {Mongoose.Document} document - a document to save
 * @param {Object} res - the routes response object
 * @param {Object} next
 */
exports.save = (document, res, next) => {
    document
        .save()
        .then(() => res.status(201))
        .catch(() => {
            res.status(400);
            next(new Error('Failed to Save'));
        });
};

/**
 * Deletes a single document given parameters
 * @param {Mongoose.Model} model - the collection to delete from
 * @param {Object} params - parameters to find a document1
 * @param {Object} res - the route response object
 * @param {Object} next
 */
exports.remove = (model, params, res, next) => {
    model
        .deleteOne(params)
        .then(() => res.status(200))
        .catch(() => {
            res.status(404);
            next(new Error('Failed to Delete Document'));
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
        .catch(() => {
            res.status(204);
            next(new Error('Failed to Update - No Content'));
        });
};
