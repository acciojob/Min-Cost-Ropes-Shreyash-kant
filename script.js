function mincost(arr)
{ 
//write your code here
// return the min cost
	if(arr.length===1)return 0;
	else if(arr.length===2)return arr[0]+arr[1];
	arr.sort();
	let cost = 0;
	let tmp=arr[0]+arr[1];
	for(i=2;i<arr.length;++i){
		cost = cost +tmp;
		tmp = tmp+arr[i];
	}
	return cost+tmp;
}

module.exports=mincost;
