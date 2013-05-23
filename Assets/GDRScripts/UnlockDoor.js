#pragma strict
var Door : GameObject;
var unlocksound : AudioSource;
var DoorLockMechanic :GameObject;
var CharacterStuffMobile :GameObject;

function Start () {

}

function Update () {
Door.tag = "Handle";
if(!unlocksound.isPlaying)
unlocksound.Play();
   //    Set Doorlock stuff inactive
DoorLockMechanic.SetActive(false);
//    Set Character controller active
//CharacterStuff.SetActive(true);
CharacterStuffMobile.SetActive(true);

}