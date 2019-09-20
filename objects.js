//Syntax
//{} curly braces surrounding key/value pairs
//const ObjectVariable holds name of object
//key/value pairs
// Instance variable = Object.create(ObjectVariable)

//Me
const me ={
  name: "Kristyn",
  age: 42,
  email: "kristyn@foo.bar"
}
console.log(me.name);
me['age']=43;
console.log(me.age);
me['place of residence']="Pearl River";
console.log(me['place of residence']);

//Slimer
const monster = {
 name: "Slimer",
 color: "greenish",
 type: "plasm or ghost or something"
}

console.log (monster.name);
monster.type='creature';
monster.age=6;
console.log(`age: ${monster.age} type: ${monster.type}`);
monster.intro=function(){
console.log(`hi I am a ${this.type}`)
}

monster.intro();


//Ogres
const adventurer={
name:"Robin Hood", 
hitpoints:50,
}

const ogre={
hitpoints:50
}

let adventurer_attack=6;
let ogre_attack=0;

do {
ogre_attack=(Math.floor((Math.random() * 10) + 1));

ogre.hitpoints-=adventurer_attack;

if (ogre.hitpoints<0) {
  ogre.hitpoints=0;
  console.log(`Adventurer strikes: ${adventurer_attack}\nogre health: ${ogre.hitpoints}\n`);
  break;
}
  
else{
  console.log(`Adventurer strikes: ${adventurer_attack}\nogre health: ${ogre.hitpoints}\n`);
}
adventurer.hitpoints-=ogre_attack;

if (adventurer.hitpoints<0) {
  adventurer.hitpoints=0;
  console.log(`ogre strikes: ${ogre_attack}\nadventurer health: ${adventurer.hitpoints}\n`)

}
else {
   console.log(`ogre strikes: ${ogre_attack}\nadventurer health: ${adventurer.hitpoints}\n`);
}
}
while(adventurer.hitpoints>0 && ogre.hitpoints>0);
if (ogre.hitpoints>0){
  console.log("Ogre Wins");
}
else {
  console.log("Adventurer Wins!")
}