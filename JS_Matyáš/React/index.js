/*const person = {
    name:"Maty",
    walk(){
        console.log(this);
    }
};

person.walk();
const walk= person.walk.bind(person);
walk(); */

const square = function(number){ //normal function
    return number*number;
}

const _square = (number) => number*number; //arrow function

console.log(square(5));
console.log(_square(5)) 

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: true},
];

const activeJobs=jobs.filter(function(job){return job.isActive});//normal function
const _activeJobs = jobs.filter(job=>job.isActive);//arrow function

const person = {
    talk(){

        setTimeout(() => { console.log("this",this);},1000);//arrow

       /* let self = this;
        setTimeout(function() {console.log("self",self);}, 1000); */
     }
};

person.talk();

const colors = ['red', 'green', 'blue'];
/*const items = colors.map(function(color){
    return '<li>'+color+'</li>';
});*/
const items = colors.map(color => '<li>'+color+'</li>');//arrow
const items = colors.map(color =>`<li>${color}</li>` );
console.log(items);//27:55
