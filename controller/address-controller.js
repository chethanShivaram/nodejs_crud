const Address = require('../model/models');

/* Adding a User to AddressBook */
exports.createOne = async (req, res) => {
    let newAddress = new Address({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        place: req.body.place
    });
    try {
        const add = await newAddress.save();
        res.json(add);
    } catch (err) {
        res.send(err);
    }
};

/* Adding multiple user concurrently */
exports.createMany = async (req, res) => {
    let newAddress = new Address({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        place: req.body.place
    });
    try {
        const add = await newAddress.save();
        res.json(add);
    } catch (err) {
        res.send(err);
    }
};

/* find all */
exports.findAll = async (req, res) => {
    try {
        const all = await Address.find();
        res.json(all);
    } catch (err) {
        res.send(err);
    }
};

/* find by id */
exports.findById = async (req, res) => {
    try {
        const byId = await Address.findById(req.params.id);
        if (byId) {
            res.json(byId);
        } else {
            res.json('No data found');
        }
    } catch (err) {
        res.send(err);
    }
};

/* find by any field */
exports.findByAnyField = async (req, res) => {
    const paramValue = req.params.value;
    try {
        let byName = await Address.find({ name: paramValue });
        res.json(byName);
    } catch (err) {
        res.send(err);
    }
};

/* find by any 2 field */
exports.findByAny2Field = async (req, res) => {
    const nameValue =  req.params.name;
    const placeValue = req.params.place;
    try {
        let data = await Address.find({ name: nameValue, place: placeValue });
        res.json(data);
    } catch (err) {
        res.send(err);
    }
};
/* patch - to add any new column*/
exports.addNewField = async (req, res) => {
    try {
        const edit = await Address.findById(req.params.id);
        //subscrin -> new column
        edit.subscrib = req.body.subscrib;
        const saveColumn = await edit.save();
        res.json(saveColumn);
    } catch (error) {
        res.json(error)
    }
};

/* update one record by any field*/
exports.updateOne = async (req, res) => {
    try {
        const update = await Address.findOneAndUpdate({_id: req.body._id}, {$set: req.body});
        if (update) {
            res.json(update);
        } else {
            res.json('Not updated successfully');
        }
    } catch (err) {
        res.json(err);
    }
};

// /* update all record - specific field value*/
// exports.updateAll = async (req, res) => {
//     try {
//         const updateAll = await Address.updateMany({},{name : req.params.name});
//         if (updateAll) {
//             res.json(updateAll);
//         } else {
//             res.json('Not updated successfully');
//         }
//     } catch (err) {
//         res.json(err);
//     }
// };

/* update all record - specific field value*/
exports.updateAll = async (req, res) => {
    try {
        let array = new Array();
        array = req.body;
        array.forEach(obj => {
            console.log(obj);
            const updateAll = Address.updateOne({_id: obj._id}, {$set: {name: obj.name}});
            if (updateAll) {
                res.json(updateAll);
            } else {
                res.json('Not updated successfully');
            }
        });
    } catch (err) {
        res.json(err);
    }
};


/* delete one record by any field*/
exports.deleteOne = async (req, res) => {
    try {
        let delById = await Address.deleteOne({ _id: req.params.id });
        res.json(delById);
    } catch (err) {
        res.json(err);
    }
};

/* delete all */
exports.deleteAll = async (req, res) => {
    try {
        const all = await Address.deleteMany();
        res.json(all);
    } catch (err) {
        res.send(err);
    }
};