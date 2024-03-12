const { default: mongoose } = require("mongoose");

const connectMongoDB = () => {
    main().catch(err => console.log(err));
    async function main() {
        const db = 'mongodb+srv://trinhhienngo306:trinhhienngo306@cluster0.1arvben.mongodb.net/StudentMng';
        await mongoose.connect(db);
        console.log('Connected');
    }
}

module.exports = { connectMongoDB };

