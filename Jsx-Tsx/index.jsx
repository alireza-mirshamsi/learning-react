const title = <h1> hello world! </h1>
const container = (
    <div>
        <h1> title </h1>
    </div>
)

const name = "alireza"
const showName = <h1> hello {name} </h1>

const array = [19, 89, 99];
const paragraph = <p>The number is {array[2]}</p>;

function Welcome(props) {
    return <h1>Welcome {props.name}</h1>;
}

const inputElement = <input autoFocus />;
const buttonElement = <button onClick={() => console.log('clicked')}>Click Me!</button>;

const imageElement = <img src="./image.jpg" />;

const paragraph2 = <p className="text-red">text</p>;