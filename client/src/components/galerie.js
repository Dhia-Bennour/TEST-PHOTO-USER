import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "@material-ui/core/Modal";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import { Input } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getImages, addImage, deleteImage } from "../action/image.action";

export class Galerie extends Component {
  state = {
    search: "",
    addModal: false,
    name: "",
    url: ""
  };
  componentDidMount = () => {
    const { userId } = this.props.match.params;
    console.log(userId);
    this.props.getImages(userId);
  };
  handleOpen = () => {
    this.setState({ addModal: true });
  };

  handleClose = () => {
    this.setState({ addModal: false });
  };
  render() {
    const { userId } = this.props.match.params;
    const { imageList, loading, deleteImage, addImage } = this.props;
    const { search, addModal, name, link } = this.state;
    const { handleClose, handleOpen } = this;
    console.log("imageList", imageList);
    if (loading) {
      return <span>spinner</span>;
    }
    return (
      <div className="galeries">
        <div className="galeries-header">
          <Input
          className="galerie-search"
            placeholder="search"
            onChange={(e) => this.setState({ search: e.target.value })}
          />
          <Button className="galerie-add" type="button" onClick={handleOpen}>
            Add photo
          </Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={addModal}
            onClose={handleClose}>
            <div className="paper">
              <Input
                placeholder="photo titre"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <Input
                placeholder="link"
                onChange={(e) => this.setState({ link: e.target.value })}
              />
              <Button
                type="button"
                onClick={() => {
                  addImage(userId, {
                    name,
                    link
                  });
                  handleClose();
                }}>
                Add
              </Button>
            </div>
          </Modal>
        </div>
        {imageList &&
          imageList
            .filter((image) => image.name.startsWith(search))
            .map((image) => {
              return (
                <Card style={{ maxWidth: 345 }} className="galeries-card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 140 }}
                      image={image.link}
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                  <CardActions className="galerie-action-zone">
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      {image.name}
                    </Typography>
                    <div>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => deleteImage(userId, image._id)}>
                        delete
                      </Button>
                      <Button size="small" color="primary">
                        zoom
                      </Button>
                    </div>
                  </CardActions>
                </Card>
              );
            })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imageList: state.imageList,
  loading: state.loading
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { getImages, deleteImage, addImage }
)(Galerie);
