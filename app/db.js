const DBPORT = '27017';
const DBNAME = 'server-msg';
const DBUSER = 'admin';
const DBPWD = '4321';
const DBHOST = '127.0.0.1';
const uri = 'mongodb://'+ DBUSER+':'+DBPWD+'@'+DBHOST+':'+DBPORT + '/'+DBNAME;
module.exports = {
    'url'	: uri
};
