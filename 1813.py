class Solution:
    def areSentencesSimilar(self, sentence1: str, sentence2: str) -> bool:
        arr1 = sentence1.split(' ')
        arr2 = sentence2.split(' ')
        len1 = len(arr1)
        len2 = len(arr2)
        minLen = len1 if len1 < len2 else len2
        # header
        findIndex = -1
        for i in range(0,minLen):
            if arr1[i] != arr2[i]:
                findIndex = i
                break
        if findIndex == -1:
            return True
        # Tail
        for i in range(1,minLen+1-findIndex):
            if arr1[len1-i] != arr2[len2-i]:
                return False
        return True

s = Solution()
print('{0},{1},{2}'.format("My name is Haley","My Haley",s.areSentencesSimilar("My name is Haley","My Haley")))

print('{0},{1},{2}'.format("of","A lot of words",s.areSentencesSimilar("of","A lot of words")))

print('{0},{1},{2}'.format("Eating right now","Eating",s.areSentencesSimilar("Eating right now","Eating")))

