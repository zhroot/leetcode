#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int flipgame(int* fronts, int frontsSize, int* backs, int backsSize) {
    int flags[2001] = {0};
    int i,j;
    int min = 10000;
    for(i = 0;i< frontsSize;i++){
       // flags[fronts[i]] ++ ;
       if(fronts[i] == backs[i] )
            flags[fronts[i]] = 1;
    }
    
    for(i = 0;i<frontsSize;i++){
        int front = fronts[i];
        int back = backs[i];
        if(flags[front] != 1){
            if(min > front)
                min = front;
        }
        if(flags[back] != 1){
            if(min > back)
                min = back;
        }
    }

    if(min == 10000){
        return 0;
    }
    return min;
}

int main(){
    int fronts1[5] = {1,2,4,4,7};
    int backs1[5] = {1,3,4,1,3};
    int fronts2[2] = {1,1};
    int backs2[2] = {1,2};
    printf("%d\n",flipgame(fronts1,5,backs1,5));
    printf("%d\n",flipgame(fronts2,2,backs2,2));
}
