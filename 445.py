# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        a1=[]
        a2=[]
        while l1:
            a1.append(l1.val)
            l1=l1.next
        while l2:
            a2.append(l2.val)
            l2=l2.next

        size1 = min(len(a1),len(a2))
        size2 = max(len(a1),len(a2))
        step = 1
        carry = 0
        lastNode = None
        while size1>=step:
            val = a1[-step] + a2[-step] + carry
            carry = int(val / 10)
            val = val % 10
            node = ListNode(val)
            node.next = lastNode
            lastNode = node
            step += 1
        a = a1 if len(a1) == size2 else a2
        while size2>=step:
            val = a[-step] + carry
            carry = int(val / 10)
            val = val % 10
            node = ListNode(val)
            node.next = lastNode
            lastNode = node
            step += 1
        if carry > 0:
            node = ListNode(carry)
            node.next = lastNode
            lastNode = node
        return lastNode
            
