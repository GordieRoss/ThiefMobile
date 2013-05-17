#pragma strict

function Start () {
	transform.LookAt(Camera.main.transform.position, Vector3.up);
}

function Update () {
	transform.LookAt(Camera.main.transform.position, Vector3.up);
}