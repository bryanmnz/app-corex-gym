module.exports = {
    ENVIRONMENT: process.env.NODE_ENV || 'dev',
    MONGODB: process.env.MONGODB || 'mongodb://localhost:27017/appgym',
    GENERIC_RESPONSE:{code:0,message:'success', body:null}
}