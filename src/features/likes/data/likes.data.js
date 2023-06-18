let instance

export default class LikesStorage{
    likesArray

    constructor(){
        if (instance == null) {
            instance = this
            instance.likesArray = []
        }
        return instance
    }

    addLikes(like){
        instance.likesArray.push(like)
    }

    getAllLikes(){
        return instance.likesArray
    }

    getConcreteLikes(position){
        return instance.likesArray[position]
    }
}