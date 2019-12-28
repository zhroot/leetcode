#include<stdio.h>
#include<string.h>
#include<stdlib.h>

int maxIncreaseKeepingSkyline(int** grid, int gridRowSize, int *gridColSizes) {
    int row,col;
    int increaseHight = 0 ;
    int maxCol = 0;
    int *maxTB;
    int *maxLF = (int *)malloc(sizeof(int) * gridRowSize);

    for(row = 0;row<gridRowSize;row ++){
        
        if(maxCol < gridColSizes[row]){
            maxCol = gridColSizes[row];
        }
    }

    maxTB =(int *)malloc(sizeof(int) * maxCol);

    memset(maxTB,0,sizeof(int) * maxCol);
   // printf("12345\n");
    memset(maxLF,0,sizeof(int) * gridRowSize);
    
   // printf("123456\n");

    for(row=0;row<gridRowSize;row++){
        for(col=0;col<gridColSizes[row];col++){
            //printf("%d\n",grid[row][col]);
            int height = grid[row][col];
                        
            if(height > maxTB[col])
                maxTB[col] = height;

            if(height > maxLF[row])
                maxLF[row] = height;           
        }
    }

    for(row=0;row<gridRowSize;row++){
        for(col=0;col<gridColSizes[row];col++){
            int height = grid[row][col];
            int addTB = maxTB[col] - height;
            int addLF = maxLF[row] - height;
            if(addTB > addLF){
                increaseHight += addLF;
            }
            else{
                increaseHight += addTB;
            }
                       
        }
    }
    free(maxTB);
    free(maxLF);
    return increaseHight;
}

int main(){
    int grid[4][4] = {{3,0,8,4},{2,4,5,7},{9,2,6,3},{0,3,1,0}};
    int col[4] = {4,4,4,4};
    printf("case 1 %d \n",maxIncreaseKeepingSkyline((int **)grid,4,col));
    return 0;
}