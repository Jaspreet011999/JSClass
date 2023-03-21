# week 10
# where in the code ro render the table
- table is rendered after data is displayed

# how to create tr with row and what is going to be in the row
-To create the table row we are going to use the <tr> tag 
- MY_TRIP_COST data is going to be in the row

# Our object is not aligned with our headings
 - We can create a new array of objects, and arrange our key value pairs as per our table headings

 # How we can fix the rendering table issue
 -create an if statement that will check whether there is an existing table row. If it exists, the new row should be added to the existing table instead of creating a new table

# To fix the rendering issues
 -New child contains parent. Is this about the difference between append and appendChild?

 # Final
 - In my refactoring attempt, I created the function createdTableRows which takes table as argument, and called this function inside function renderTable. I also changed variable names, e.g buttons, to be more understandable.  
