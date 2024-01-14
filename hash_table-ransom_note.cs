// ( Question )

// Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

// Example
//  = "attack at dawn"  = "Attack at dawn"

// The magazine has all the right words, but there is a case mismatch. The answer is .

// Function Description

// Complete the checkMagazine function in the editor below. It must print  if the note can be formed using the magazine, or .

// checkMagazine has the following parameters:

// string magazine[m]: the words in the magazine
// string note[n]: the words in the ransom note
// Prints

// string: either  or , no return value is expected
// Input Format

// The first line contains two space-separated integers,  and , the numbers of words in the  and the , respectively.
// The second line contains  space-separated strings, each .
// The third line contains  space-separated strings, each .



// ( Answer in c# )

using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Result
{

    /*
     * Complete the 'checkMagazine' function below.
     *
     * The function accepts following parameters:
     *  1. STRING_ARRAY magazine
     *  2. STRING_ARRAY note
     */

    public static void checkMagazine(List<string> magazine, List<string> note)
    {
        // Convert the magazine list to a dictionary where the keys are words and values are the counts.
        Dictionary<string, int> wordCounts = magazine.GroupBy(word => word).ToDictionary(
            group => group.Key, group => group.Count()
        );
        
        // Check if the words in the note can be formed using the words in the magazine.
        foreach (string word in note)
        {
            if (wordCounts.ContainsKey(word) && wordCounts[word] > 0)
            {
                // Decrement the count of the word in the dictionary as it is used.
                wordCounts[word]--;
            }
            else
            {
                Console.WriteLine("No");
                return; // If any word is missing, print "No" and exit the function.
            }
        }
        // If all words in the note are present in the magazine, print "Yes".
        Console.WriteLine("Yes");
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        string[] firstMultipleInput = Console.ReadLine().TrimEnd().Split(' ');

        int m = Convert.ToInt32(firstMultipleInput[0]);

        int n = Convert.ToInt32(firstMultipleInput[1]);

        List<string> magazine = Console.ReadLine().TrimEnd().Split(' ').ToList();

        List<string> note = Console.ReadLine().TrimEnd().Split(' ').ToList();

        Result.checkMagazine(magazine, note);
    }
}
