#pragma strict
var RayCastObjecttoCollect : RaycastHit;

var Meat = 0;
var Crossbow = false;
var Arrows = 5;
var Treasure =0;
var CrossBOW : GameObject;
var GameEnd : GameObject;


function Start () {

}


function FixedUpdate(){


}

function LateUpdate () {

RayCastObjecttoCollect = GameObject.Find("RayCaster").GetComponent(RayCasting).hit;

if (Input.GetMouseButton(0)){

if (RayCastObjecttoCollect.collider.name == "BOWPOWERUP"){
//Set the Bow Functionality to active
Crossbow = true;
//Destroy the Pickup
Destroy(RayCastObjecttoCollect.collider.gameObject);
CrossBOW.SetActive(true);
//Turn off the dog for the demo to stop people trying to shoot it
GameObject.Find("dog_doberman").SetActive(false);
}

if (RayCastObjecttoCollect.collider.name == "MEAT"){
//add a meat to the inventory
Meat = Meat+1;

//Destroy Pickup
Destroy(RayCastObjecttoCollect.collider.gameObject);
}

if (RayCastObjecttoCollect.collider.name == "Arrow(Clone)"){
//add an arrow to the inventory
Arrows = Arrows+1;
//Destroy Pickup
Destroy(RayCastObjecttoCollect.collider.gameObject);
}

if (RayCastObjecttoCollect.collider.name == "TREASURE"){
//add an arrow to the inventory
Treasure = Treasure+1;
//Destroy Pickup
Destroy(RayCastObjecttoCollect.collider.gameObject);
if (Treasure >= 1)
GameEnd.SetActive(true);
}


}//End of Mouse(0)
}//End of Late Update