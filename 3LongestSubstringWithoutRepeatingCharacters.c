/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int lengthOfLongestSubstring(char* s) {
    int length,longestSubstr = 0;
    int table[128] = {0};
    int startpos = 0;
    length = strlen(s);
    for(int i = 0;i<length;i++){
        char ch = s[i];
        if(table[ch] > 0){              
            startpos = table[ch] > startpos ? table[ch]:startpos;    
        }
        if(longestSubstr < i - startpos + 1){
            longestSubstr = i - startpos + 1;
        } 
        table[ch] = i+1;
    }
    
    return longestSubstr;
}

int main(int argc, char *argv[]){
    char *testcase[10] = {"abcabcbb",
                            "bbbbb",
                            "pwwkew",
                            "abcdefghijklmnopqrstuvwxyzabcdff",
                            "bcdAsdfwerfwerffvghhrsfsdf",
                            "qweasdasdpokkjkljalksdjoihIOHSOIHFISDHFSDFSDFWSDJFLKJSDLKFJLIWEIROSNDFKLNSDF",
                            "asdasdqweasdijaoisjdoiajsoidjasoijdoaisjdoiasbfihbiyfgqiwuhdoiqwhdoiqwjdoiqjwdpqwdq",
                            "QWERTYUioplkjhgfdsamnbvcxzabcdefghIGKLMNOPQrstuvWXYZ",
                            "A",
                            };
    for(int i = 0;i<9;i++)
        printf("case %d:%s --> %d \n",i,testcase[i],lengthOfLongestSubstring(testcase[i]));
    return 0;
}