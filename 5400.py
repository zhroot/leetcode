from typing import List

class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        tc = set()
        sc = set()
        for cl in paths:
            sc.add(cl[0])
            tc.add(cl[1])
        for c in tc:
            if c not in sc:
                return c

s = Solution()
paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
print(s.destCity(paths))

paths = [["B","C"],["D","B"],["C","A"]]
print(s.destCity(paths))

paths = [["A","Z"]]
print(s.destCity(paths))

