#include <stdio.h>
#include <math.h>

int smallestDivisor(int* nums, int numsSize, int threshold){
    long long sum = 0;
    int i,j;
    int min;
    for(i=0;i<numsSize;i++){
        sum += nums[i];
    }
    min = sum / threshold;
    if(min < 1){
        min = 1;
    }

    for(i=min;;i++){
        int curSum = 0;
        for(j=0;j<numsSize;j++){
            curSum += (int)ceil((double)nums[j]/ (double)i);
        }
        if(curSum<=threshold){
            return i;
        }
    }
}
