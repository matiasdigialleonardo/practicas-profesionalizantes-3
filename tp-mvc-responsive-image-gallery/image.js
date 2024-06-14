class Image {
    constructor(srcURL, alt="Add a description of the image here") {
      this._src = srcURL;
      this._alt = alt;
      this.width = "600";
      this.height = "400";
    }
  }

export { Image };