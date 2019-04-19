// Return an array of two integers denoting the respective comparison points earned by Alice and Bob.
//
// Sample Input 0
//
// 5 6 7
// 3 6 10
// Sample Output 0
//
// 1 1


function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    if (a[0] > b[0]) {
        alice++;
    } else if (b[0] > a[0]) {
        bob++;
    } if (a[1] > b[1]) {
        alice++;
    } else if (b[1] > a[1]) {
        bob++;
    } if (a[2] > b[2]) {
        alice++;
    } else if (b[2] > a[2]) {
        bob++;
    }
    return[alice,bob]
}



//Print the integer sum of the elements in the array.
//
// Sample Input
//
// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005
//
// Output
//
// 5000000015

function aVeryBigSum(ar) {
    return ar.reduce((x, i) => x + i);

}
