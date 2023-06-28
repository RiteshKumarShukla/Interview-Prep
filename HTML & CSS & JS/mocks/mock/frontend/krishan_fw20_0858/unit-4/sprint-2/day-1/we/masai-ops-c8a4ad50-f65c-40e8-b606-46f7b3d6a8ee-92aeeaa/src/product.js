function Product(name, brand,price,desc) {

  this.name=name;
  this.brand=brand;
  this.price=price;
  this.description=desc;
  this.sold=false;

  // Complete the constructor function
}

Product.prototype.changePrice=function (np){
   this.price=np;
}

Product.prototype.toggleStatus = function (){
  this.sold=!this.sold;
}

// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;
