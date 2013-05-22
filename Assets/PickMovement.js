var RayCastObjectFromMouseLock : RaycastHit;
var movespeed = 0.01;


function Start () {

}

function FixedUpdate(){

}

//Made it a lateupdate, so it has the latest collider to deal with.. so it does not fire an arrow by using the previously hit(raycast)collider 
function LateUpdate () {

RayCastObjectFromMouseLock = GameObject.Find("RayCaster").GetComponent(RayCasting).hit;

//Check the Raycast Object name
if (Input.GetMouseButton(0) && RayCastObjectFromMouseLock.collider.name == "PickControl"){
//Do stuff with Pick
if(Input.GetAxis("Mouse X") <0){
gameObject.transform.localPosition.x = gameObject.transform.localPosition.x-movespeed;
if (gameObject.transform.localPosition.x < 0.06)
gameObject.transform.localPosition.x = 0.06;

}
if(Input.GetAxis("Mouse X") >0){
gameObject.transform.localPosition.x = gameObject.transform.localPosition.x+movespeed;
if (gameObject.transform.localPosition.x > 0.14)
gameObject.transform.localPosition.x = 0.14;
}

if(Input.GetAxis("Mouse Y") <0){
gameObject.transform.localPosition.y = gameObject.transform.localPosition.y-movespeed;
if (gameObject.transform.localPosition.y < -0.08)
gameObject.transform.localPosition.y = -0.08;
}
if(Input.GetAxis("Mouse Y") >0){
gameObject.transform.localPosition.y = gameObject.transform.localPosition.y+movespeed;
if (gameObject.transform.localPosition.y > 0)
gameObject.transform.localPosition.y = 0;
}

}

}
