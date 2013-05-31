#pragma strict
var RayCastObjecttoCollect : RaycastHit;
var TextCounter = 60;
var Meat = 0;
var Crossbow = false;
var Arrows = 5;
var Treasure =0;
var CrossBOW : GameObject;
var GameEnd : GameObject;
var counter = 0;
var PickUpGUI : GameObject;
var str = "empty";
var Meattext :  GameObject;
var Arrowtext : GameObject;
var Treasuretext : GameObject;
var TreasureTotal = 0;

function Start () {
TreasureTotal = GameObject.FindGameObjectsWithTag("Treasure").Length;
}


function FixedUpdate(){
//Display Gui text for a set amount of time.
DisplayGUIPickups();

}

function LateUpdate () {

RayCastObjecttoCollect = GameObject.Find("RayCaster").GetComponent(RayCasting).hit;

if (Input.GetMouseButtonDown(0)){


if (RayCastObjecttoCollect.collider.name == "BOWPOWERUP"){
//Set the Bow Functionality to active
Crossbow = true;
//Destroy the Pickup
Destroy(RayCastObjecttoCollect.collider.gameObject);
CrossBOW.SetActive(true);
//Turn off the dog for the demo to stop people trying to shoot it
GameObject.Find("dog_doberman").SetActive(false);
counter = TextCounter;
str = "Crossbow";
}

if (RayCastObjecttoCollect.collider.name == "MEAT"){
//add a meat to the inventory
Meat = Meat+1;

//Destroy Pickup
Destroy(RayCastObjecttoCollect.collider.gameObject);
counter = TextCounter;
str = "Meat";
}

if (RayCastObjecttoCollect.collider.name == "Arrow(Clone)"){
//add an arrow to the inventory
Arrows = Arrows+1;
//Destroy Pickup
Destroy(RayCastObjecttoCollect.collider.gameObject);
counter = TextCounter;
str = "Arrow";
}

if (RayCastObjecttoCollect.collider.name == "TREASURE"){
//add an arrow to the inventory
Treasure = Treasure+1;
//Destroy Pickup
Destroy(RayCastObjecttoCollect.collider.gameObject);

counter = TextCounter;
str = "Treasure";

if (Treasure >= TreasureTotal)
GameEnd.SetActive(true);


}


}//End of Mouse(0)

PickUpGUI.gameObject.guiText.text = str;

}//End of Late Update

function DisplayGUIPickups(){
counter = counter -1;
if (counter <= 0){
counter = 0;
//PickUpGUI.gameObject.guiText.font.material.color.a = 0;
}


if (counter >0){
PickUpGUI.SetActive (true);
//PickUpGUI.gameObject.guiText.font.material.color.a = (255/counter);
}
else{
PickUpGUI.SetActive (false);
}

//Update Inventory strings
Meattext.GetComponent(ScalableText).str = Meat.ToString();
Arrowtext.GetComponent(ScalableText).str = Arrows.ToString();
Treasuretext.GetComponent(ScalableText).str = Treasure.ToString();

}