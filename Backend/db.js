import mongoose from 'mongoose';
const MongoURI = 'mongodb+srv://ms29ash:SatoYPkuzsdoBOYZ@amazon.7sw5r.mongodb.net/amazon?retryWrites=true&w=majority'

const connectToMongo = () => {

    mongoose.connect(MongoURI, () => {
        console.log('Connected to Mongo')
    }).catch(err => {
        console.log(err);
    })
}
export default connectToMongo;