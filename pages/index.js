import React, { Component } from "react";
import loadFonts from "../lib/fonts";
import Base from "../components/Base";

class Index extends Component {
  componentDidMount() {
    loadFonts();
  }
  render() {
    return <Base />;
  }
}

export default Index;
