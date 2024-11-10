const hairConst = ["hair-1.png", "hair-2.png"];
const topConst = ["haut-1.png", "haut-2.png", "haut-3.png", "haut-4.png", "haut-5.png"];
const bottomsConst = ["bas-1.png", "bas-2.png", "bas-3.png", "bas-4.png"];
const shoesConst = ["shoes-1.png", "shoes-2.png", "shoes-3.png", "shoes-4.png"];
const accessoriesConst = ["vide.png", "accessoires-1.png","accessoires-2.png", "accessoires-3.png"];
const glassesConst = ["vide.png", "lunettes-1.png", "lunettes-2.png"];

let hairIndex = 0;
let accessoriesIndex = 0;
let topIndex = 0;
let bottomsIndex = 0;
let shoesIndex = 0;
let glassesIndex = 0

function ChangeHair(sens) {
  console.log("hair has been changed");
  hairIndex = hairIndex + sens;
  if (hairIndex > hairConst.length - 1) hairIndex = 0;
  if (hairIndex < 0) hairIndex = hairConst.length - 1;
  document.getElementById("hair").src = "graphics/" + hairConst[hairIndex];

  console.log(hairIndex);
}

function ChangeGlasses(sens) {
  console.log("glasses has been changed");
  glassesIndex = glassesIndex + sens;
  if (glassesIndex > glassesConst.length - 1) glassesIndex = 0;
  if (glassesIndex < 0) glassesIndex = glassesConst.length - 1;
  document.getElementById("glasses").src = "graphics/" + glassesConst[glassesIndex];

  console.log(glassesIndex);
}

function ChangeAccessories(sens) {
  console.log("accs been changed");
  accessoriesIndex = accessoriesIndex + sens;
  if (accessoriesIndex > accessoriesConst.length - 1) accessoriesIndex = 0;
  if (accessoriesIndex < 0) accessoriesIndex = accessoriesConst.length - 1;
  document.getElementById("accessories").src = "graphics/" + accessoriesConst[accessoriesIndex];

  console.log(accessoriesIndex);
}

function ChangeTop(sens) {
  console.log("top has been changed");
  topIndex = topIndex + sens;
  if (topIndex > topConst.length - 1) topIndex = 0;
  if (topIndex < 0) topIndex = topConst.length - 1;
  document.getElementById("top").src = "graphics/" + topConst[topIndex];

  console.log(topIndex);
}

function ChangeBottoms(sens) {
  console.log("bottoms has been changed");
  bottomsIndex = bottomsIndex + sens;
  if (bottomsIndex > bottomsConst.length - 1) bottomsIndex = 0;
  if (bottomsIndex < 0) bottomsIndex = bottomsConst.length - 1;
  document.getElementById("bottoms").src = "graphics/" + bottomsConst[bottomsIndex];

  console.log(bottomsIndex);
}

function ChangeShoes(sens) {
  console.log("shoes has been changed");
  shoesIndex = shoesIndex + sens;
  if (shoesIndex > shoesConst.length - 1) shoesIndex = 0;
  if (shoesIndex < 0) shoesIndex = shoesConst.length - 1;
  document.getElementById("shoes").src = "graphics/" + shoesConst[shoesIndex];

  console.log(shoesIndex);
}

function Randomize() {
  hairIndex = Math.floor(Math.random()*hairConst.length);
  ChangeHair(0);

  glassesIndex = Math.floor(Math.random()*glassesConst.length);
  ChangeGlasses(0);

  accessoriesIndex = Math.floor(Math.random()*accessoriesConst.length);
  ChangeAccessories(0);

  topIndex = Math.floor(Math.random()*topConst.length);
  ChangeTop(0);

  bottomsIndex = Math.floor(Math.random()*bottomsConst.length);
  ChangeBottoms(0);

  shoesIndex = Math.floor(Math.random()*shoesConst.length);
  ChangeShoes(0);

}
