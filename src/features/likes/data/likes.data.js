let instance

export default class LikesStorage{
    likesArray = new Array()

    constructor(){
        if (instance == null) {
            instance = this
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

    getLikesById(id){
        let index = instance.likesArray.findIndex(element => element.id == id)

        return instance.getConcreteLikes(index)
    }
}