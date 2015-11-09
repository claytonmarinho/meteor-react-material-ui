appLayout = React.createClass({
  render() {
    return <div>
      <h1> My Blog </h1>
      {this.props.content}
    </div>;
  }
});
