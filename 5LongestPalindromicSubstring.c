/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
 

Example:

Input: "cbbd"

Output: "bb"
*/

#include<stdio.h>
#include<stdlib.h>
#include<string.h>

char* longestPalindrome(char* s) {
    int length = strlen(s);
    int startpos = 0;
    int maxlength = 0;
    char *ret,*tmp,*tmps;
    for(int i = 0;i<length;i++){
        int pre,next;
        int curstartpos,curlength;
        //odd
        pre = i-1;
        next = i+1;
        while(pre >=0 && next<length ){
            if(s[pre] != s[next])
                break;

            pre -- ;
            next ++;
        }
        curstartpos = pre + 1;
        curlength = (i - curstartpos)*2 + 1;

        if(maxlength < curlength){
            startpos = curstartpos ;
            maxlength = curlength;
        }
        //even
        pre = i;
        next = i+1;
        while(pre >=0 && next<length ){
            if(s[pre] != s[next])
                break;

            pre -- ;
            next ++;

        }
        //curstartpos = next-1;
        curlength = (next-1-i)*2;
        curstartpos = i - (next-1-i) + 1;
        if(maxlength < curlength){
            startpos = curstartpos ;
            maxlength = curlength;
        }
    }
    ret = (char *)malloc(sizeof(char) * maxlength+1);
    tmp = ret;
    tmps = s + startpos;
    while(maxlength--){
        *tmp++ = *tmps++;
    }
    *tmp = '\0';
    
    return ret;
}

int main(int argc, char *argv[]){
    char *testcase[2] = {"babad",
                        "cbbd"};

    for(int i = 0;i<2;i++)
        printf("case %d:%s --> %s \n",i,testcase[i],longestPalindrome(testcase[i]));
    
    return 0;
    
}