#pragma strict
var Door : GameObject;
var unlocksound : AudioSource;
var DoorLockMechanic :GameObject;
var CharacterStuffMobile :GameObject;
var Inventory:GameObject;

function Start () {
Inventory.SetActive(true);
GameObject.Find("MainLight").light.intensity = .27;
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