#pragma strict
var hitcounter = 0;
var currentObject = null;

var DoorOpen = 0;
var DoorSpeed = 0.100;
var hit : RaycastHit;

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

if(hit.collider.tag == "Handle")
gameObject.GetComponent(GUIText).guiText.text = GameObject.Find("Hinge"+hit.collider.name).transform.localEulerAngles.y.ToString() + " " + DoorOpen.ToString();


}

}


