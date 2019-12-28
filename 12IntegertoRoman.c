/*
Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.
*/
#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int romanToInt(char* s) {
        
}


char* intToRoman(int num) {
    char *one[9] = {"I","II","III","IV","V","VI","VII","VIII","IX"};
    char *ten[9] = {"X","XX","XXX","XL","L","LX","LXX","LXXX","XC"};
    char *hundred[9] = {"C","CC","CCC","CD","D","DC","DCC","DCCC","CM"};
    char *thousand[3] = {"M","MM","MMM"};

    char *ret = (char *)malloc(16 * sizeof(char));
    int curseek = 0;

    int ithousand = num / 1000;
    int ihundred = (num % 1000) / 100;
    int iten = (num % 100) / 10;
    int ione = num % 10;  

    if(ithousand > 0 && ithousand < 4){
        strcpy(ret + curseek,thousand[ithousand-1]);
        curseek += strlen(thousand[ithousand-1]);
    }

    if(ihundred != 0){
        strcpy(ret + curseek,hundred[ihundred-1]);
        curseek += strlen(hundred[ihundred-1]);
    }

    if(iten != 0){
        strcpy(ret + curseek,ten[iten-1]);
        curseek += strlen(ten[iten-1]);
    }

    if(ione != 0){
        strcpy(ret + curseek,one[ione-1]);
        curseek += strlen(one[ione-1]);
    }
    ret[curseek] = '\0';
    return ret;
}

int main(){
    int testcase[10] = {
                1,
                14,
                16,
                27,
                98,
                108,
                156,
                1024,
                2099,
                3111
    };

    for(int i=0;i<10;i++){
        printf("%d => %s \n",testcase[i],intToRoman(testcase[i]));
    }
    return 0;
}