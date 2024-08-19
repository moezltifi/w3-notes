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
      "DSA Big-O val eg": [
        "<h2 style='text-align: center;'>DSA Big-O Values Examples</h2>",
        "<li>Retrieve with index: O(1) ==> constant time</li>",
        "<li>Retrieve without index: O(n) ==> linear time.</li>",
        "<li>Add an element to a full array: O(n).</li>",
        "<li>Add an element to the end of an array: O(1).</li>",
        "<li>Insert or update an element at a specific index: O(1).</li>",
        "<li>Delete an element by setting it to null: O(1).</li>",
        "<li>Delete an element by sifting elements: O(n).</li>",
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
      "DSA Stable Vs Unstable Sort": [
        "<h2 style='text-align: center;'>DSA Stable Vs Unstable Sort</h2>",
        "<li><strong>Stable Sorting Algorithms:</strong> A sorting algorithm is considered stable if it maintains the relative order of records with equal keys (if two elements are equal, they remain in the same order after sorting)</li>",
        "<li><strong>Unstable Sorting Algorithms:</strong> A sorting algorithm is considered unstable if it does not necessarily maintain the relative order of records with equal keys.</li>",
      ],
  }
