class Solution:
    def checkIfCanBreak(self, s1: str, s2: str) -> bool:
        arr1 = []
        arr2 = []
        for s in s1:
            arr1.append(s)
        for s in s2:
            arr2.append(s)
        
        arr1.sort()
        arr2.sort()

     #   print(arr1)
     #   print(arr2)
        diff = 0
        for i in range(len(arr1)-1,-1,-1):
            newdiff = ord(arr1[i]) - ord(arr2[i])
            if diff * newdiff < 0:
                return False
            if diff == 0:
                diff = newdiff
        return True

s = Solution()

s1 = "abc"
s2 = "xya"
print(s.checkIfCanBreak(s1,s2))

s1 = "abe"
s2 = "acd"
print(s.checkIfCanBreak(s1,s2))

s1 = "leetcodee"
s2 = "interview"
print(s.checkIfCanBreak(s1,s2))

s1 = "szy"
s2 = "cid"
print(s.checkIfCanBreak(s1,s2))

s1 = "yopumzgd"
s2 = "pamntyya"
print(s.checkIfCanBreak(s1,s2))