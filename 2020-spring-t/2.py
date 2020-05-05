from typing import List
import random

class Solution:
    def minTime(self, time: List[int], m: int) -> int:
        pnum = len(time)
        if pnum <= m:
            return 0
        totle = 0
        dp = [0]* (pnum+1)
        lastend = 1
        for d in range(0,m): # day
            dpt = [-1] * (pnum+1)
            #print('start range (%d,%d)'%(d+1,lastend+1))
            for start in range(d+1,lastend+1): # start
                totle = 0
                maxt = 0
                #print('end range (%d,%d)'%(start,pnum-(m-d)+2))
                for end in range(start,pnum-(m-d)+2): # end
                    if time[end-1] > maxt:
                        totle += maxt
                        maxt = time[end-1]
                    else: 
                        totle += time[end-1]
                    #print('s %d e %d r %d'%(start, end,totle))
                    curdp = max(totle,dp[start-1])
                    if dpt[end] == -1:
                        dpt[end] = curdp
                    elif dpt[end] > curdp:
                        dpt[end] = curdp
                        break
                    #print(dpt)
            lastend = pnum-(m-d)+2    
            dp = dpt
        ret = dp[pnum]
        return ret

s = Solution()

time = [1,2,3,3]
m = 2
print(s.minTime(time,m))

time = []

for i in range(0,10**5):
    time.append(random.randint(1,10000))

m = random.randint(1,1000)

print(s.minTime(time,m))


            
        

