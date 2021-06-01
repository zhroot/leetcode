from typing import List
import random

class Solution:
    def countTriplets(self, arr: List[int]) -> int:
        ret = 0
        for i in range(0,len(arr)):
            a = 0
            for j in range(i+1,len(arr)):
                a = a ^ arr[j-1]
                b = 0
                for k in range(j,len(arr)):
                    b = b ^ arr[k]
                    if a == b:
                        #print('i %d j %d k %d a %d b %d'%(i,j,k,a,b))
                        ret += 1
        return ret


s = Solution()


arr = [2,3,1,6,7]
print(s.countTriplets(arr))
arr = [1,1,1,1,1]
print(s.countTriplets(arr))
arr = [2,3]
print(s.countTriplets(arr))
arr = [1,3,5,7,9]
print(s.countTriplets(arr))
arr = [7,11,12,9,5,2,7,17,22]
print(s.countTriplets(arr))

arr = []
for i in range(0,300):
    arr.append(random.randint(1,3))

print(s.countTriplets(arr))