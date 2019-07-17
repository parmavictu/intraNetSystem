module.exports = app => {
    function existsOrError(value, msg) {
        if (!value) throw msg
        if (Array.isArray(value) && value.length === 0) throw msg
        if( typeof value === 'string' && !value.trim()) throw msg
    }

    function notExistsOrError(value, msg) {
        try{
            existsOrError(value,msg)
        } catch(msg){
            return
        }
        throw msg
    }

    function equalsOrError(valueA, valueB, msg) {
        if (valueA !== valueB) throw msg
    }

    function strongPasswordOrError(value, msg){
        const reg = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
        if(!reg.test(value)) throw msg
    }
    function validateEmail(value,msg) {
        const reg = new RegExp("/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i")
        if(!reg.test(value)) throw msg
    }
    return {existsOrError, notExistsOrError, equalsOrError, validateEmail, strongPasswordOrError }
}