const Greetings=({name})=>{
    const greetingMsg=name? `Hello ${name}`: "Hello Guys, Welcome to the React App";
    return (
        <>
         <h1>{greetingMsg}</h1>
        </>
    );
};

export default Greetings;