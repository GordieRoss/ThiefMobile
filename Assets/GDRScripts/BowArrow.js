#pragma strict
var Arrow : GameObject;
var PretendArrow :GameObject;
var ArrowReloadFixedFrames = 60;
var ReloadCounter = 0;
var BowPower = 10;
var RayCastObjectFromMouse : RaycastHit;
var BowSound: AudioSource;

function Start () {
ReloadCounter = ArrowReloadFixedFrames;
}

function FixedUpdate(){
//Decrement the reload counter
ReloadCounter = ReloadCounter-1;

}

//Made it a lateupdate, so it has the latest collider to deal with.. so it does not fire an arrow by using the previously hit(raycast)collider 
function LateUpdate () {


RayCastObjectFromMouse = GameObject.Find("RayCaster").GetComponent(RayCasting).hit;

//Check the Raycast Object name
if (Input.GetMouseButtonDown(0) && RayCastObjectFromMouse.collider.name == "BowMeshHitZone" && ReloadCounter <0 && GameObject.Find("INVENTORY").GetComponent(Inventory).Arrows>0){
GameObject.Find("INVENTORY").GetComponent(Inventory).Arrows = GameObject.Find("INVENTORY").GetComponent(Inventory).Arrows-1;

//Reset the Reload counter
ReloadCounter = ArrowReloadFixedFrames;

//Hide Arrow to make it look like it was fired
PretendArrow.SetActive(false);

var ArrowClone = Instantiate (Arrow, gameObject.transform.position, gameObject.transform.rotation);
ArrowClone.SetActive(true);
//ArrowClone.collider.isTrigger = false;
ArrowClone.rigidbody.isKinematic = false;
ArrowClone.rigidbody.AddRelativeForce(0,0,BowPower,ForceMode.Impulse);
BowSound.PlayOneShot(BowSound.clip,BowSound.volume);
Handheld.Vibrate ();


}
//Debug.Log(RayCastObjectFromMouse.collider.name);
//Instaniate an arrow at relative to the Arrow Emitter Cube
//apply a force relative to the Arrow emitter object to give the arrow flight
//attach the arrow to the given target at the place it collided

//Show Arrow so that player knows the bow has reloaded
if(ReloadCounter < 0){
if (GameObject.Find("INVENTORY").GetComponent(Inventory).Arrows<0){
PretendArrow.SetActive(false);
}
if (GameObject.Find("INVENTORY").GetComponent(Inventory).Arrows >0){
PretendArrow.SetActive(true);
}

}


}
