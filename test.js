 const students = [

 {name:'Quincy', grades : [99,88], courses : ['cs301', 'cs303']},
 {name : 'jason', grades : [29,38], courses : ['cs201', 'cs203']},
 {name : 'Alexis', grades : [79,78], courses : ['cs105', 'cs211']},
 {name :'Sam', grades : [91,82], courses : ['cs445', 'cs303']}, 
 {name : 'Katie', grades: [66,77], courses :['cs303', 'cs477']}

 ]; 

 const result = students.filter(s=>s.courses.includes('cs303')).map(x=>{
   let xx={}
   xx.name = x.name
   xx.grade =x.grades.reduce((x,y)=>x+y,0)/x.grades.length;
   return xx;
}).reduce((x,y)=> {x[y.name] = y.grade; return x}, {})
console.log(result);
