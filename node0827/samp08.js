var people = {
    name: 'gildong',
    say: function() {
        console.log(this);
    }
}
people.say(); // this -> people 객체

var sayPeople = people.say; // this -> object 객체
var sayPeople = people.say.bind(people); // .bind(people)로 this가 people 객체 가리키도록 고정함
sayPeople();

/*
people.say() / .bind(people) 결과값: { name: 'gildong', say: [Function: say] }
 
----------------------------------------------------------
<ref *1> Object [global] {...}
*/