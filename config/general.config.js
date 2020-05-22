module.exports = {
    ENVIRONMENT: process.env.NODE_ENV || 'dev',
    MONGODB: process.env.MONGODB || 'mongodb://localhost:27017/appgym',
    //mongodb+srv://arkix:8xpveP2DHJ0Laom8@cluster0-bovde.mongodb.net/test?retryWrites=true&w=majority
    GENERIC_RESPONSE:{code:0,message:'success', body:null}
}