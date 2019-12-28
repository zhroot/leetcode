/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

#include<stdio.h>
#include<stdlib.h>

int reverse(int x) {
    long result = 0;
    int sign = 1;
    if(x < 0)
        sign = -1;
    x = x * sign;
    while(x){
        int rem = x % 10;
        result *= 10;
        result += rem;
        x = x / 10;
    }
    result = result * sign;
    if(result > 2147483647 || result < (-2147483647 - 1))
        return 0;
    return result;
}

int main(int args,char **argv){
    int test[10] = {123,-123,120,102,-110,10000010,-100010010,1,-1,-5};
    for(int i = 0;i<10;i++){
        printf("%d -> %d \n",test[i],reverse(test[i]));
    }
    return 0;
}