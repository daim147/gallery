import React from "react";
export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      span: "0",
    };
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", () => {
      const height = this.imageRef.current.clientHeight;
      const span = Math.ceil(height / 10);
      this.setState({ span });
    });
  }
  render() {
    return (
      <div className="image" style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} src={this.props.src} alt="" />
      </div>
    );
  }
}
