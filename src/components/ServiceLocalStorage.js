class ServiceLocalStorage{
    constructor(key){
        this.key = key;
    }
    /** obtiene el item del localstorage  */
    getData(){
        return JSON.parse(localStorage.getItem(this.key));
    }
    /** obtiene el valor y establece el item al localstorage  */
    setData(value){
        localStorage.setItem(this.key, value);  
       
    }
}
const toDoService = new ServiceLocalStorage("TODO");
export default  toDoService;  