# Between Two Sets

There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

- The elements of the first array are all factors of the integer being considered
- The integer being considered is a factor of all elements of the second array

These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

![Alt text](images/image.png)

### Function Description

Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

getTotalX has the following parameter(s):

- int a[n]: an array of integers
- int b[m]: an array of integers

### Returns

- int: the number of integers that are between the sets

![Alt text](images/image-1.png)

### Sample Input

    2 3
    2 4
    16 32 96

### Sample Output

    3

### Explanation

2 and 4 divide evenly into 4, 8, 12 and 16.
4, 8 and 16 divide evenly into 16, 32, 96.

4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.
