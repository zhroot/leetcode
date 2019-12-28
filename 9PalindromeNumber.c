/*
Determine whether an integer is a palindrome. Do this without extra space.

click to show spoilers.

Some hints:
Could negative integers be palindromes? (ie, -1)

If you are thinking of converting the integer to string, note the restriction of using extra space.

You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

There is a more generic way of solving this problem.
*/

#include<stdio.h>
#include<stdlib.h>
#include<string.h>

#define bool int

bool isPalindrome(int x) {
    int length = 0;
    int tmp = x;
    long ph = 1,pl = 0;
    if(x< 0)
        return 0;
    while(tmp > 0){
        tmp = tmp / 10;
        ph *= 10;
        length ++ ;
    }
    ph /= 10;
    pl = 10;

    printf("x: %d ph:%ld pl:%ld \n",x,ph,pl);
    for(int i = 0;i< length/2;i++){
        int low = x % pl;
        int high = x / ph;
        printf("x %d low %d high %d \n",x,low,high);
        if(low != high)
            return 0;       
        x%=ph;
        x/=pl;
        ph/=100;
    }
    return 1;    
}

int main(){
    int testcase[10] = {123321,1234321,-1234,12344321,12537345,87667854,0,1000000001,100001,11};
    for(int i = 0;i<10;i++){
        printf("%d -> %d \n",testcase[i],isPalindrome(testcase[i]));
    }
    return 0;
}
