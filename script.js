function mincost(arr)
{ 
//write your code here
// return the min cost
	if(arr.length===1)return 0;
	let totalCost =0;
	while(arr.length>1){
		arr.sort((a,b)=>(a-b));
		let cost = arr[0]+arr[1];
		totalCost+=cost;
		arr = arr.slice(2);
		arr.push(totalCost);
	}
	return totalCost;
}

module.exports=mincost;
