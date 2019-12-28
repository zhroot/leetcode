/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

*/

#include<stdio.h>
#include<stdlib.h>
#include<string.h>



char* convert(char* s, int numRows) {
    int length = strlen(s);
    if(numRows == 1)
        return s;
    if(length == 0)
        return "";
    {
    
    int row = 0 ,col = 0;
    char **temp = (char **)malloc(numRows *sizeof(char *));
    char *ret = (char *)malloc((length+1)*sizeof(char));
    char *tmp;
    for(int i = 0;i<numRows;i++){
        temp[i] = malloc(length *sizeof(char));
        memset(temp[i],0,length *sizeof(char));
    }
    
    for(int i = 0;i<length;i++){
        char ch = s[i];
        temp[row][col] = ch;
        if(col % 2 == 0){
            row ++;
            if(row >= numRows){
                if(numRows <= 2){
                    col += 2;
                    row = 0;
                }
                else{
                    col += 1; 
                    row = numRows > 1? numRows - 2:0;   
                }                    
            }
        }
        else{
            row --;
            if(row < 1){
                col += 1;
                row = 0;
            }
        }
    }
    tmp = ret;
    for(int i = 0;i< numRows;i++){
        for(int j = 0;j< length;j++){
            if(temp[i][j] != 0){
                *tmp++ = temp[i][j];
                printf("%c ",temp[i][j]);
            }
            else{
                printf("  ");
            }
            
        }
        printf("\n");
        free(temp[i]);
    }
    free(temp);
    *tmp = '\0';
    return ret;
    }
}

int main(int argc, char *argv[]){
    char *testcase[4] = {"ab",
                         "ABCD",
                         "PAYPALISHIRING",
                         "ABCDE"};

    for(int i = 0;i<4;i++)
        printf("case %d:%s --> %s \n",i,testcase[i],convert(testcase[i],1));
    
    return 0;
    
}