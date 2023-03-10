## TypeScript-demo
> https://www.tslang.cn/docs/handbook/basic-types.html
> https://ts.xcatliu.com/basics/primitive-data-types
##### 传统写法
```
 1. 绑定事件处理函数—数据
    1. 增加项 ——> 列表数据 ——> 增加一项
        { id timestamp, content string, completed: false}
        每一项的视图 ——> 列表
    2. 删除项 ——> 列表数据 ——> id ——> removeItem
        将对应项的视图 ——> 列表 ——> 删除
    3. 改变完成状态 ——> 列表数据 ——> id ——> change completed
        将对应项的完成状态 ——> 是否完成 toggle
```
##### 面向对象、类的继承、横向切割程序 ——> 设计方案
```
  1. 程序进行分类
    外层：浏览器的事件 ——> 调用方法 ——> 事件处理函数的绑定
    操作数据：addTodo 、removeTodo、toggleComplete
    操作DOM：addItem、removeItem、changeCompleted
    管理模板：todoView ——> 接收参数
```


#### TypeScript使用基础
```
变量上的类型注释：冒号+类型     let name:string = "vic";


```

###### 函数
```
             string：参数类型注释  void：返回值类型注释
function greet(name: string): void{
    console.log("Hello" + name)
}
greet("leiyu")

function getNumber(): number {
    return 25;
}
```

###### 对象类型
```
对象类型                    
                        逗号或分号
function printCoord(pt: {x:number, y:number}){
    console.log("坐标的值: " + pt.x + pt.y)
}
printCoord({x: 3, y: 4})

                                            ?:可选。可传可不传
function printName(obj: {first:string; last?: string}){
    console.log("name: " + obj.first + obj.last)
                        last可能是undefined 要用?.
    console.log(obj.last?.toUpperCase())
}
printName({first:"Felix"})
printName({first:"Felix", last: "vic"})
```

###### 联合类型 union
```
            两个或多个其它类型组成的类型
    let id: number | string
function printId(id: number| string){
    console.log(id)
}
printId(101)
printId("202")
// printId({myid: 123})

function people(x:string[]| string){
    if(Array.isArray(x)){
        console.log("Hello" + x.join(" and "))
    }else {
        console.log("Welcome lone " + x)
    }
}
people("A")
people(["a","b"])

function three(x:number[] | string):number[] | string{
    return x.slice(0, 3)
}
console.log(three("abcde"))
```

###### 类型别名
```
type Point = {
    x: number;
    y: number;
}
function printCoord(pt: Point){
    console.log()
}
printCoord({ x: 100, y: 200 })

type ID = number | string;
function printId(id: ID){
    console.log(id)
}
printId(100)
printId("hello")

type UserInputString = string;
function sanitizedInput(str: string):UserInputString {
    return str.slice(0, 2)
}
sanitizedInput("hello");
```

###### 接口 和 类型别名
```
接口interface定义
区别：接口可以向现有类型添加字段。类型别名创建后不能更改

interface Point {
    x: number;
    y: number;
}
function printCoord(pt: Point){
    console.log("坐标"+pt.x + pt.y);
}
printCoord({x: 100, y: 200})

// 接口 扩展
interface Animal {
    name: string
}
interface Bear extends Animal {
    honey: boolean
}
const bear: Bear = {
    name: "winie",
    honey: true
}
console.log(bear.name);
console.log(bear.honey);

// 类型别名 扩展
type Animal = {
    name: string
}
type Bear = Animal & {
    honey: boolean
}
const bear: Bear = {
    name: "winnie",
    honey: true
}

// 接口 向现有的类型添加字段
interface MyWindow {
    count: number
}
interface MyWindow {
    title: string
}
const w: MyWindow = {
    title: "hello ts",
    count: 100
}

// 类型别名 类型创建后是不能更改的
type MyWindow = {
    title: string
}
type MyWindow = {
    count: number
}
```

###### 类型断言
```
                        返回某种类型的HTMLElement
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas")
const x = ("hello" as unknown) as number
```

###### 文字类型
```
let testString = "Hello World";
testString = "vic mundo";
// testString  可以表示任何可能的字符串
testString;
const constantString = "Hello World";
// constantString   只能表示1个可能的字符串


function printText(s: string, alignment: "left" | "right" | "center"){
    console.log(s + alignment)
}
printText("hello", "left")

function compare(a: string, b: string): -1|0|1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

function handleRequest(url: string, method:"GET"|"POST"|"GUESS"){
    console.log(url + method)
}
const req = { url: "http://baidu.com",method:"GET"} as const;
handleRequest(req.url, req.method);
```

###### null 和 unfined 类型
```
null  // 不存在
undefined 未初始化的值

let x: undefined = undefined
let y: null = null
let z: string = undefined
function doSomething(x: string|null){
    if(x == null){
        // 做一些什么
    }else {
        console.log("hello" + x.toUpperCase())
    }
}

function liveDangerously(x?: number|null){
    console.log(x!.toFixed())
}
```

###### 枚举
```
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

console.log(Direction.Up)
console.log(Direction.Down)
```
