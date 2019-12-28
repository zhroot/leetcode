/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

#include<stdio.h>
#include<stdlib.h>
#include<string.h>

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int *p1 = (int *)malloc(sizeof(int) * ((nums1Size + nums2Size)/2+1));
    int index1 = 0,index2=0;
    double result = 0.0;
    for(int i = 0;i<(nums1Size + nums2Size) / 2 + 1;i++){
        
        if(index1 >=  nums1Size){
            p1[i] = nums2[index2];
            index2 ++ ;
        }
        else if(index2 >= nums2Size){
            p1[i] = nums1[index1];
            index1 ++ ;
        }
        else {
            if(nums1[index1] < nums2[index2]){
                p1[i] = nums1[index1];
                index1 ++ ;
            } else {
                p1[i] = nums2[index2];
                index2 ++ ;
            }
        }
    }

    if((nums1Size + nums2Size) % 2 == 0){
        result = (p1[(nums1Size + nums2Size)/2 - 1] + p1[(nums1Size + nums2Size)/2]) / 2.0;
    }else{
        result = p1[(nums1Size + nums2Size)/2] * 1.0;
    }
    free(p1);
    return result;
    
}
int main(int argc, char *argv[]){
    int testcase1[2] = {1,3} ;
    int testcase2[1] = {2};
    int testcase3[2] = {1,2};
    int testcase4[2] = {3,4};


    printf("%lf %lf \n",findMedianSortedArrays(testcase1,2,testcase2,1),findMedianSortedArrays(testcase3,2,testcase4,2));
    return 0;
}