import mongoose from 'mongoose'

const tweetSchema = mongoose.Schema({
    content: {
        type: String,
        require: true,
        max: [250, 'Tweet cannot be more than 250 characters']
    },
    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ]
},{timestamps: true})


const Tweet = mongoose.model('Tweet',tweetSchema)

export default Tweet