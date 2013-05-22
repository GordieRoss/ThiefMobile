public var StartGameBtnXPos =.9;
public var StartGameBtnYPos =.9;
public var StartGameBtnXSize =.1;
public var StartGameBtnYSize =.1;

var CharacterStuff :GameObject;
var CharacterStuffMobile :GameObject;
var DoorLockStuff : GameObject;

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
    var BacktoCharacterBtn = GUI.Button(Rect(Screen.width*StartGameBtnXPos,Screen.height * StartGameBtnYPos
									,(Screen.width*StartGameBtnXSize)
									,(Screen.height*StartGameBtnYSize)*(Screen.width/Screen.height)),btnTexture,CustomButton);
      
        
       if (BacktoCharacterBtn)
    {
    //    Set Doorlock stuff inactive
DoorLockStuff.SetActive(false);
//    Set Character controller active
//CharacterStuff.SetActive(true);
CharacterStuffMobile.SetActive(true);



    }
     
   }