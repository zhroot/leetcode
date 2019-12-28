#include<stdio.h>
#include<stdlib.h>
#include<string.h>

#define MOD 1000000007

int cmp(const void *a, const void *b){
     return  *(int*)(a) - *(int*)(b) ;
}

int numFactoredBinaryTrees(int* A, int ASize) {
    int i,j,k;
    long result;
    long *dp = (long *)malloc(sizeof(long) * ASize);
    //memset(db);
    qsort(A,ASize,sizeof(int),cmp);
    for(i = 0;i<ASize;i++){
        result = 1;
        for(j = 0;j<i;j++){
            int flag = 0;
            for(k = 0;k<i;k++){               
                if(A[j] * A[k] == A[i]){
                    //printf("%d *  %d == %d \n",A[j], A[k], A[i]);
                    flag = 1;
                    if(A[j] ==  A[k]){
                        result += (dp[j] * dp[j]) % MOD;        // -1 + 1
                        result %= MOD;
                    }
                    else{
                       // result += 2;
                        result += (dp[j]*dp[k]) % MOD; 
                        result %= MOD;
                    }
                    break;
                }
                else if(A[j] * A[k] > A[i]){
                    flag = 1;
                   // printf("%d *  %d != %d \n",A[j], A[k], A[i]);
                }

                if(flag == 1)
                    break;
            }

            if(flag == 1)
                continue;
            
        }
        dp[i] = result % MOD;
       // printf("%d dp[%d] = %d \n",A[i],i,dp[i]);
    }
    result = 0;
    for(i = 0;i<ASize;i++){
        result += dp[i];
        result %= MOD;
    }
    free(dp); 
    return (int)result % MOD;
}

int main(){
    int a[4] = {2, 4, 5, 10};
    int a1[4] = {18,3,6,2};
    int a2[10] = {18,31,2,4,14,7,9,63,10,84};
    int a3[50] = {45,42,2,18,23,1170,12,41,40,9,47,24,33,28,10,32,29,17,46,11,759,37,6,26,21,49,31,14,19,8,13,7,27,22,3,36,34,38,39,30,43,15,4,16,35,25,20,44,5,48};
    //printf("%d \n",numFactoredBinaryTrees(a,4));
    //printf("%d \n",numFactoredBinaryTrees(a1,4));
    printf("%d \n",numFactoredBinaryTrees(a3,50));
    return 0;
}

