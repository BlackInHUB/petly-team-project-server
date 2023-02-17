const services = require('../../services/pets');
const cloudUpload = require('../../services/cloudUpload');

const addpet = async (req, res) => {
    const {_id: owner} = req.user;
    if (req.file) {
        const {path, fieldname, filename} = req.file;
        const {url: photoUrl} = await cloudUpload(path, fieldname, filename);

        const result = await services.addPet({...req.body, photoUrl, owner});

        return res.status(201).json({
            message: 'Pet added',
            pet: result
        });
    };

    const result = await services.addPet({...req.body, owner});
    
    res.status(201).json({
        message: 'Pet added',
        pet: result
    });
};

module.exports = addpet;