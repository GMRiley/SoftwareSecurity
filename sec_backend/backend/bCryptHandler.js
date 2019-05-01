const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashGen = async (password) => {
    return bcrypt.hash(password, saltRounds);
}
const hashCompare = async (password, hash) => {
    return bcrypt.compare(password, hash);
}
const main = async () => {
    const hash = await hashGen(test);
    const result = await hashCompare(test, hash);
    console.log(result)
}
main();