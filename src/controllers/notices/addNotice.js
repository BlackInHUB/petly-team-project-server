const cloudUpload = require('../../services/cloudUpload');
const services = require('../../services/notices');

const addNotice = async (req, res) => {
    const {_id: owner} = req.user;
    
    if (req.file) {
        const {path, fieldname, filename} = req.file;

        const {url: photoUrl} = await cloudUpload(path, fieldname, filename);

        const result = await services.addNotice({...req.body, owner, photoUrl});

        return res.status(201).json({
            message: 'Notice created',
            notice: result
        });
    }

    const result = await services.addNotice({...req.body, owner})

    res.status(201).json({
        message: 'Notice created',
        notice: result
    });
};

module.exports = addNotice;