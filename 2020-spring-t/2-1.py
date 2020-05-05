from typing import List
import random

class Solution:
    def minTime(self, time: List[int], m: int) -> int:
        pnum = len(time)
        if pnum <= m:
            return 0
        l = -1 
        h = 10**5 * 10000 + 1
        while h > l+1:
            mid = (h+l) >> 1
            #print((mid,l,h))
            if self.bs(time,m,mid):
                h = mid
            else:
                l = mid
        return h

    def bs(self, time: List[int], m:int,t:int)-> bool:
        total = 0
        max = 0
        for tt in time:
            total += tt
            if max < tt:
                max = tt
            if total - max > t:
                m-=1
                total = tt
                max = tt
                if m <= 0:
                    return False
            #print('m %d tt %d total %d'%(m,tt,total))
        
        return True
            

s = Solution()

time = [1,2,3,3]
m = 2
print(s.minTime(time,m))

time = [999,999,999]
m = 4
print(s.minTime(time,m))

time = []

for i in range(0,10**5):
    time.append(random.randint(1,10000))

m = random.randint(1,1000)

print(s.minTime(time,m))


            
        

