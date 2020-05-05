#include<stdio.h>

int find(int l,int h,int *arr,int x){
    int mid = (h+l)/2;
    if(l >= h){
        return x - arr[mid];
    }        
    if(x < arr[mid]){
        return find(l,mid,arr,x);
    }
                
    if (x > arr[mid]){
        return find(mid,h,arr,x);
    }
    return 0;
}

int findMinFibonacciNumbers(int k){
    int arr[50];
    int index = 2;
    int l,h,ret;
    arr[0] = 1;
    arr[1] = 1;
    while(1){
        int f = arr[index-1] + arr[index-2];
        arr[index] = f;
        index ++;
        if(f >= k){
            break;
        }
    }
    printf("index %d\n",index);

    l = 0;
    h = index-1;
    ret = 0;
    while(1){
        int last = find(l,h,arr,k);
        
        printf("%d----%d \n",last,k);
        
        ret += 1;
        if(last == 0){
            break;
        }
        k = last;
    }
    return ret; 
}

int main(){
    printf("%d\n",findMinFibonacciNumbers(100000000));
}