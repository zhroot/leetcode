from typing import List

class Solution:
    def splitArray(self, nums: List[int]) -> int:
        ret = 1
        start = 0
        l = len(nums)
        while start < l
        for i in range(start,l):
            

    def gcd(self,p, q):
        if p == 0 or q == 0:
            return 1
        
        if p < q:
            temp = q
            q = p
            p = temp
        if p % q == 0:
            return q
        return gcd(q,p % q)