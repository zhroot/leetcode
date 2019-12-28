#include<iostream>
#include<string>
#include<set>
#include<vector>

using namespace std;

class Solution {
public:
    int uniqueMorseRepresentations(vector<string>& words) {
        string alphabet[26] = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
        set<string> set;
        for(int i = 0;i<words.size();i++){
            string s = "";
            for(int j = 0;j<words[i].length();j++)
                s.append(alphabet[words[i][j] - 'a']);
            set.insert(s);
        }
        return set.size();
    }
};



int main(){
    Solution s;
    vector<string> words;
    words.push_back("gin");
    words.push_back("zen");
    words.push_back("gig");
    words.push_back("msg");
    printf("ret1 %d \n",s.uniqueMorseRepresentations(words));
    return 0;
}