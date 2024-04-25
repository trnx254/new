import mongoose from 'mongoose'

const favSchema = new mongoose.Schema({
    
})

const Fav = mongoose.models.users || mongoose.model("users", favSchema)

export default User