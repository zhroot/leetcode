#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<math.h>


int main(){
    long a,b,jLen,bLen;
    int powMax = 0;
    long temp = 1;
    int size = 0;
    int i,j;
    long *table;
    int tableIndex = 0,tableLastIndex = 0;
    long luckyNum = 0;
    int result = 0;
    scanf("%ld",&a);
    scanf("%ld",&b);
    scanf("%ld",&jLen);
    scanf("%ld",&bLen);
    temp = b;
    while(temp){
        temp /= 10;
        powMax++;
    }

    for(i = 1 ;i <= powMax;i++){
        size += 1 << i;
       // printf("size:%d index:%d\n",size,i);
    }
    table = (long *)malloc(sizeof(long) * size);
    memset(table,0,sizeof(long) * size);

    table[tableIndex++] = 4;
    table[tableIndex++] = 7;
    for(i=2;i<=powMax;i++){
        long fac = pow(10,i-1);
        int startIndex = tableLastIndex;
        int stopIndex = tableIndex;       
        int findAll = 0;
        tableLastIndex = tableIndex;
        
        for(j=startIndex;j<stopIndex;j++){
            luckyNum = 4*fac + table[j];
            if(luckyNum > b){
                findAll = 1;
                break;
            }
                
            table[tableIndex++] = luckyNum;
        }
        if(findAll)
            break;
        for(j=startIndex;j<stopIndex;j++){
            luckyNum = 7*fac + table[j];
            if(luckyNum > b){
                findAll = 1;
                break;
            }               
            table[tableIndex++] = luckyNum;
        }
        if(findAll)
            break;
    }
    
    
    free(table);
    printf("%d\n",result);
    return 0;
}