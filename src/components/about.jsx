export const About = (props) => {
  return (
    <div id="about">
      
            {" "}
            <img src="img/LOGO.png" className="img-responsive" alt="" />{" "}
            <h4>{props.data ? props.data.paragraph : "loading..."}</h4>
         
    </div>
  );
};
