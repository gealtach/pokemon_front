const validateUrl = (URL) => {
    const regex = new RegExp(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/);
    return regex.test(URL);
};


export const validate = (info) => {
    let error = {};

    if(info.name.length > 0 && info.name.length < 4) error.name = 'The name must be longer than 4 letters';
    if(info.name.length > 15) error.name = 'The name cannot be longer than 15 letters';
    if(!info.name) error.name = 'You must to  put a name';
    if(isNaN(info.defense)) error.defense = 'Must be a number';
    if(info.defense <= 0) error.defense = 'The defense is needed';
    if(isNaN(info.attack)) error.attack = 'Must be a number';
    if(info.attack <= 0) error.attack = 'The attack is needed';
    if(isNaN(info.height)) error.height = 'Must be a number';
    if(info.height <= 0) error.height = 'The height is needed';
    if(isNaN(info.weight)) error.weight = 'Must be a number';
    if(info.weight <= 0) error.weight = 'The weight is needed';
    if(isNaN(info.speed)) error.speed = 'Must be a number';
    if(info.speed <= 0) error.speed = 'The speed is needed';
    if(isNaN(info.hp)) error.hp = 'Must be a number';
    if(info.hp <= 0) error.hp = 'The hp is needed';
    if(!(validateUrl(info.image))) error.image = 'Unsupported format';
    if(info.image === '') error.image = 'Must a image';
    return error;
}