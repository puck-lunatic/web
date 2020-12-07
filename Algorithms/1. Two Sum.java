public class Solution {
    public int[] twoSum(int[] nums, int target) {
        int res_l =-1;
        int res_r =-1;
        for(int i = 0;i < nums.length-1;i++){
            for(int k = i+1 ; k<nums.length; k++){
                if(nums[i]+nums[k] == target){
                    res_l=i;
                    res_r=k;
                    break;
                }
            }
            if(res_l != -1 && res_r != -1){
                break;
            }
        }
        return new int[]{res_l,res_r};
    }
}
