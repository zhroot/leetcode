class Solution:
    def minNumberOfFrogs(self, croakOfFrogs: str) -> int:
        crock = ['c','r','o','a','k']
        frogs = [0,0,0,0,0]
        maxFrogs = 0
        for c in croakOfFrogs:  
            index = crock.index(c)
            frogs[index]+=1;
            for i in range(0,index-1):
                if frogs[i]<frogs[index]:
                    return -1
            
            if c == 'k':
                for i in range(0,5):
                    frogs[i]-=1
            elif c == 'c':
                if maxFrogs < frogs[0]:
                    maxFrogs = frogs[0]
        
        for f in frogs:
            if f != 0:
                return -1
        return maxFrogs

s = Solution()

croakOfFrogs = "croakcroak"

print(s.minNumberOfFrogs(croakOfFrogs))

croakOfFrogs = "crcoakroak"

print(s.minNumberOfFrogs(croakOfFrogs))

croakOfFrogs = "croakcrook"
print(s.minNumberOfFrogs(croakOfFrogs))

croakOfFrogs = "croakcroa"
print(s.minNumberOfFrogs(croakOfFrogs))

croakOfFrogs = "aoocrrackk"

print(s.minNumberOfFrogs(croakOfFrogs))