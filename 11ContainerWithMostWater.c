/*
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
*/

#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int maxArea(int* height, int heightSize) {
    int maxarea = 0;
    int left = 0;
    int right = heightSize - 1;
    while(left < right){
        int leftheight = height[left];
        int rightheight = height[right];

        int minheight = leftheight > rightheight ? rightheight : leftheight;
        int curarea = (right - left) * minheight;
        maxarea = maxarea < curarea ? curarea : maxarea;

        while(height[left] <= minheight && left < right) left ++;
        while(height[right] <= minheight && left < right ) right --;
    }
    return maxarea;
}

int main(){
    int testcase1[2] = {4,5};
    int testcase2[5] = {3,2,4,5,6};

    printf("%d %d \n",maxArea(testcase1,2),maxArea(testcase2,5));

    return 0;
}