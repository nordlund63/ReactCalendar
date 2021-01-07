function ActionLink(){
    function handleClick(e){
        e.preventDefault();
        console.log("A link was clicked.");
    }
    
    return (
    <a href="#" onClick={handleClick}>
        Click me
    </a>
    );
}

export default ActionLink;