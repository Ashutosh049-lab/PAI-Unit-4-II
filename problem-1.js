
const logs = [
  { user: "Alice", duration: 5, activity: "Search" },
  { user: "Bob", duration: 3, activity: "View Product" },
  { user: "Alice", duration: 2, activity: "Add to Cart" },
  { user: "Charlie", duration: 7, activity: "Checkout" },
  { user: "Bob", duration: 1, activity: "Search" },
  { user: "Charlie", duration: 4, activity: "View Product" },
];

// Compute total duration spent by each user 

let userDuration=logs.reduce((acc,curr)=>{
    acc[curr.user]=(acc[curr.user] || 0) + curr.duration;
    return acc;
},{});


//Identify users who spent more than 5 minutes total

let longerTime=Object.entries(userDuration)
               .filter(([user,time])=> time >5)
               .map(([user])=>user);


               
// Compute average session duration

   let totalTime=logs.reduce((sum,s)=>
     sum+s.duration,0);


     let avg=totalTime/logs.length;



// After 2 seconds
 setTimeout(()=>{
    console.log("Total Duration Per User :",userDuration);
    console.log("Active Users (>5 min):",longerTime)
    console.log("Avg Session Duration:",avg.toFixed(2),"mins");
 },2000);          
