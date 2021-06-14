var DBclient = require('./dbConnect');

/////////////////////////////////////////

function GetUserMedicines(id){
    const query = `select medicine.name from users join takemedicines on users.user_id = takemedicines.user_id join medicine on takemedicines.medicine_id = medicine.medicine_id where users.user_id=${id}`;
    return DBclient.query(query);
}

function GetUsersFriendsIdByType(userId,type){
	const query = `select users.user_id from contacts join users on contacts.friend_id = users.user_id where users.user_type = '${type}' and contacts.user_id = ${userId}`;
	return DBclient.query(query);
}

module.exports.GetUserMedicines = GetUserMedicines;
module.exports.GetUsersFriendsIdByType = GetUsersFriendsIdByType;
