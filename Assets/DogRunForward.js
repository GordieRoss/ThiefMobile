#pragma strict
var Dog : GameObject;
var DogStartPos : Transform;
var DogEndPosition : GameObject;
var DogSpeed = 0.03;

function Start () {
DogStartPos.position = Dog.transform.position;
}

function FixedUpdate () {
Dog.transform.position.z = Dog.transform.position.z+DogSpeed;

if(Dog.transform.position.z >=DogEndPosition.transform.position.z){
Dog.transform.position.z = DogEndPosition.transform.position.z;
}

}