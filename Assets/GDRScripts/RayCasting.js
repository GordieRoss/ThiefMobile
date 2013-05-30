#pragma strict
var hitcounter = 0;
var currentObject = null;

var DoorOpen = 0;
var DoorSpeed = 0.100;
var hit : RaycastHit;

// Object containing DoorLock System
var DoorLock : GameObject;
//Object Containing Character Stuff
var CharacterStuff : GameObject;
var CharacterStuffMobile : GameObject;
var QUITGUI : GameObject;
var Inventory : GameObject;

function Start () {

}

function Update () {


var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
//var hit : RaycastHit;

if (Physics.Raycast (ray, hit, 3)) {
    Debug.DrawLine (ray.origin, hit.point);
     

//Opening Doors/////////////////////////////////////////////////
//Determine if the door is open or closed when a handle is tried
if(hit.collider.tag == "Handle"){


if (Input.GetMouseButtonDown(0)){

if (GameObject.Find("Hinge"+hit.collider.name).transform.localEulerAngles.y >= 269){
DoorOpen = 1;
}

if (GameObject.Find("Hinge"+hit.collider.name).transform.localEulerAngles.y <= 1){
DoorOpen = 0;
}

//Open and close the door
if (DoorOpen == 0){
GameObject.Find("Hinge"+hit.collider.name).transform.localEulerAngles.y = 270;
}
if (DoorOpen == 1){
GameObject.Find("Hinge"+hit.collider.name).transform.localEulerAngles.y = 0;
}


}


}
Debug.Log(hit.collider.tag);

if(hit.collider.tag == "Handle" || hit.collider.tag == "LockedDoor" )
gameObject.GetComponent(GUIText).guiText.text = GameObject.Find("Hinge"+hit.collider.name).transform.localEulerAngles.y.ToString() + " " + DoorOpen.ToString();


if(hit.collider.tag == "LockedDoor"){

if (Input.GetMouseButtonDown(0)){
//turn off inventory access
Inventory.SetActive(false);

//Set Door Pick Stuff to active
DoorLock.SetActive(true);

//Set Character Stuff to not active
CharacterStuff.SetActive(false);
CharacterStuffMobile.SetActive(false);

}

}

if(hit.collider.name == "QUIT"){

if (Input.GetMouseButtonDown(0)){
Inventory.SetActive(false);
QUITGUI.SetActive(true);
GameObject.Find("Player").GetComponent(FirstPersonControl).enabled = false;

}

}

if(hit.collider.name == "FlourZone"){

if (Input.touchCount >0){

GameObject.Find("FlourPlume(Clone)").GetComponent(ParticleEmitter).particleEmitter.maxEmission = GameObject.Find("FlourPlume(Clone)").GetComponent(ParticleEmitter).particleEmitter.maxEmission -0.01;
GameObject.Find("FlourPlume(Clone)").GetComponent(ParticleEmitter).particleEmitter.minEmission = GameObject.Find("FlourPlume(Clone)").GetComponent(ParticleEmitter).particleEmitter.minEmission -0.01;
}

}


}





}


