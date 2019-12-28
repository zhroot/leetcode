/*
Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.
*/

#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int myAtoi(char* str) {
    long ret = 0;
    int length = strlen(str);
    int sign = 1;
    int findfirst = 0;
    for(int i = 0;i<length;i++){
        char ch = str[i];
        if(ch >= '0' && ch <= '9'){
            int num = ch - '0';
            ret *= 10;
            ret += num;

            if(findfirst == 0)
                findfirst = 1;

            if(ret * sign > 2147483647)
                return 2147483647;
            if(ret * sign < -2147483648)
                return -2147483648;
            continue;
        }
        else if(ch == 32 && findfirst == 0){
            continue;
        }
        else if(findfirst == 0){
            if(ch == '+'){
                findfirst = 1;  
                continue;             
            }
            else if(ch == '-'){
                sign = -1;
                findfirst = 1; 
                continue;
            }
        }
        //error
        //return 0;
        break;
    }
    return ret * sign;
}

int main(){
    char *testcase[5] = {"    123 45 67",
                         "  a134",
                         "-124 6",
                         " +0 123456",
                         "-00123a00"};
    for(int i = 0;i<5;i++){
        printf("%s -> %d \n",testcase[i],myAtoi(testcase[i]));
    }
    return 0;
}