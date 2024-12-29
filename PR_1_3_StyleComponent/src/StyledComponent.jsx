import "./StyledComponent.css"
const StyledComponent=({a})=>{

    return (
        <div className={`container ${a?'style-container':''}`}>
            Hello Guys This Is Example of Styled
        </div>
    );
};

export default StyledComponent;