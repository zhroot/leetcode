#include<stdio.h>
#include<string.h>
#include<stdlib.h>

/**
 * Return an array of size *returnSize.
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* numberOfLines(int* widths, int widthsSize, char* S, int* returnSize) {
    int *ret = (int *)malloc(sizeof(int) * 2);
    int length = strlen(S);
    int i,j;
    int line = 1,lastWidth = 0;
    *returnSize = 2;

    for(i = 0;i<length;i++){
        int ch = S[i] - 'a';
        int chWidth = widths[ch];
        if(lastWidth + chWidth > 100){
            line ++;
            lastWidth = chWidth;
        }else if (lastWidth + chWidth == 100){
            line ++;
            lastWidth = 0;
        }
        else{
            lastWidth += chWidth;
        }
    }
    ret[0] = line;
    ret[1] = lastWidth;
    return ret;
}

int main(){
    int widths1[26] = {10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10};
    char *S1 = "abcdefghijklmnopqrstuvwxyz";
    int widths2[26] = {4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10};
    char *S2 = "bbbcccdddaaa";
    int retsize;
    int *ret1 = numberOfLines(widths1,26,S1,&retsize);
    int *ret2 = numberOfLines(widths2,26,S2,&retsize);
    printf("ret1 %d %d \nret2 %d %d\n",ret1[0],ret1[1],ret2[0],ret2[1]);
    return 0;
}