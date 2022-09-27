/*
Operators:  some special symbols which are used
            to perform some predefine operations
            on operands(variables,constants etc i.e
            a value)
Category on Basis of Operands:
1. Unary    :   Required only one operand
2. Binary   :   Required two operands
3. Ternary  :   Required three Operands

Types:
1. Arithmetic Operators
2. Assignment Operator
3. Composite/Compound/Short Hand Operators
4. Relational Operator
5. Logical Operators
6. Bitwise Operators
7. Conditional Operator
8. Increment Operator
9. Decrement Operator
10. MISC. Operator
 */

/*
Arithmetic Operators:
    +   Addition
    -   Subtraction
    *   Multiplication
    /   Division(Quotient)
    %   Division(Remainder)
    **  Power

    Category: Binary
    Precedence: L to R
    Priority: 
                1. Brackets
                2. **
                3. * / %
                4. + -
 */
// var a=10*5/3*10%30/10*50%70-5*(2**5*3/10)+2**4/10*5-5*6%40/2
// console.log(a);
/*
10*5/3*10%30/10*50%70-5*(2**5*3/10)+2**4/10*5-5*6%40/2
10*5/3*10%30/10*50%70-5*(32*3/10)+2**4/10*5-5*6%40/2
10*5/3*10%30/10*50%70-5*(96/10)+2**4/10*5-5*6%40/2
10*5/3*10%30/10*50%70-5*9.6+2**4/10*5-5*6%40/2
10*5/3*10%30/10*50%70-5*9.6+16/10*5-5*6%40/2
50/3*10%30/10*50%70-5*9.6+16/10*5-5*6%40/2
16.66*10%30/10*50%70-5*9.6+16/10*5-5*6%40/2
16.59/10*50%70-5*9.6+16/10*5-5*6%40/2
1.65*50%70-5*9.6+16/10*5-5*6%40/2
82.5%70-5*9.6+16/10*5-5*6%40/2
12.5-5*9.6+16/10*5-5*6%40/2
12.5-48+16/10*5-5*6%40/2
12.5-48+1.6*5-5*6%40/2
12.5-48+8-5*6%40/2
12.5-48+8-30%40/2
12.5-48+8-30/2
12.5-48+8-15
12.5-48+8-15
-35.5+8-15
-27.5-15
-42.5
*/
// console.log(10+20)
// console.log(10+"Hello World")
// console.log("Hello World"+20)
// console.log("Hell"+" World")

// console.log(10-20)
// console.log(10-"Hello World")
// console.log("Hello World"-20)
// console.log("Hell"-" World")

// console.log(10*20)
// console.log(10*"Hello World")
// console.log("Hello World"*20)
// console.log("Hell"*" World")
/*
Assignment Operator(=):
used to assign value of RHS operand to LHS operand
eg. sum=a+b;    //valid
eg. a+b=sum;    //invalid
eg. a=b=c;      //valid

category: Binary
Precedence: R to L
 */

/* Composite/Compound/Short Hand Operators
                combination of Assignmnet Operator with other 
                operators
    a=a+b         =>      a+=b
    a=a-b         =>      a-=b
    a=a*b         =>      a*=b
    a=a/b         =>      a/=b
    a=a%b         =>      a%=b
    a=a**b        =>      a**=b
*/

/*
    Relational Operator:
    used to compare two operands
    <       Less Than
    <=      Less Than Equal
    >       Greater Than 
    >=      Greater Than Equal
    !=      not Equal       (check only value)
    !==     not Identical   (check value and data type both)
    ==      Equal           (check value only)
    ===     Identical       (check valye and data type both)
 */
// console.log(10<20)
// console.log(10<=20)
// console.log(20<=20)
// console.log(20<20)

// console.log(10>20)
// console.log(10>=20)
// console.log(20>=20)
// console.log(20>20)

// console.log(10!=20)
// console.log(10!=10)
// console.log(10!="10")
// console.log(10!==10)
// console.log(10!=="10")

// console.log(10==20)
// console.log(10==10)
// console.log(10=="10")
// console.log(10===10)
// console.log(10==="10")
/*
    Logical Operators:
    used to make a compound condition

    Operator    symbol  operation               type    precedence
    Logical And &&      return true if all      binary  L to R
                        conditions are true
                        else return false
    Logical Or  ||      return true if atleast  binary  L to R
                        one condition is true
                        else return false
    Logical Not !       return true if condition Unary  R to L
                        is false and return 
                        false if condition is 
                        true
 */

// console.log(10 && 20)           //20
// console.log(0 && 20)            //0
// console.log(10 && 0)            //0
// console.log(0 && 0 )            //0
// console.log(10 && 20 && 30)     //30

// console.log(10 || 20)           //10
// console.log(0 || 20)            //20
// console.log(10 || 0)            //10
// console.log(0 || 0 )            //0
// console.log(10 || 20 || 30)     //10
//  console.log(0 && 20 || 30)        //30

//console.log(true && true);          //true

