public var QuitBtnXPos =.9;
public var QuitBtnYPos =.9;
public var QuitBtnXSize =.1;
public var QuitBtnYSize =.1;
var Depth = -1;

var CustomButton : GUIStyle;


// Main Map Button Texture
var btnTexture : Texture;
// Performs GUI actions
function OnGUI() {
GUI.depth = Depth;
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
    Application.Quit();
        
    }
     
   
}
