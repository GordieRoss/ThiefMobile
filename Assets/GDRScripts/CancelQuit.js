public var QuitBtnXPos =.9;
public var QuitBtnYPos =.9;
public var QuitBtnXSize =.1;
public var QuitBtnYSize =.1;
var QuitGUI :GameObject;
var InventoryGUI : GameObject;


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
    var QuitBtn = GUI.Button(Rect(Screen.width*QuitBtnXPos,Screen.height * QuitBtnYPos
									,(Screen.width*QuitBtnXSize)
									,(Screen.height*QuitBtnYSize)*(Screen.width/Screen.height)),btnTexture,CustomButton);
      
        
       if (QuitBtn)
    {
   InventoryGUI.SetActive(true);    
   QuitGUI.SetActive(false);
   GameObject.Find("Player").GetComponent(FirstPersonControl).enabled = true;
        
    }
     
   
}
