module.exports = {
    ENVIRONMENT: process.env.NODE_ENV || 'dev',
    MONGODB: process.env.MONGODB || 'mongodb+srv://arkix:Colombia20151@cluster0-bovde.mongodb.net/appgym?retryWrites=true&w=majority',
    ///mongodb+srv://arkix:8xpveP2DHJ0Laom8@cluster0-bovde.mongodb.net/test?retryWrites=true&w=majority
    GENERIC_RESPONSE:{code:0,message:'success', body:null},
    APP_ROLE:process.env.MONGODB || ['ADMIN_ROLE', 'USER_ROLE', 'GYM_ROLE','TRAINER_ROLE']
}