interface person {
    name: string;
    age: number
}
function updatePerson(person: Partial<person>){}

interface Props{
    name? : string;
    age? :number
}
function displayProps(props: Required<Props>){
    console.log(props.name, props.age);
}

interface Config {
    url: string;
} 
const config: Readonly<Config> = { url: "http://example.com" };

interface PageInfo {
    title: string;
  }
  
const pages: Record<string, PageInfo> = {
    home: { title: "صفحه اصلی" },
    about: { title: "درباره ما" },
};

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}
  
type TodoPreview = Pick<Todo, "title" | "completed">;

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}
  
type TodoPreview = Omit<Todo, "description">;