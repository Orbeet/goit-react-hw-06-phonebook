import shortid from 'shortid';

export default obj => {
    return {
        ...obj,
        id: shortid.generate(),
    };
};
