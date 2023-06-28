/* Virat Kohli & AB De villiers */

function solve(arr) {
    let virat = 0;
    let ab = 0;
    let turn = true; //true for ab, false for virat

    for (let i = 0; i < arr.length; i++) {
        if (turn) ab += arr[i];
        else virat += arr[i];

        if (arr[i] === 1 || arr[i] === 3) turn = !turn;

        if ((i + 1) % 6 === 0) {
            turn = !turn;
        }
    }
    if (virat > ab) console.log("Virat Kohli");
    else if (ab > virat) console.log("AB de Villiers");
    else console.log("Tie");
}




/* Ayush Bharat & Chirag */

function split(a, b, c, n) {
    let total = a + b + c + n;
    if (total % 3 !== 0) {
        return false;
    }

    let target = total / 3;
    if (a <= target && b <= target && c <= target) {
        return true;
    }
    return false;
}


/*  Grid of RDE  */
function minimumChangesToMakeMazeFunctional(grid) {
    const n = grid.length;
    const m = grid[0].length;

    let changes = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === n - 1 && j === m - 1) {
                // Exit cell, should be assigned 'E'
                if (grid[i][j] !== 'E') {
                    changes++;
                }
            } else {
                // Non-exit cells
                if (grid[i][j] === 'R') {
                    // Should be assigned 'D'
                    changes++;
                } else if (grid[i][j] === 'D') {
                    // Should be assigned 'R'
                    changes++;
                }
            }
        }
    }

    return changes;
}

// Example usage:
const maze = [
    ['D', 'D', 'R'],
    ['R', 'D', 'E'],
    ['R', 'D', 'R']
];

const minChanges = minimumChangesToMakeMazeFunctional(maze);
console.log('Minimum changes required:', minChanges);



// you have given N balls. Each one of them has a number (k) printed on them. You Need to find a number of ways of selecting two balls (unique pairs of index) having the same numberprinted on them, without considering the $ith $ball for each i.


function solve(n, m, arr) {
    for (let i = 0; i < n; i++) {
      const obj = {};
      let res = 0;
      for (let j = 0; j < n; j++) {
        if (j !== i) {
          if (obj[arr[j]]) {
            obj[arr[j]]++;
          } else {
            obj[arr[j]] = 1;
          }
        }
      }
  
      for (let key in obj) {
        if (obj[key] > 1) {
          res += (obj[key] * (obj[key] - 1)) / 2;
        }
      }
      console.log(res);
    }
  }
  
  const n = 6;
  const m = 3;
  const arr = [1, 2, 3, 2, 3, 1];
  solve(n, m, arr);
  