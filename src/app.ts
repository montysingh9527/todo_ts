import { ITodoData } from "./js/typings";
import TodoEvent from "./js/TodoEvent";
((doc) => {
    const oInput: HTMLInputElement|null = document.querySelector("input");
    const oAddBtn: HTMLButtonElement|null = document.querySelector("button");
    const oTodoList: HTMLInputElement|null = document.querySelector(".todo-list");

    const todoData: ITodoData[] = [
        {
            id: 1,
            content: "123",
            completed: true,
        },
        {
            id: 2,
            content: "234",
            completed: false,
        },
        {
            id: 3,
            content: "345",
            completed: true,
        },
    ];

    const todoEvent: TodoEvent = new TodoEvent(todoData);

    const init = (): void => {
        bindEvent();
    }

    function bindEvent(): void {
        oAddBtn:HTMLButtonElement.addEventListener("click", handleAddBtnClick, false);
        oTodoList.addEventListener("click", handleListClick, false);
    }

    function handleAddBtnClick(): void {
        todoEvent.addTodo(<ITodoData>{
            id: 4,
            content:"999",
            completed: false
        })
    }
    function handleListClick(e: MouseEvent): void {

    }
    init();

})(document);
