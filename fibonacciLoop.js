function fibonacci(n){
 let fib = [0, 1];
 for (let i = 2; i <= n; i++){
   fib.push( fib[i - 2] + fib[i - 1] );
 }
 return fib[n]; // return fib; ----- to get the sequence, the length will be n + 1;
}
