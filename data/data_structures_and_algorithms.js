const DSA = {
    "DSA Introduction": [
        "<h2 style='text-align: center;'>Introduction to Data Structures</h2>",
        "<h3>Data Structures</h3>",
        "<li>The data structure orgainizes and stores data for example an array is a data structure.</li>",
        "<li>There are many different data structures and each differs in how they organize and store data, arrays order data sequentially, and place each value in its own location.</li>",
        "<li>There is no best data structure because the best data structure depends on what data you want to store and how your application will need to access the data.</li>",
        "<li>If all examples have the same best data structure, there is no need to have multiple data structures.</li>",
        "<li>The developer will decide which data structure to use based on the specifics of their application.</li>",
        "<h3>Algorithms</h3>",
        "<li>An algorithm is a set of step-by-step instructions to solve a given problem or achieve a specific goal.</li>",
        "<li>A cooking recipe written on a piece of paper is an example of an algorithm, where the goal is to make a certain dinner. The steps needed to make a specific dinner are described exactly.</li>",
        "<li>Algorithms are fundamental to computer programming because they provide step-by-step instructions for performing tasks.</li>",
        "<li> An efficient algorithm can help us find the solution we are looking for and turn a slow program into a faster one.</li>",
      ],
      "DSA Arrays": [
        "<h2 style='text-align: center;'>Arrays</h2>",
        "<li>Contiguous block memory.</li>",
        "<li>Evry elements occupies the same amount of space in memory.</li>",
        "<li>If an array starts at memory address x and the size of each element in the array is y, we can calculate the memory address of the ith element using the following expression: x + i * y.</li>",
        "<li>If we know the index of an element, the time to retrieve the element will be the same no matter where it is in the array.</li>",
      ],
      "DSA Complexity": [
        "<h2 style='text-align: center;'>DSA Complexity</h2>",
        "<li>To compare the performance of one algorithm against another algorithm.</li>",
        "<li>It might think that one way we could do this is to implement an algorithm and then insert a line of code that records the start and end of the algorithm's execution.</li>",
        "<li>But using this method, the result will vary from one computer to another.</li>",
        "<li>So we need a more objective measure than just distraint running time.</li>",
        "<li>And so what we do is we look at the number of steps that it takes to execute an algorithm and we call this the time complexity.</li>",
        "<li>there are two types of complexity there is time complexity and memory complexity:</li>",
        "<li><strong>Time Complexity:</strong> which is the number of steps involved to run an algorithm.</li>",
        "<li><strong>Memory Complexity:</strong> which is the amount of memory it takes to run an algorithm.</li>",
      ],
      "DSA Big-O Values": [
        "<h2 style='text-align: center;'>DSA Big-O Values</h2>",
        "<li>The time complexities of common array operations</li>",
        "<li>Retrieve with index: O(1) ==> constant time</li>",
        "<li>Retrieve without index: O(n) ==> linear time.</li>",
        "<li>Add an element to a full array: O(n).</li>",
        "<li>Add an element to the end of an array: O(1).</li>",
        "<li>Insert or update an element at a specific index: O(1).</li>",
        "<li>Delete an element by setting it to null: O(1).</li>",
        "<li>Delete an element by sifting elements: O(n).</li>",
      ],
      "DSA Stable Vs Unstable Sort": [
        "<h2 style='text-align: center;'>DSA Stable Vs Unstable Sort</h2>",
        "<li><strong>Stable Sorting Algorithms:</strong> A sorting algorithm is considered stable if it maintains the relative order of records with equal keys (if two elements are equal, they remain in the same order after sorting)</li>",
        "<li><strong>Unstable Sorting Algorithms:</strong> A sorting algorithm is considered unstable if it does not necessarily maintain the relative order of records with equal keys.</li>",
      ],
      "DSA Bubble Sort": [
        "<h2 style='text-align: center;'>DSA Bubble Sort</h2>",
        "<li>Bubble sort is a simple comparison-based sorting algorithm. It works by repeatedly stepping through the list to be sorted.</li>",
        "<li>Compares adjacent elements.</li>",
        "<li>Swaps elements if they are in the wrong order.</li>",
        "<li>Multiple passes through the list are made, with each pass placing the next largest item in its correct position.</li>",
        "<li>Can be optimized by stopping early if no swaps are made during a pass, which indicates the list is already sorted.</li>",
        "<li>Time Complexity: O(n²).</li>",
      ],   
      "DSA Selection Sort": [
        "<h2 style='text-align: center;'>DSA Selection Sort</h2>",
        "<li>Selection sort is a simple comparison-based sorting algorithm.</li>",
        "<li>start from the first element and find the largest element in the entire array.</li>",
        "<li>swap the largest element with the last element.</li>",
        "<li>repeat it for the array without the last element to find the next largest element.</li>",
        "<li>continue this until the entire array sorted</li>",
        "<li>Time Complexity: O(n²).</li>",
      ],    
      "DSA Insertion Sort": [
        "<h2 style='text-align: center;'>DSA Insertion Sort</h2>",
        "<li>Insertion sort is a simple comparison-based sorting algorithm.</li>",
        "<li>The algorithm begins with the second element in the list, assuming that the first element is already sorted.</li>",
        "<li>It picks the current element and compares it to the elements before it.</li>",
        "<li>If the key element is smaller than the element it's compared to, it shifts the larger elements one position to the right to make space for the element.</li>",
        "<li>The element is then placed in the correct position.</li>",
        "<li>This process repeats for each element in the list, moving from left to right.</li>",
        "<li>Time Complexity: O(n²).</li>",
      ],  
      "DSA Shell Sort": [
        "<h2 style='text-align: center;'>DSA Shell Sort</h2>",
        "<li>Shell sort is an in-place comparison-based sorting algorithm that generalizes insertion sort.</li>",
        "<li>Shell sort works by repeatedly performing a gapped insertion sort on the list.</li>",
        "<li>After each pass, the gap is reduced according to the chosen sequence, and the process repeats. As the gap reduces, the list becomes increasingly sorted.</li>",
        "<li>When the gap reaches 1, the algorithm performs a final pass, which is actually a standard insertion sort. Since the list is already partially sorted, this scroll is very important.</li>",
        "<li>Time Complexity: O(n²).</li>",
      ],  
      "DSA Recursion": [
        "<h2 style='text-align: center;'>DSA Recursion</h2>",
        "<li>Recursion is a programming technique in which a function calls itself directly or indirectly in order to solve a problem.</li>",
        "<li>The function continues to call itself with a modified version of the original problem until it reaches a base case, which is a condition that stops the recursive calls.</li>",
        "<li>The base case is the condition under which the recursion stops. Without a base case, the function would continue to call itself indefinitely, leading to a stack overflow.</li>",
        "<li><strong>Example:</strong> In calculating the factorial of a number, the base case is when the number is 1 or 0, because the factorial of 1 or 0 is 1.</li>",
        "<li>The recursive case is the part of the function that reduces the problem into smaller instances and calls itself to solve those smaller instances.</li>",
        "<li><strong>Example:</strong> To calculate the factorial of a number 𝑛, the recursive case involves multiplying n by the factorial of  n−1.</li>",
      ],  
      "DSA Merge Sort": [
        "<h2 style='text-align: center;'>DSA Merge Sort</h2>",
        "<li>Merge Sort is a classic, efficient, and stable sorting algorithm.</li>",
        "<li>Divide the array into two arrays, which are unsorted. The first array is the left array and the second array is the rigth array .</li>",
        "<li>Split the left and rigth array into two arrays each.</li>",
        "<li>Keep spliting until all the arrays have only one element each these arrays are sorted.</li>",
        "<li>Merge evry left/rigth pair of sibling arrays into a sorted array.</li>",
        "<li>After the first merge, we will have a brunch of 2-element sorted arrays.</li>",
        "<li>Then merge those sorted arrays left/rigth sibling to end up with a brunch of 4-element sorted arrays .</li>",
        "<li>Repeat until you have a single sorted array.</li>",
        "<li>Time Complexity: O(n(log(n))).</li>"
      ],  
      "DSA Quick Sort": [
        "<h2 style='text-align: center;'>DSA Quick Sort</h2>",
        "<li>QuickSort is a highly efficient and widely used sorting algorithm.</li>",
        "<li>QuickSort starts by selecting a pivot element from the array.</li>",
        "<li>The pivot can be any element, but often it's the first element, the last element, the middle element, or a random element.</li>",
        "<li>The array is then partitioned into two sub-arrays: one containing elements less than or equal to the pivot, and the other containing elements greater than the pivot.</li>",
        "<li>During this partitioning process, elements are rearranged.</li>",
        "<li>so that each element in the left sub-array is less than or equal to the pivot,and each element in the right sub-array is greater than or equal to the pivot.</li>",
        "<li>The pivot is then placed in its correct position in the sorted array.</li>",
        "<li>After partitioning, the QuickSort algorithm recursively sorts the left sub-array and the right sub-array like the MergeSort .</li>",
        "<li>Time Complexity: O(n(log(n))).</li>"
      ], 
      "DSA Counting Sort": [
        "<h2 style='text-align: center;'>DSA Counting Sort</h2>",
        "<li>The counting array in the Counting Sort algorithm is a key component used to keep track of the number of occurrences of each element within the input array.</li>",
        "<li>Dosen't use the comparisons.</li>",
        "<li>Counts the number of occurances of each value.</li>",
        "<li>Only works with non-negetive discrete values(can't work ).</li>",
        "<li>Values must be within a specific range.</li>",
        "<li>Traverse the input array from left to rigth.</li>",
        "<li>Use the counting array to track how many of each value are in the input array.</li>",
        "<li>Using the counts in the counting array, write the values in sorted order to the input array.</li>",
        "<li>Time Complexity: O(n + k).</li>"
      ],  
      "DSA Radix Sort": [
        "<h2 style='text-align: center;'>DSA Radix Sort</h2>",
        "<li>Radix Sort is a non-comparative sorting algorithm that sorts numbers by processing individual digits.</li>",
        "<li>It works well when the range of digits (or radix) is relatively small compared to the range of possible values.</li>",
        "<li>The radix is base of the numeral system. For decimal numbers, the radix is 10.</li>",
        "<li>The width is The number of digits in the largest number in the array.</li>",
        "<li>The radix sort sorts the numbers by the least significant digit first.</li>",
        "<li>Radix Sort relies on a stable sorting algorithm (such as Counting Sort) to sort numbers based on individual digit positions.</li>",
        "<li> A stable sort maintains the relative order of elements with equal keys.</li>",
        "<li>Time Complexity: O(n + k).</li>"
      ],  
      "DSA JDK Sort": [
        "<h2 style='text-align: center;'>DSA JDK Sort</h2>",
        "<li>We can use one of the above algorithms to sort the array .</li>",
        "<li>But we have JDK at our disposal.</li>",
        "<li>JDK contains in a race class and that class has methods that sort arrays.</li>",
        "<li>We must to import the class to our java class.</li>",
        "<li>Then we can use the class we import it.</li>",
    
      ],
      "DSA Lists Introduction": [
        "<h2 style='text-align: center;'>DSA Lists Introduction</h2>",
        "<li>The list is an abstract data type.</li>",
        "<li>A list is a collection of items that are ordered and mutable.</li>",
        "<li>It allows you to store multiple values in a single variable.</li>",
        "<li>Lists are widely used in programming to handle data.</li>",
        "<li>Lists can contain elements of different types and can be changed after creation.</li>",
      ],
      "DSA Abstract Data Type": [
        "<h2 style='text-align: center;'>DSA Abstract Data Type</h2>",
        "<li>An abstract data type isn't a concrete data structure in the sense that array is.</li>",
        "<li>With arrays we know that we have to store all the items as one contiguous block and arrays also dictate that evry item in the array occupy the same amount of memory so arrays are telling us how the data has to be sorted.</li>",
        "<li>But lists are more of a conceptuel idea and they dictate the operations we can performe onthe data set not the items themselves they are an abstract data type.</li>",
        "<li>It's more that it dictates how we can access the items. can we do random access, can we get to the first item that we added, can we get to the last item that we added.</li>",
        "<li>So an abstract data type is more about behavior and what operation we can do.</li>",
        "<li>basically any data structure can be used to implement an abstract data type as long as you have a class that implements the interface for the abstract data type.</li>",
        "<li>any class can behave like that abstract data type so in the case of lists any class that implements the list interface is a list.</li>",
      ],
      "DSA Array lists": [
        "<h2 style='text-align: center;'>DSA Array lists</h2>",
        "<li>An ArrayList is a type of list in Java that implements the List interface.</li>",
        "<li>Array list is part of the java.util package.</li>",
        "<li>It provides a resizable array, which means you can add, remove, and access elements dynamically.</li>",
        "<li>We must to Import the arrayList class.</li>",
        "<li><code>import java.util.ArrayList;</code>.</li>",
        "<li>Then we must creat the ArrayList.</li>",
        "<li><code>ArrayList<String> list = new ArrayList<>();</code>.</li>",
        "<li>Then we can add, remove or use any method for example: </li>",
        "<li><code> list.add('Apple');</code>.</li>",
        "<li><code> list.remove('Banana');</code>.</li>",
        "<li><code> String firstElement = list.get(0);</code>.</li>",
        "<li><code>int size = list.size(); </code></li>",
      ],
      "DSA Vectors": [
        "<h2 style='text-align: center;'>DSA Vectors</h2>",
        "<li>In Java, Vector is a class that implements a dynamic array capable of growing as needed.</li>",
        "<li>Unlike ArrayList, Vector is synchronized.</li>",
        "<li>Vector is part of the java.util package.</li>",
        "<li>which makes it thread safe but potentially slower due to synchronization overhead.</li>",
        "<li>It stores elements in a resizable array and allows dynamic resizing and access to elements via an index.</li>",
      ],
        "DSA Singly Linked List": [
        "<h2 style='text-align: center;'>DSA Singly Linked List</h2>",
        "<li> In the singly linked list Each node points to the next node in the sequence. The last node points to null, which indicates the end of the list.</li>",
        "<li>Unlike arrays, linked lists do not store elements in contiguous memory locations.</li>",
        "<li>Instead, it consists of nodes, where each node contains two parts:</li>",
        "<li>Data: The actual value or information that the node is storing.</li>",
        "<li>Next: A pointer to the next node in the sequence.</li>",
      ],
      "DSA Doubly Linked List": [
        "<h2 style='text-align: center;'>DSA Singly Linked List</h2>",
        "<li>A doubly linked list is a type of linked list where each node contains pointers to both the next node and the previous node in the sequence.</li>",
        "<li>This bidirectional linkage allows for more flexible navigation through the list.</li>",
        "<li>In summary, a doubly linked list consists of nodes where each node contains three parts:</li>",
        "<li>Data: The actual value or information that the node is storing.</li>",
        "<li>Next: A pointer to the next node in the sequence.</li>",
        "<li>Previous: A pointer to the previous node in the sequence.</li>",
      ],
      "DSA JDK LinkedList Class": [
        "<h2 style='text-align: center;'>DSA JDK LinkedList Class</h2>",
        "<li>In Java, the LinkedList class is implemented in the java.util package.</li>",
        "<li>It provides a doubly-linked list data structure.</li>",
        "<li>This means that each element in the list is linked to both the previous and next elements.</li>",
        "<li>We can create a linked list only using:</li>",
        "<li><code>LinkedList<Employee> listJDK = new LinkedList<>();</code>.</li>",
      ],
      "DSA Stacks": [
        "<h2 style='text-align: center;'>DSA Stacks</h2>",
        "<li>A stack is a data structure that can hold many elements.</li>",
        "<li>When removing an element, it will always be the last element we added.</li>",
        "<li>This way of organizing elements is called LIFO: Last In First Out.</li>",
        "<li>Basic operations we can do on a stack are:</li>",
        "<ul>Push: Adds a new element on the stack.</ul>",
        "<ul>Pop: Removes and returns the top element from the stack.</ul>",
        "<ul>Peek: Returns the top element on the stack.</ul>",
        "<ul>isEmpty: Checks if the stack is empty.</ul>",
        "<ul>Size: Finds the number of elements in the stack.</ul>",
      ],
      "DSA Queues": [
        "<h2 style='text-align: center;'>DSA Queues</h2>",
        "<li>A queue is a data structure that can hold many elements.</li>",
        "<li>When removing an element, it will always be the first element we added.</li>",
        "<li>This way of organizing elements is called FIFO: First In First Out.</li>",
        "<li>Basic operations we can do on a queue are:</li>",
        "<ul>add: Adds a new element to the end of the queue.</ul>",
        "<ul>remove: Removes and returns the element at the front of the queue.</ul>",
        "<ul>Peek: Returns the element at the front of the queue.</ul>",
        "<ul>isEmpty: Checks if the queue is empty.</ul>",
        "<ul>Size: Finds the number of elements in the queue.</ul>",
      ],
      "DSA Hashtables": [
        "<h2 style='text-align: center;'>DSA Hashtables</h2>",
        "<li>The Hashtabeles provides access to data using keys.</li>",
        "<li>Key doesn't have to be an integer.</li>",
        "<li>Consists of key/value pairs-data type don't have to match.</li>",
        "<li>Optimzed for retrieval when we know the key.</li>",
        "<li>Associative array is one type of hash table.</li>",  
        "<li>Maps Keys of any data type to an integer.</li>",  
        "<li>Hash function maps keys to int.</li>",  
        "<li>In java, hash function is Object.hashCode().</li>",  
        "<li>Collision occurs when more than one value has the same hashed value.</li>",  
      ],
      "DSA HashMap in Java": [
        "<h2 style='text-align: center;'>HashMap in Java</h2>",
        "<li>HashMap stores data in key-value pairs, similar to Hashtables.</li>",
        "<li>Key doesn't have to be an integer.</li>",
        "<li>The values ​​associated with the keys can also be of different data types.</li>",
        "<li>Some operations we can do on a hashMap:</li>",
        "<li><strong>put(K key, V value)</strong>: Adds a key-value pair (e.g., adds 'Smith' with marySmith).</li>",
        "<li><strong>putIfAbsent(K key, V value)</strong>: Adds the specified key with its value if the key is not already present, returns the existing value if the key exists.</li>",
        "<li><strong>getOrDefault(Object key, V defaultValue)</strong>: Returns the specified default value if the key is not found.</li>",
        "<li><strong>remove(Object key)</strong>: Attempts to remove the specified key and returns the value, or null if not found.</li>",
        "<li><strong>containsKey(Object key)</strong>: Checks if the specified key exists, returning true or false.</li>",
        "<li><strong>containsValue(Object value)</strong>: Checks if the specified value is present in the map.</li>",
        "<li><strong>forEach(BiConsumer<? super K, ? super V> action)</strong>: Iterates over the map, printing each key-value pair.</li>"

      ],
      "DSA Linear Search": [
        "<h2 style='text-align: center;'>Linear Search</h2>",
        "<li>Linear search is one of the simplest search algorithms.</li>",
        "<li>Start from the first element of the list.</li>",
        "<li>Compare the current element with the target element.</li>",
        "<li>If the current element is equal to the target, return the index of the current element.</li>",
        "<li>If the current element is not equal to the target, move to the next element.</li>",
        "<li>Repeat steps until either the target is found or the end of the list is reached.</li>",
        "<li>If the target is not found by the end of the list, return a value indicating the target is not present example -1.</li>",
      ],
      "DSA Binary Search": [
        "<h2 style='text-align: center;'>Binary Search</h2>",
        "<li>Data must be sorted.</li>",
        "<li>Chooses the element in the middle of the array and compares it against the search value.</li>",
        "<li>If element is equal to the value we're done.</li>",
        "<li>If element is greater than the value , search the left half of the array.</li>",
        "<li>If element is less than the value , search the right half of the array.</li>",
        "<li>Repeat the process until the target is found or the search space is exhausted when the start index exceeds the end index.</li>",
        "<li>If the target is not found by the end of the list, return a value indicating the target is not present example -1.</li>",
      ],
      "DSA Trees": [
        "<h2 style='text-align: center;'>Trees</h2>",
        "<li>Tree is a data type.</li>",
        "<li>Evry item in the tree is a node.</li>",
        "<li>the node at the top of the tree is the root.</li>",
        "<li>Evry non-root node has one and only one parent.</li>",
        "<li>A leaf node has no children.</li>",
        "<li>A singleton tree has only one node (the root).</li>",
      ],
      "DSA Binary Tree": [
        "<h2 style='text-align: center;'>Binary Tree</h2>",
        "<li>In a Binary Tree evry node has 0, 1, or 2 children.</li>",
        "<li>Children are referred to right child and left child.</li>",
        "<li>In practice, we use binary search trees.</li>",
        "<li>A binary tree called full if every level except the last one is complete.</li>",
      ],
      "DSA BST": [
        "<h2 style='text-align: center;'>Binary Search Tree</h2>",
        "<li>The Binary Search Tree can perform insertions, deletions, and retrievals.</li>",
        "<li>The left child always has a smaller value than its parent.</li>",
        "<li>The right child always has a larger value than its parent.</li>",
        "<li>This means everything to the left of the root is less than the value of the root.</li>",
        "<li>Everything to the right of the root is greater than the value of the root.</li>",
        "<li>Because of that, we can do a binary search.</li>",
      ],
  }
