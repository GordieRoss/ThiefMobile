/* 
AutoBuilder.cs
Automatically changes the target platform and creates a build.
 
Installation
Place in an Editor folder.
 
Usage
Go to File > AutoBuilder and select a platform. These methods can also be run from the Unity command line using -executeMethod AutoBuilder.MethodName.
 
License
Copyright (C) 2011 by Thinksquirrel Software, LLC
 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */
using UnityEngine;
using UnityEditor;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
 
public static class AutoBuilder {
 
	static string GetProjectName()
	{
        /*string test = "test";
		string[] s = Application.dataPath.Split('/');
		return s[s.Length - 2];*/
		return PlayerSettings.productName;
	}
 
	static string[] GetScenePaths()
	{
		string[] scenes = new string[EditorBuildSettings.scenes.Length];
 
		for(int i = 0; i < scenes.Length; i++)
		{
			scenes[i] = EditorBuildSettings.scenes[i].path;
		}
 
		return scenes;
	}
 
	[MenuItem("File/AutoBuilder/Windows/32-bit")]
	static void PerformWinBuild ()
	{
        BuildTarget buildTarget = BuildTarget.StandaloneWindows;
        BuildTargetGroup buildTargetGroup = BuildTargetGroup.Standalone;
        EvaluateCustomArgs(buildTarget, buildTargetGroup);

        EditorUserBuildSettings.SwitchActiveBuildTarget(buildTarget);
        BuildPipeline.BuildPlayer(GetScenePaths(), "Bin/" + GetProjectName() + ".exe", buildTarget, BuildOptions.Development);
	}
 
	[MenuItem("File/AutoBuilder/Windows/64-bit")]
	static void PerformWin64Build ()
	{
        BuildTarget buildTarget = BuildTarget.StandaloneWindows64;
        BuildTargetGroup buildTargetGroup = BuildTargetGroup.Standalone;
        EvaluateCustomArgs(buildTarget, buildTargetGroup);

        EditorUserBuildSettings.SwitchActiveBuildTarget(buildTarget);
        BuildPipeline.BuildPlayer(GetScenePaths(), "Bin/" + GetProjectName() + ".exe", buildTarget, BuildOptions.Development);
	}
 
	[MenuItem("File/AutoBuilder/iOS")]
	static void PerformiOSBuild ()
	{
        BuildTarget buildTarget = BuildTarget.iPhone;
        BuildTargetGroup buildTargetGroup = BuildTargetGroup.iPhone;
        EvaluateCustomArgs(buildTarget, buildTargetGroup);

        EditorUserBuildSettings.SwitchActiveBuildTarget(buildTarget);
        BuildPipeline.BuildPlayer(GetScenePaths(), "Bin/" + GetProjectName(), buildTarget, BuildOptions.AllowDebugging & BuildOptions.Development & BuildOptions.ShowBuiltPlayer);
	}
	[MenuItem("File/AutoBuilder/Android")]
	static void PerformAndroidBuild ()
	{
        BuildTarget buildTarget = BuildTarget.Android;
        BuildTargetGroup buildTargetGroup = BuildTargetGroup.Android;
        EvaluateCustomArgs(buildTarget, buildTargetGroup);

        EditorUserBuildSettings.SwitchActiveBuildTarget(buildTarget);
        BuildPipeline.BuildPlayer(GetScenePaths(), "Bin/" + GetProjectName() + ".apk", buildTarget, BuildOptions.Development);
	}
	[MenuItem("File/AutoBuilder/Web/Standard")]
	static void PerformWebBuild ()
	{
        BuildTarget buildTarget = BuildTarget.WebPlayer;
        BuildTargetGroup buildTargetGroup = BuildTargetGroup.WebPlayer;
        EvaluateCustomArgs(buildTarget, buildTargetGroup);

        EditorUserBuildSettings.SwitchActiveBuildTarget(buildTarget);
        BuildPipeline.BuildPlayer(GetScenePaths(), "Bin/" + GetProjectName(), buildTarget, BuildOptions.Development);
	}
	[MenuItem("File/AutoBuilder/Web/Streamed")]
	static void PerformWebStreamedBuild ()
	{
        BuildTarget buildTarget = BuildTarget.WebPlayerStreamed;
        BuildTargetGroup buildTargetGroup = BuildTargetGroup.WebPlayer;
        EvaluateCustomArgs(buildTarget, buildTargetGroup);

        EditorUserBuildSettings.SwitchActiveBuildTarget(buildTarget);
        BuildPipeline.BuildPlayer(GetScenePaths(), "Bin/" + GetProjectName(), buildTarget, BuildOptions.None);
	}

    static void EvaluateCustomArgs(BuildTarget buildTarget, BuildTargetGroup buildTargetGroup)
    {
        /*Dictionary<string,string> customArgsDict = CommandLineReader.GetCustomArguments();

        foreach (KeyValuePair<string, string> entry in customArgsDict)
        {
            Debug.Log("AutoBuilder.cs - EvaluateCustomArgs() - Key = [" + entry.Key + "] / Value = [" + entry.Value + "]");
        }

        //Version
        if (customArgsDict.ContainsKey("Version"))
        {
            PlayerSettings.bundleVersion = customArgsDict["Version"];
        }
        else
        {
            Debug.LogWarning("AutoBuilder.cs - EvaluateCustomArgs() - No version number has been provided.");
        }

        //Password
        if (customArgsDict.ContainsKey("Password"))
        {
            SetPassword(customArgsDict["Password"]);
        }
        else
        {
            Debug.LogWarning("AutoBuilder.cs - EvaluateCustomArgs() - No password value has been provided.");
        }*/
    }

    static void SetPassword(string passwordValue)
    {
        string filePath = "Assets/Resources/Password/password.txt";

        if (File.Exists(filePath))
        {
            File.Delete(filePath);
        }

        File.WriteAllText(filePath, passwordValue);
    }
}