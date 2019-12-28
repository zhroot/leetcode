#include<stdio.h>
#include<stdlib.h>
#include<string.h>

/**
 * Return an array of size *returnSize.
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* shortestToChar(char* S, char C, int* returnSize) {
    int size = strlen(S);
    int *ret = (int *)malloc(sizeof(int) * size);
    //memset(ret,-1,4,size);
    int i,j;
    int lastIndex = -100000;

    for(i = 0;i< size;i++){
        if(S[i] == C){
            ret[i] = 0;
            if(lastIndex < 0)
                lastIndex = 0;
            for(j = lastIndex;j<i;j++){
                ret[j] = i-j > ret[j] ? ret[j] : i-j;
            } 
            lastIndex = i;   
        }
        else{
            ret[i] = i - lastIndex;
        }
        
    }
    *returnSize = size;
    return ret; 
}


int main(){
    char *s = "loveleetcode";
    int size  = 0;
    int *ret = shortestToChar(s,'e',&size);
    int i;

    for(i = 0;i< size;i++){
        printf("%d %c \n",ret[i],s[i]);
    }
    free(ret);
    return 0;
}