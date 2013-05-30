public var PanelXPos =.9;
public var PanelYPos =.9;
public var PanelXSize =.1;
public var PanelYSize =.1;
var GUIDepth = -2;

var CustomPanel : GUIStyle;


// Texture
var PanelTexture : Texture;


// Performs GUI actions
function OnGUI() {

//Debug.Log(PanelTexture.name);
    
    GUI.depth = GUIDepth;
    //checks to make sure there is a Panel texture
        if (!PanelTexture) {
        Debug.LogError("Please assign a texture on the inspector");
        return;
    }
 
    GUI.DrawTexture(Rect
    (Screen.width*PanelXPos,
     Screen.height * PanelYPos,
    (Screen.width*PanelXSize),
    (Screen.height*PanelYSize)*(Screen.width/Screen.height)), 
    PanelTexture, ScaleMode.StretchToFill, true, 10.0f);
       
}