// console.log(!10)                    //false
// console.log(!0)                     //true
/*
Bitwise Operator:
Operators               Symbols     Type    Precedence
1. Bitwise And          &           Binary  L to R
2. Bitwise Or           |           Binary  L to R
3. Bitwise Xor          ^           Binary  L to R
4. Bitwise Left Shift   <<          Binary  L to R
5. Bitwise Right Shift  >>          Binary  L to R
6. Bitwise Negation     ~,-         Unary   R to L

a   b   a&b a|b a^b(a|b - a&b)
0   0   0    0   0
0   1   0    1   1
1   0   0    1   1
1   1   1    1   0

a   b   c   d   a&b&c&d a|b|c|d a^b^c^d
0   0   0   0       0       0       0
0   0   0   1       0       1       1
0   0   1   0       0       1       1
0   0   1   1       0       1       0
0   1   0   0       0       1       1
0   1   0   1       0       1       0
0   1   1   0       0       1       0
0   1   1   1       0       1       1
1   0   0   0       0       1       1
1   0   0   1       0       1       0
1   0   1   0       0       1       0
1   0   1   1       0       1       1
1   1   0   0       0       1       0
1   1   0   1       0       1       1
1   1   1   0       0       1       1
1   1   1   1       1       1       0
note: xor return true if total true conditions are odd
      and return false if total true conditions are even 
 */
// var a=50
// var b=45
// var c=a&b
// var d=a|b
// var e=a^b
// console.log(c,d,e);

/*
a=35    :   1   0   0   0   1   1
b=40    :   1   0   1   0   0   0
--------------------------------------
c=a&b   :   1   0   0   0   0   0
            32  16  8   4   2   1
            ---------------------
            32  0   0   0   0   0=>32
---------------------------------------
e=a|b   :   1   0   1   0   1   1   
            32  16  8   4   2   1
            ---------------------
            32  0   8   0   2   1=>43
--------------------------------------
d=a^b   :   0   0   1   0   1   1
            32  16  8   4   2   1
            ---------------------
            0   0   8   0   2   1=>11
 */
/*
Bitwise Left Shift and Right Shift
Biwise Left Shift
        num<<n
    i.e num*2**n
    eg. 25<<10
    eg. 25*2**10
    i.e 25*1024
    i.e 25600

Bitwise Right Shift
        num>>n
    i.e num/2**n
    eg. 2500>>5
    eg. 2500/2**5
    i.e 2500/32
    i.e 78
 */
// console.log(25<<10)
// console.log(2500>>5)
/*
Bitwise Negation Operator:
                    ~
                    (~x i.e -x-1)
        +ve 20                     -ve  -30

        -ve -20                    +ve  30
        -1  -1                     -1   -1
        ----------------------------------
            -21                         29
                    -
                    (-x i.e -x)
        +ve 20                     -ve  -30

        -ve -20                    +ve  30
        ----------------------------------
            -20                         30
*/
// var a=20
// var b=-30
// console.log(~a);
// console.log(~b);
// console.log(-a);
// console.log(-b);
/*

Conditional Operator or Ternary Operator(?:)
used when we have to execute a statement out of
two statements according to a condition
syntax:
condition?Statement1:Statement2;
            True      False
 */
// var num=parseInt(prompt("Enter the Number : "))
// num%2==0?document.write(num," is Even"):
//     document.write(num," id Odd");

/*
1. WAP to check whether two numbers are equal or not
2. WAP to check whether a person can vote or not
3. WAP to check whther a number if perfect square number or not
 */

// var num=parseInt(prompt("Enter the Number :  "))
// var s = Math.sqrt(num)
// document.write("Square Root of ",num," is ",s)
// document.write("<br>Square Root of ",num," is ",Math.floor(s))
// s = num**0.5
// document.write("<br>Square Root of ",num," is ",s)
// document.write("<br>Square Root of ",num," is ",Math.floor(s))
/*
                Increment(++)  i.e x=x+1
        Pre-Increment           Post-Increment
        (++oprand)              (operand++)
        -------------           --------------
        First Increment         first Assignment
        then Assignment         then Increment

                 Decrement(--)  i.e x=x-1
        Pre-Decrement           Post-Decrement
        (--oprand)              (operand--)
        -------------           --------------
        First Decrement         first Assignment
        then Assignment         then Decrement
 */
// var a=10
// var b=a++   //b=10      a=11
// var c=++a   //a=12      c=12
// var d=a--   //d=12      a=11
// var e=--a   //a=10      e=10
// --a         //9
// a--         //8
// console.log(a,b,c,d,e);


// var a=10
// var b=a++ - ++a
// console.log(a,b);

// var a=10
// var b=--a - a--
// var c=a-- - a-- + b++ - ++b
// console.log(a,b,c);

// var num=parseInt(prompt("Enter the Number :  "))
// var n=Math.floor(Math.sqrt(num))
// n*n==num?document.write(num," is Perfect Square Number"):
//          document.write(num," is Not Perfect Square Number")

var num=250
var n=Math.floor(Math.sqrt(num))
n*n==num?console.log(num," is Perfect Square Number"):
        console.log(num," is Not Perfect Square Number")