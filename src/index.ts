//Basic types 
let id:number=5
let company:string ="Ndeta Innocent"
let isPublished:boolean=true
let x:any='Hello'
let ids:number[]=[1,2,3,4,5]
//Tuple
let person:[number, string, boolean]=[1,'Ndeta',true ]
//Tuple array
let employee:[number,string][]
employee=[
    [1,'Ndeta'],
    [2,"Romance"]
]
//Unions
let pid:string |number
pid=9

//Enums
enum Direction1{
    Up,
    Down,
    Left,
    Right
}
console.log(Direction1.Up);
//Objects
type User={
    id:number,
    name:string
}
const user:User={
    id:1,
    name:'John'
}
//Type assertion
let cid:any=1
let customerId=<number>cid

//Functions
function addNum(x:number,y:number):number{
    return x+y
}
console.log(addNum(3,67));
//Interface
interface UserInterface{
    id:number,
    name:string
}
const user2:UserInterface={
    id:43,
    name:'Ndeta'
}
//Classes
class Person{
    id:number
    name:string

    constructor(id:number, name:string){
        this.id=id
        this.name=name
    }
    register(){
        return `${this.name} is now registered`
    }
}
const ndeta=new Person(1,"Innocent")
ndeta.register()
//Generics
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}
let numArray=getArray<number>([1,2,3,4,5])
let strArray=getArray<string>(['Ndeta','Romance','John'])
console.log("ID", id);