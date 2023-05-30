function Artist(name, skill, profession){
    this.name=name,
    this.skill=skill,
    this.profession=profession;
}
Artist.prototype.getProfession = function (){
 return this.profession
}
var artistsObject = Object.create(Artist)

Artist.prototype.print = function (){
    return `I am ${this.name}`
}


// Do not change this
export {Artist, artistsObject};
