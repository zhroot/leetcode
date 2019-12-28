

/**
 * 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807. 
 * 
 */

/**
 * Definition for singly-linked list.
 */ 

#include<stdio.h>
#include<stdlib.h>
#include<string.h>


struct ListNode {
    int val;
    struct ListNode *next;
};
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    
    int carry = 0;
    int length = 0;
    struct ListNode *result,*tmpr1,*tmpl1,*tmpl2,*tmpr2;
    //result = (struct ListNode *)malloc(sizeof(struct ListNode));
    tmpl1 = l1;
    tmpl2 = l2;

    while(tmpl1 != NULL  || tmpl2 != NULL){
        length++;
        if(tmpl1 != NULL){           
            tmpl1 = tmpl1->next;     
        }
        if(tmpl2 != NULL ){            
            tmpl2 = tmpl2->next;
        }
    }
    result = (struct ListNode *)malloc(sizeof(struct ListNode) * (length + 1));
    tmpr1 = result; 
    for(int i = 0;i<length;i++){
        tmpr1[i].next = &tmpr1[i+1];
    }
    tmpr1[length].next = NULL;
    tmpl1 = l1;
    tmpl2 = l2;
    tmpr1 = result;  
    while(tmpl1 != NULL  || tmpl2 != NULL){       
        int i1 = 0;
        int i2 = 0;
        int curresult;    
        if(tmpl1 != NULL){
            i1 = tmpl1->val;
            tmpl1 = tmpl1->next;     
        }
        if(tmpl2 != NULL ){
            i2 = tmpl2->val;
            tmpl2 = tmpl2->next;
        }
        curresult = i1 + i2 + carry;
        carry = curresult / 10;
        curresult = curresult % 10;                       
        tmpr1->val = curresult;
        tmpr2 = tmpr1;
        tmpr1 = tmpr1->next;      
    }
    while(carry > 0){
        int curresult = carry % 10;
        carry = carry / 10;
        tmpr1->val = curresult;
        tmpr2 = tmpr1;
        tmpr1 = tmpr1->next;        
    }
    tmpr2->next = NULL;

    return result;
}

//test 
int main(int argc,char **argv){
    struct ListNode* t1 = (struct ListNode *)malloc(sizeof(struct ListNode) * 10);

    struct ListNode* t2 = (struct ListNode *)malloc(sizeof(struct ListNode) * 20);

    struct ListNode *tmp1,*tmp2,*result,*resulttmp;
   // memset(t1,0,sizeof(struct ListNode) * 10);
  //  memset(t2,0,sizeof(struct ListNode) * 10);

    //tmp1 = t1;
   // tmp2 = t2;
    for(int i = 0;i< 9;i++){
        t1[i].val = 20+i;
        t1[i].next = &t1[i+1];
        printf("%d -> ",t1[i].val);
    }
    t1[9].val = 9;
    t1[9].next = NULL;
    printf("%d \n",t1[9].val);
    for(int i = 0;i < 19;i++){
        t2[i].val = 9+i;
        t2[i].next = &t2[i+1];
        printf("%d -> ",t2[i].val);
    }
    t2[19].val = 18;
    t2[19].next = NULL;
    printf("%d \n",t2[19].val);

    result = addTwoNumbers(t1,t2);
    resulttmp = result;
    while(result != NULL){
        printf("%d -> ",result->val);
        result = result->next;
    }
    free(resulttmp);
    printf("\n");

    

}