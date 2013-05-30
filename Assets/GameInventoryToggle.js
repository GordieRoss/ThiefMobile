public var BtnXPos =.9;
public var BtnYPos =.9;
public var BtnXSize =.1;
public var BtnYSize =.1;
var Inventory :GameObject;
var InvActive = false;


var CustomButton : GUIStyle;


// Main Map Button Texture
var btnTexture : Texture;
// Performs GUI actions
function OnGUI() {

    //checks to make sure there is a button texture
        if (!btnTexture) {
        Debug.LogError("Please assign a texture on the inspector");
        return;
    }
    var InventoryBTN = GUI.Button(Rect(Screen.width*BtnXPos,Screen.height * BtnYPos
									,(Screen.width*BtnXSize)
									,(Screen.height*BtnYSize)*(Screen.width/Screen.height)),btnTexture,CustomButton);
      
        
       if (InventoryBTN)
    {
   if(InvActive == false){
   InvActive = true;
   Inventory.SetActive (true);
   GameObject.Find("Player").GetComponent(FirstPersonControl).enabled = false;
   }
   else{
   InvActive = false;
   Inventory.SetActive (false);
   GameObject.Find("Player").GetComponent(FirstPersonControl).enabled = true;
   }
    }
     
   
}
