module.exports = function(list){

    var first = list[0];

    list[0] = list[1];
    list[1] =first;
    return list;
}
