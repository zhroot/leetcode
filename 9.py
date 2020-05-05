class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        y = 0;
        ori = x;

        while x > 0:
            y *=10
            y += x%10
            x = int(x / 10)
        return ori == y

s = Solution()
print(s.isPalindrome(101))