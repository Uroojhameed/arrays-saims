// Arrays
// //  Q no 1
// var students =[]

// //  Q no 2
// var students = [{Saira:[]}]

// //  Q no 3
// var string =["amna"]

// //  Q no 4
// var numbere =[2]

// //  Q no 5
// var boolean =[ true,false]

// //  Q no 6
// var students =["amna", 2 , true , false]

//  Q no 7 
// var qualification = [ "1) SSC","2) BSC" , "3) HSC", "4) BCS",
// "5) BS", "6) BCOM", " 7) MS", " 8) M. Phil.", " 9) PhD"]
// document.write(" <h1>Qualification : <h1><br>")
// document.write("<h3>" + qualification[0] +  "<h3>")
// document.write("<h3>" + qualification[1] + "<h3>")
// document.write("<h3>" + qualification[2] + "<h3>")
// document.write("<h3>" + qualification[3] + "<h3>")
// document.write("<h3>" + qualification[4] + "<h3>")
// document.write("<h3>" + qualification[5] + "<h3>")
// document.write("<h3>" + qualification[6] + "<h3>")
// document.write("<h3>" + qualification[7] + "<h3>")
// document.write("<h3>" + qualification[8] + "<h3>")


//  Q no 8

// var totalMarks = 500 
// var marks=["320" ,"230" ,"480"]
// document.write("Score of Michael is : "  + marks[0] + " percentage : " + marks[0]/totalMarks*100 + "%<br />")
// document.write("Score of Jhon is : "  + marks[1] + " percentage : " + marks[1]/totalMarks*100 + "%<br />")
// document.write("Score of Tony is : "  + marks [2]+ " percentage : " + marks[2]/totalMarks*100 + "%<br />")


//  Q no 9 (a)
// var arr = ["red" , "blue" ,"green"]
//  console.log(arr) 
//  var color= prompt("enter your begning color.")
// arr.unshift(color);
// document.write(arr)

//  Q no 9 (b)
// var arr =["red", "blue","green"]
// console.log(arr)
// var color= prompt("enter your ending color.")
// arr.push(color)
// document.write(arr)

//  Q no 9 (c)
// var arr = ["red" , "blue" ,"green"]
//  console.log(arr) 
//  var color1= prompt("enter your first color.")
//  var color2= prompt("enter your second color.")
// arr.unshift(color1,color2);
// document.write(arr)

// Q no 9 (d)

// var arr = ["red" , "blue" ,"green"]
// document.write(arr+"<br>")
// arr.shift()
// document.write("after removing first value "+arr)

// 
// Q no 9 (e)
// var arr = ["red" , "blue" ,"green"]
// document.write(arr+"<br>")
// arr.pop()
// document.write("after removing last value "+arr)



// Q no 9 (f)
// var arr = ["red" , "blue" ,"green"]
// document.write(arr+"<br>")
// var newArr = prompt("which color are you chose in your categories")
// var newArr1 = +prompt("which position are you chose in your categories.")

// arr.splice(newArr1 , 0 ,newArr)
// document.write("the color you want  "+arr)

// Q no 9 (g)

// var arr = ["red" , "blue" ,"green", "orange" ,"purple"]
// document.write(arr+"<br>")
// var newArr = prompt(" from which color are you delet in your categories")
// var newArr1 = +prompt("how many color do you want to delet.")

// arr.splice(newArr1 ,newArr)
// document.write("the color you want  "+arr)


// Q no 10

// var score=[320,230 ,480,120]
// document.write("score of students: " + score + "<br>")
// score.sort(function(a, b){return a-b});
// document.write("ordered score of students: "+ score)
// console.log(score)

// Q no 11  
// var city=["karachi","islamabad" ,"lahore","hyderabad"]
// document.write("city list:<br> " + city + "<br>")
// var copyCities = city.slice(1,3)
// document.write("ordered score of students: "+ copyCities)
// console.log(score)


// Q no 12
//  var arr = ["This", "is ", "my","cat"];
// document.write("Array: <br>"+arr+"<br>")
// var a = arr.join(" ");
// document.write("Array: <br>"+a+"<br>");

// // Q no 13
// var comItems=["keyboard","mouse","printer","monitor"]
// document.write("device:<br>" + comItems +"<br>out <br>" + comItems
// [0]+"<br> out <br>" + comItems[1]+"<br> out <br>" + comItems[2]+"<br> out <br>" +comItems[3])



// Q no 14
// var comItems=["keyboard","mouse","printer","monitor"]
// document.write("device:<br>" + comItems +"<br>out <br>" + comItems
// [3]+"<br> out <br>" + comItems[2]+"<br> out <br>" + comItems[1]+"<br> out <br>" +comItems[0])

// Q no 15

// var selectbox=["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];

// document.write("<select><option>"+selectbox[0]+"</option><option>"+selectbox[1]+"</option><option>"+selectbox[2]+"</option><option>"+selectbox[3]+"</option><option>"+selectbox[4]+"</option><option>"+selectbox[5]+"</option></select>")
