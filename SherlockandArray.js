process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////



function solve(a,n,T){
    // Complete this function
  var temp1 = 0;
  var temp2 = 0;
  var sum = [];
    
      for (var l = 0; l < n; l++) {
         temp1 += a[l];
         sum.push(temp1);
      }

      if (n == 1) { console.log("YES"); }
      else if (n == 2) {console.log("NO");}
   
      else {
          var check = true;
          for (var i = 1; i < n; i++) {
              if (sum[i-1] == (sum[n-1]-sum[i])) {
                  console.log("YES");
                  check = false;
                  break;
              }
          }
          if (check) { console.log("NO");}
      }
  }
   


function main() {
    var T = parseInt(readLine());
    for(var a0 = 0; a0 < T; a0++){
       var n = parseInt(readLine());
        a = readLine().split(' ');
        a = a.map(Number);
      
        var result = solve(a,n,T);
        //process.stdout.write(""+result+n+"\n");
    }

}