from typing import List

class Solution:
    def minTime(self, n: int, edges: List[List[int]], hasApple: List[bool]) -> int:
        es = {}
        for edge in edges:
            f = edge[0]
            t = edge[1]
            if f not in es:
                es[f] = []
            if t not in es:
                es[t] = []
            es[f].append(t)
            es[t].append(f)
        self.edges = es
        self.hasApple = hasApple
        ret = 0
        for c in es[0]:
            ret += self.loop(0,c)
        return ret
        
    def loop(self,rootroot: int,root: int)-> int:
        childs = self.edges[root]
        childs.remove(rootroot)
        childcost = 0
        for c in childs:
            childcost += self.loop(root,c)
        
        if self.hasApple[root] or childcost > 0 :
            childcost += 2
        # if childcost != 0:
        #     print('c:%d cost:%d'%(root,childcost))
        return childcost
        
        

s = Solution()

n = 7
edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]]
hasApple = [False,False,True,False,True,True,False]
print(s.minTime(n,edges,hasApple))

n = 7
edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]]
hasApple = [False,False,True,False,False,True,False]

print(s.minTime(n,edges,hasApple))

n = 7
edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]]
hasApple = [False,False,False,False,False,False,False]
print(s.minTime(n,edges,hasApple))

