/**
 * OrganizzatoreController
 *
 * @description :: Server-side logic for managing Organizzatores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    _config: {
        actions: true,
        shortcuts: true,
        rest: true
    },

    aggRist: (req, res) => {
    Ristoratori.find().exec( (err, org) => {
            return res.view('addRist',{addRist: org});

        });
    },

};
