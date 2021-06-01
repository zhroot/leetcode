from typing import List
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
    def print(self,lv):
        tab = '\t' * lv
        print(tab + str(self.val))
        if self.left:
            print(tab+'left')
            self.left.print(lv+1)
        if self.right:
            print(tab+'right')
            self.right.print(lv+1)


def genTree(vals) -> TreeNode:
    size = len(vals)
    t = TreeNode(vals[0])
    parents = [t]
    index = 1
    while index < size:
        newparents = []
        for p in parents:
            if vals[index] is not None:
                p.left = TreeNode(vals[index])
                newparents.append(p.left)
            index += 1
            if vals[index] is not None:
                p.right = TreeNode(vals[index])
                newparents.append(p.right)
            index += 1
        parents = newparents
    return t
            
    


class Solution:
    def pseudoPalindromicPaths (self, root: TreeNode) -> int:
        nums = [0] * 9 
        #root.print(0)
        cnt = self.dfs(root,nums)
        return cnt

    def dfs (self, t:TreeNode, nums:List[int]) -> int:
        cnt = 0
        nums[t.val-1] += 1
        if t.left is not None:
            cnt += self.dfs(t.left,nums)
        if t.right is not None:
            cnt += self.dfs(t.right,nums)
        
        if t.left is None and t.right is None:
            oddcnt = 0
            for num in nums:
                if num % 2 != 0:
                    oddcnt += 1
            if oddcnt > 1:
                cnt =  0
            else:
                cnt = 1
        nums[t.val-1] -= 1
        return cnt
        


s = Solution()

root = genTree([2,3,1,3,1,None,1])
print(s.pseudoPalindromicPaths(root))

root = genTree([2,1,1,1,3,None,None,None,None,None,1])
print(s.pseudoPalindromicPaths(root))

root = genTree([9])
print(s.pseudoPalindromicPaths(root))