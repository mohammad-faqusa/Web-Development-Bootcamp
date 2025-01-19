function BellBoy (name , age , city ) {
    this.name = name ; 
    this.age = age ; 
    this.city = city ; 
    this.info = function () {
        return this.name + this.age + this.city ; 
    }

}


var bellBoy1 = new BellBoy("Mohammad", 22 , "hebron") ; 

console.log(bellBoy1) ; 

console.log(bellBoy1.info()) ; 