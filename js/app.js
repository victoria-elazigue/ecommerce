function Dock(name, description, color, price, image){
  this.name = name;
  this.description = description;
  this.color = color;
  this.price = price;
  this.image = image;
}

 var dockArray = []
//list of objects
 var black = new Dock ("Black iPhone Charging Dock", "Charging Dock Station for iPhone 7/6s/6 Plus", "Black", "$10.90", "img/black.jpg")
 var blue = new Dock ("Blue iPhone Charging Dock", "Charging Dock Station for iPhone 7/6s/6 Plus", "Blue", "$10.90", "img/blue.jpg")
 var gold = new Dock ("Gold iPhone Charging Dock", "Charging Dock Station for iPhone 7/6s/6 Plus", "Gold", "$10.90", "img/gold.jpg")
 var rose = new Dock ("Rose iPhone Charging Dock", "Charging Dock Station for iPhone 7/6s/6 Plus", "Rose", "$10.90", "img/rose.jpg")
 var silver = new Dock("Silver iPhone Charging Dock", "Charging Dock Station for iPhone 7/6s/6 Plus", "Silver", "$10.90", "img/silver.jpg")

//pushes each item into the array
dockArray.push(black)
dockArray.push(blue)
dockArray.push(gold)
dockArray.push(rose)
dockArray.push(silver)

//executes block of code that displays item in gallery
for(i = 0; i < dockArray.length; i++){
  var itemName = document.createTextNode(dockArray[i].name)
  var itemDescription = document.createTextNode("Description: " + dockArray[i].description)
  var itemColor = document.createTextNode("Color: " + dockArray[i].color)
  var itemPrice = document.createTextNode("Price: " + dockArray[i].price)
  var button = document.createTextNode("Buy Now!")
  var itemImage = dockArray[i].image

  var newCol = document.createElement("div")
  var newDiv = document.createElement("div")
  var nameH3 = document.createElement("h3")
  var descriptionP = document.createElement("p")
  var colorh4 = document.createElement("h4")
  var priceh4 = document.createElement("h4")
  var buyNow = document.createElement("button")
  var image = document.createElement("img")

  nameH3.appendChild(itemName)
  descriptionP.appendChild(itemDescription)
  colorh4.appendChild(itemColor)
  priceh4.appendChild(itemPrice)
  buyNow.appendChild(button)
  buyNow.className = "btn btn-primary btn-lg"
  image.src = itemImage
  image.className = "img-responsive"

  newCol.className = "col-sm-4"
  newDiv.className = "product" + i + " thumnail"
  newDiv.appendChild(nameH3)
  newDiv.appendChild(image)
  newDiv.appendChild(descriptionP)
  newDiv.appendChild(colorh4)
  newDiv.appendChild(priceh4)
  newDiv.appendChild(buyNow)
  newCol.appendChild(newDiv)

  document.getElementById("products").appendChild(newCol)
  }
