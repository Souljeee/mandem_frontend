let instance

class LikesStorage{
    likesArray = []

    constructor(){
        if (!instance) instance = thiss
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