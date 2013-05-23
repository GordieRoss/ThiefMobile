#pragma strict
var GUIMeat : GameObject;
var counter = 0;
var DogEatTime = 60;

var Inv : GameObject;

var RayCastObjectTapDog : RaycastHit;

function Start () {

}

function LateUpdate () {
counter = counter-1;

RayCastObjectTapDog = GameObject.Find("RayCaster").GetComponent(RayCasting).hit;
//Debug.Log(RayCastObjectTapDog.collider.name);

if (Input.GetMouseButtonDown(0)&& Inv.gameObject.GetComponent(Inventory).Meat >= 1 && GameObject.Find("DOG").transform.position.z >= GameObject.Find("DogEndPosition").transform.position.z){

if (RayCastObjectTapDog.collider.name == "DOGCollision"){
Inv.gameObject.GetComponent(Inventory).Meat = Inv.gameObject.GetComponent(Inventory).Meat -1;

GUIMeat.SetActive(true);
GameObject.Find("DOGSFX").SetActive(false);

counter = DogEatTime;
//Destroy the Pickup
Destroy(RayCastObjectTapDog.collider.gameObject);
}

}//End Mouse Condition
if (counter <=0){
counter =0;
GUIMeat.SetActive(false);
}

}



