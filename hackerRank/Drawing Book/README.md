A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1 is always on the right side:

![Alt text](images/1481920803-d2b54f38f0-book.png)

When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.

<h3>Example</h3>

    n = 5
    p = 3

![Alt text](images/1467398281-32b69f6fa9-UntitledDiagram4.png)

Using the diagram above, if the student wants to get to page 3, they open the book to page 1, flip 1 page and they are on the correct page. If they open the book to the last page, page 5, they turn page 1 and are at the correct page. Return 1.

<h3>Function Description</h3>

Complete the pageCount function in the editor below.

pageCount has the following parameter(s):

- int n: the number of pages in the book
- int p: the page number to turn to

<h3>Returns</h3>

- int: the minimum number of pages to turn

<h3>Input Format</h3>

The first line contains an integer n, the number of pages in the book.
The second line contains an integer, p, the page to turn to.

<h3>Constraints</h3>

![Alt text](images/image.png)

<h3>Sample Input 0</h3>

    6
    2

<h3>Sample Output 0</h3>

    1

<h3>Explanation 0</h3>

If the student starts turning from page 1, they only need to turn 1 page:

![Alt text](images/1467398713-1decf68d06-UntitledDiagram6.png)

If a student starts turning from page 6, they need to turn 2 pages:

![Alt text](images/1467397150-52d0a8213b-UntitledDiagram3.png)

Return the minimum value, 1.

<h3>Sample Input 1</h3>

    5
    4

<h3>Sample Output 1</h3>

    0

<h3>Explanation 1</h3>

If the student starts turning from page 1, they need to turn 2 pages:

![Alt text](images/1467398281-32b69f6fa9-UntitledDiagram4-1.png)

If they start turning from page 5, they do not need to turn any pages:

![Alt text](images/1467398392-5d9ac72e45-UntitledDiagram5.png)

Return the minimum value, 0.